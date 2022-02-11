<?php

namespace App\StorableEvents;

use App\Models\Application;
use Spatie\EventSourcing\StoredEvents\ShouldBeStored;

class ApplicationEvent extends ShouldBeStored
{
    public $application;
    public $data;
    public function __construct(Application $application, $data)
    {
        $this->application = $application;
        $this->data = $data;
    }
}
