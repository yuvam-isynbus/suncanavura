<?php
namespace App\Http\Services;

use App\Events\TimelineEvent;
use App\Aggregates\ApplicationAggregateRoot;

class ApplicationAggregateService
{
    public function record($method, $application, $data)
    {
        $aggregateRoot = ApplicationAggregateRoot::retrieve($application->uuid);
        // $aggregateRoot->addDocuments($application, $data);
        $aggregateRoot->$method($application, $data);
        $aggregateRoot->persist();
        event(new TimelineEvent($application));
    }
}
