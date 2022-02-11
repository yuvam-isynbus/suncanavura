<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Application;
use Illuminate\Support\Arr;
use Illuminate\Database\Seeder;
use Database\Factories\ApplicationFactory;
use App\Aggregates\ApplicationAggregateRoot;
use App\Notifications\SyncMessageNotification;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $users = User::factory(5)->create([
          'has_application' => true,
          'entered_by_admin' => true,
        ]);
        $admin = User::factory()->create([
            'email' => 'admin@admin.com',
            'role' => 'admin'
        ]);
        $admin2 = User::factory()->create([
            'email' => 'boris@studiovista.hr',
            'role' => 'admin'
        ]);
        $faker = \Faker\Factory::create();
        foreach ($users as $user) {
            $admin->notify(new SyncMessageNotification($user, $faker->sentence(4), $faker->paragraph(), null, false));
            $admin2->notify(new SyncMessageNotification($user, $faker->sentence(4), $faker->paragraph(), null, false));
            $user->notify(new SyncMessageNotification($admin, $faker->sentence(4), $faker->paragraph(), null, false));
            $user->notify(new SyncMessageNotification($admin2, $faker->sentence(4), $faker->paragraph(), null, false));
            $application = Application::factory()->create([
              'user_id' => $user->id
            ]);
            $aggregateRoot = ApplicationAggregateRoot::retrieve($application->uuid);
            $method = 'createApplicationByUser';
            $data = Arr::except($application->toArray(), ['id', 'uuid', 'created_at', 'updated_at']);
            $aggregateRoot->$method($application, $data);
            $aggregateRoot->persist();
        }
    }
}
