<?php
namespace App\Models;

use App\Models\Application;
use App\Http\Traits\HasUuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Note extends Model
{
    use HasFactory;
    use SoftDeletes;
    use HasUuid;

    protected $guarded = [];
    /* public function application()
    {
        return $this->belongsTo(Application::class);
    } */

    public function noteable()
    {
        return $this->morphTo();
    }
}
