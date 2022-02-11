<?php

namespace App\Aggregates;

use App\Models\Application;
use App\StorableEvents\AddInfo;
use App\StorableEvents\UserPayment;
use App\StorableEvents\AdminPayment;
use App\StorableEvents\AdminPaymentDelete;
use App\StorableEvents\AdminPaymentUpdate;
use App\StorableEvents\DocumentsAddedByUser;
use App\StorableEvents\DocumentsAddedByAdmin;
use App\StorableEvents\ApplicationCreatedByUser;
use App\StorableEvents\ApplicationUpdatedByUser;
use App\StorableEvents\ApplicationCreatedByAdmin;
use App\StorableEvents\ApplicationUpdatedByAdmin;
use Spatie\EventSourcing\AggregateRoots\AggregateRoot;

class ApplicationAggregateRoot extends AggregateRoot
{
    public function createApplicationByAdmin(Application $application, $data)
    {
        $this->recordThat(new ApplicationCreatedByAdmin($application, $data));
        return $this;
    }
    public function createApplicationByUser(Application $application, $data)
    {
        $this->recordThat(new ApplicationCreatedByUser($application, $data));
        return $this;
    }

    public function updateApplicationByUser(Application $application, $data)
    {
        $this->recordThat(new ApplicationUpdatedByUser($application, $data));
        return $this;
    }

    public function updateApplicationByAdmin(Application $application, $data)
    {
        $this->recordThat(new ApplicationUpdatedByAdmin($application, $data));
        return $this;
    }

    public function addDocumentsByUser(Application $application, $data)
    {
        $this->recordThat(new DocumentsAddedByUser($application, $data));
        return $this;
    }
    public function addDocumentsByAdmin(Application $application, $data)
    {
        $this->recordThat(new DocumentsAddedByAdmin($application, $data));
        return $this;
    }

    public function userPayment(Application $application, $data)
    {
        $this->recordThat(new UserPayment($application, $data));
        return $this;
    }

    public function adminPayment(Application $application, $data)
    {
        $this->recordThat(new AdminPayment($application, $data));
        return $this;
    }

    public function adminPaymentUpdate(Application $application, $data)
    {
        $this->recordThat(new AdminPaymentUpdate($application, $data));
        return $this;
    }

    public function adminPaymentDelete(Application $application, $data)
    {
        $this->recordThat(new AdminPaymentDelete($application, $data));
        return $this;
    }

    /* public function applyDocumentsAdded(DocumentsAdded $event)
    {
        // $this->balance += $event->amount;
        info($event->data);
    } */
}
