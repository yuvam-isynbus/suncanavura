<?php

namespace App\Providers;

use Livewire\Livewire;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\ServiceProvider;
use Spatie\Honeypot\ProtectAgainstSpam;
use Illuminate\Database\Eloquent\Builder;
use Lukeraymonddowning\Honey\Facades\Honey;
use Illuminate\Pagination\LengthAwarePaginator;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    $this->registerLengthAwarePaginator();
    Livewire::addPersistentMiddleware([
      ProtectAgainstSpam::class,
    ]);
  }

  protected function registerLengthAwarePaginator()
  {
    $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
      return new class(...array_values($values)) extends LengthAwarePaginator
      {
        public function only(...$attributes)
        {
          return $this->transform(function ($item) use ($attributes) {
            return $item->only($attributes);
          });
        }

        public function transform($callback)
        {
          $this->items->transform($callback);

          return $this;
        }

        public function toArray()
        {
          return [
            'data' => $this->items->toArray(),
            'links' => $this->links(),
            'total' => $this->total,
            'per_page' => $this->perPage,
            'current_page' => $this->currentPage,
            'last_page' => $this->lastPage,
          ];
        }

        public function links($view = null, $data = [])
        {
          $this->appends(Request::all());

          $window = UrlWindow::make($this);

          $elements = array_filter([
            $window['first'],
            is_array($window['slider']) ? '...' : null,
            $window['slider'],
            is_array($window['last']) ? '...' : null,
            $window['last'],
          ]);

          return Collection::make($elements)->flatMap(function ($item) {
            if (is_array($item)) {
              return Collection::make($item)->map(function ($url, $page) {
                return [
                  'url' => $url,
                  'label' => $page,
                  'active' => $this->currentPage() === $page,
                ];
              });
            } else {
              return [
                [
                  'url' => null,
                  'label' => '...',
                  'active' => false,
                ],
              ];
            }
          })->prepend([
            'url' => $this->previousPageUrl(),
            'label' => 'Previous',
            'active' => false,
          ])->push([
            'url' => $this->nextPageUrl(),
            'label' => 'Next',
            'active' => false,
          ]);
        }
      };
    });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Builder::macro('whereLike', function ($attributes, string $searchTerm) {
      $this->where(function (Builder $query) use ($attributes, $searchTerm) {
        foreach (Arr::wrap($attributes) as $attribute) {
          $query->when(
            str_contains($attribute, '.'),
            function (Builder $query) use ($attribute, $searchTerm) {
              [$relationName, $relationAttribute] = explode('.', $attribute);

              $query->orWhereHas($relationName, function (Builder $query) use ($relationAttribute, $searchTerm) {
                $query->where($relationAttribute, 'LIKE', "%{$searchTerm}%");
              });
            },
            function (Builder $query) use ($attribute, $searchTerm) {
              $query->orWhere($attribute, 'LIKE', "%{$searchTerm}%");
            }
          );
        }
      });

      return $this;
    });

    Honey::failUsing(function () {
      abort(404, "Move along. Nothing to see here...");
    });
  }
}
