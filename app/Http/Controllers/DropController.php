<?php

namespace App\Http\Controllers;

use App\Drop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Traits\MediaUploadingTrait;

class DropController extends Controller
{
    use MediaUploadingTrait;
}
