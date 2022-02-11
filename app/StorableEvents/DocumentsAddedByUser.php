<?php

namespace App\StorableEvents;

use App\Models\Application;
use App\StorableEvents\ApplicationEvent;

class DocumentsAddedByUser extends ApplicationEvent
{
    public function __construct(Application $application, $data)
    {
        parent::__construct($application, $data);
    }
}
