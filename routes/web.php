<?php

use App\Models\User;
use App\Models\Payment;
use App\Models\Attachment;
use App\Models\Application;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Spatie\Honeypot\ProtectAgainstSpam;
use App\Http\Controllers\DropController;
use App\Http\Controllers\MultiController;
use App\Http\Controllers\BarcodeController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FakePayController;
use App\Http\Controllers\DocumentController;
// use App\Http\Controllers\WorkTravelController;
use App\Http\Controllers\UplatnicaController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\AttachmentController;
use App\Http\Controllers\VerifyEmailController;
use Livewire\Controllers\HttpConnectionHandler;
use App\Http\Controllers\User\UserPayController;
use App\Http\Controllers\Messages\SendToController;
use App\Http\Controllers\User\AupairFormController;
use App\Http\Controllers\Admin\WorkTravelController;
use App\Http\Controllers\Admin\AdminNoticeController;
use App\Http\Controllers\Admin\ApplicationController;
use App\Http\Controllers\Admin\CreateUserApplication;
use App\Http\Controllers\User\UserPayCrossController;
use App\Http\Controllers\Admin\AdminPaymentController;
use App\Http\Controllers\Admin\AdminSponsorController;
use App\Http\Controllers\Admin\DeleteNoticeController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserPayVirmanController;
use App\Http\Controllers\Admin\AdministratorController;
use App\Http\Controllers\Admin\AdminLanguageController;
use App\Http\Controllers\Admin\AdminUserNoteController;
use App\Http\Controllers\Messages\SendToManyController;
use App\Http\Controllers\User\ApplicationJobController;
use App\Http\Controllers\User\ApplicationPayController;
use App\Http\Controllers\User\UserPayBarcodeController;
use App\Http\Controllers\User\UserWorkTravelController;
use App\Http\Controllers\Admin\AdminDashboardController;
// use App\Http\Controllers\Admin\AdminWorkTravelController;
use App\Http\Controllers\Admin\ApplicationPdfController;
use App\Http\Controllers\Messages\MassMessageController;
use App\Http\Controllers\Messages\SentMessageController;
use App\Http\Controllers\User\ApplicationFormController;
use App\Http\Controllers\User\ApplicationVisaController;
use App\Http\Controllers\User\UserProfileDataController;
use App\Http\Controllers\User\UserConversationController;
use App\Http\Controllers\User\UserProfilePhotoController;
use App\Http\Controllers\Admin\AdminDestinationController;
use App\Http\Controllers\Admin\AdminUserPaymentController;
use App\Http\Controllers\Admin\ApplicationPriceController;
use App\Http\Controllers\Admin\MarkNoticeAsReadController;
use App\Http\Controllers\Admin\AdminConversationController;
use App\Http\Controllers\Admin\ApplicationAuPairController;
use App\Http\Controllers\Admin\ApplicationPaymentController;
use App\Http\Controllers\Messages\ReceivedMessageController;
use App\Http\Controllers\User\UserProfilePasswordController;
use App\Http\Controllers\Admin\ApplicationDocumentController;
use App\Http\Controllers\Admin\ApplicationTimelineController;
use App\Http\Controllers\User\ApplicationDocumentsController;
use App\Http\Controllers\User\ApplicationPayVirmanController;
use App\Http\Controllers\Admin\AdminApplicationNoteController;
use App\Http\Controllers\Fortify\ProfileInformationController;
use App\Http\Controllers\Messages\DeleteSentMessageController;
use App\Http\Controllers\Messages\MarkMessageAsReadController;
use App\Http\Controllers\User\ApplicationPayBarcodeController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\Admin\ApplicationWorkTravelController;
use App\Http\Controllers\Messages\DeleteReceivedMessageController;
use App\Http\Controllers\Messages\DeleteSentMassMessageController;
use App\Http\Controllers\Admin\AdminApplicationConversationController;
use App\Http\Controllers\User\ApplicationAupairController as ApplicationUserAupairController;
use App\Http\Controllers\User\ApplicationWorktravelController as ApplicationUserWorktravelController;

Route::get('/avio-karte', function () {
    return redirect('/aviokarte');
});

/* Route::get('/date', function () {
  return inertia('Date');
});

Route::get('/', function () {
  return view('welcome');
})->name('naslovna'); */

/* Route::get('/proba', function () {
    $payments = Payment::whereHas('application', function ($query) {
        $query->where('type', 'Au pair');
    })->get();
    return $payments->load('application');
  }); */

// Route::get('/multi', MultiController::class);
// Route::get('/uplatnica', UplatnicaController::class)->name('uplatnica');

/* Route::get('/', function () {
    return view('welcome');
})->name('naslovna'); */

/* Route::get('/', function () {
    return view('pages.home');
})->name('naslovna'); */

/* Route::get('/usluge', function () {
    return view('usluge');
});
Route::get('/o-nama', function () {
    return view('onama');
});
Route::get('/kontakt', function () {
    return view('kontakt');
});
Route::post('/kontakt', ContactController::class)->name('kontakt');
Route::get('/work-and-travel', function () {
    return view('worktravel');
});
Route::get('/zaposljavanje', function () {
    return view('zaposljavanje');
});
Route::get('/politika-o-privatnosti', function () {
    return view('privacy');
});
Route::get('/uvjeti', function () {
    return view('terms');
}); */

/* Route::get('/avio-karte', function () {
    return view('pages/aviokarte');
});

Route::get('/putovanja', function () {
    return view('pages/putovanja');
});

Route::get('/putovanja/{slug}', function () {
    return view('pages/putovanja-show');
});

Route::get('/putovanja/{slug}/{slug1}', function () {
    return view('pages/putovanja-show-item');
});

Route::get('/hoteli', function () {
    return view('pages/hoteli');
});

Route::get('/hoteli/{slug}', function () {
    return view('pages/hoteli-show');
});

Route::get('/hoteli/{slug}/{slug1}', function () {
    return view('pages/hoteli-show-item');
});

Route::get('/all-abroad', function () {
    return view('pages/all-abroad');
});

Route::get('/all-abroad/{slug}', function () {
    return view('pages/all-abroad-show');
});

Route::get('/work-and-travel', function () {
    return view('pages/work-travel');
});

Route::get('/au-pair', function () {
    return view('pages/au-pair');
});

Route::get('/obrazovni-programi', function () {
    return view('pages/obrazovni-programi');
});

Route::get('/obrazovni-programi/{slug}', function () {
    return view('pages/obrazovni-programi-show');
});

Route::get('/novosti/{slug}', function () {
    return view('pages/novosti-show');
});

Route::get('/posebna-ponuda/{slug}', function () {
    return view('pages/posebna-ponuda-show');
});

Route::get('/akcije', function () {
    return view('pages/akcije');
});

Route::get('/akcije/{slug}', function () {
    return view('pages/akcije-show');
});

Route::get('/o-nama-i-kontakt', function () {
    return view('pages/o-nama-i-kontakt');
});
Route::post('/kontakt', ContactController::class)->name('kontakt');

Route::get('/aktualno/{slug}', function () {
    return view('pages/aktualno');
});

Route::get('/politika-privatnosti', function () {
    return view('pages/privacy');
});
Route::get('/uvjeti-koristenja', function () {
    return view('pages/terms');
}); */

// The Sitemap route to the sitemap.xml
Route::statamic('/sitemap.xml', 'sitemap/sitemap', [
    'layout' => null
]);

// Fake pay
Route::middleware(['auth'])->group(function () {
    Route::get('/fakepay', [FakePayController::class, 'pay'])->name('fake.pay');
    Route::get('/fakepayform', [FakePayController::class, 'show'])->name('fake.pay.form');
    Route::get('/fakesuccess', [FakePayController::class, 'success'])->name('fake.pay.success');
    Route::get('/fakecancel', [FakePayController::class, 'cancel'])->name('fake.pay.cancel');
    Route::get('/barcode', BarcodeController::class);
});

// Admin dashboard
Route::prefix('admin')->name('admin.')->middleware(['auth', 'is.admin'])->group(function () {
    Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');
    Route::get('/users/{user}/create-application', CreateUserApplication::class)->name('users.create-application');
    Route::get('users/export/{format}',  [UserController::class, 'export'])->name('users.export');
    Route::resource('users', UserController::class)->middleware('remember', ['only' => 'index']);
    Route::get('administrators', AdministratorController::class)->name('administrators')->middleware('remember');
    Route::prefix('worktravel')->name('worktravel.')->group(function () {
      Route::get('/applications/documents/{application}', ApplicationDocumentController::class)->name('applications.documents');
      Route::get('/applications/timeline/{application}', ApplicationTimelineController::class)->name('applications.timeline')->middleware('remember');
      Route::get('/applications', [ApplicationWorkTravelController::class, 'index'])->name('applications')->middleware('remember');
      Route::get('/applications/export/{format}', [ApplicationWorkTravelController::class, 'export'])->name('applications.export');
      Route::resource('applications', ApplicationController::class)->only('show', 'edit');
      Route::resource('applications.payments', ApplicationPaymentController::class)->middleware('remember', ['only' => 'index']);
      Route::resource('applications.notes', AdminApplicationNoteController::class)->middleware('remember', ['only' => 'index']);
      Route::get('application/conversation/{application}', AdminApplicationConversationController::class)->name('application.conversation');
    });
    Route::prefix('aupair')->name('aupair.')->group(function () {
      Route::get('/applications/documents/{application}', ApplicationDocumentController::class)->name('applications.documents');
      Route::get('/applications/timeline/{application}', ApplicationTimelineController::class)->name('applications.timeline')->middleware('remember');
      Route::get('/applications', [ApplicationAuPairController::class, 'index'])->name('applications')->middleware('remember');
      Route::get('/applications/export/{format}', [ApplicationAuPairController::class, 'export'])->name('applications.export');
      Route::resource('applications', ApplicationController::class)->only('show', 'edit');
      Route::resource('applications.payments', ApplicationPaymentController::class)->middleware('remember', ['only' => 'index']);
      Route::resource('applications.notes', AdminApplicationNoteController::class)->middleware('remember', ['only' => 'index']);
      Route::get('application/conversation/{application}', AdminApplicationConversationController::class)->name('application.conversation');
    });
    Route::post('/applications/price/{application}', ApplicationPriceController::class)->name('applications.price');
    Route::get('/applications/timeline/{application}', ApplicationTimelineController::class)->name('applications.timeline')->middleware('remember');
    Route::get('/applications/pdf/{application}', [ApplicationPdfController::class, 'create'])->name('applications.pdf');
    // Route::get('/applications/payments/{application}', [ApplicationPaymentController::class, 'index'])->name('applications.payments');
    // Route::post('/applications/payments/{application}', [ApplicationPaymentController::class, 'store'])->name('applications.payments.store');
    Route::get('payments/export/{format}',  [AdminPaymentController::class, 'export'])->name('payments.export');
    Route::resource('payments', AdminPaymentController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('worktravels', WorkTravelController::class)->middleware('remember', ['only' => 'index']);
    // Route::get('/applications/worktravel', ApplicationWorkTravelController::class)->name('applications.worktravel')->middleware('remember');
    // Route::get('/applications/aupair', ApplicationAuPairController::class)->name('applications.aupair')->middleware('remember');
    Route::resource('applications.payments', ApplicationPaymentController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('applications', ApplicationController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('applications.notes', AdminApplicationNoteController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('sponsors', AdminSponsorController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('destinations', AdminDestinationController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('languages', AdminLanguageController::class)->middleware('remember', ['only' => 'index']);
    // Route::resource('worktravels', AdminWorkTravelController::class)->middleware('remember', ['only' => 'index']);
    Route::resource('notices', AdminNoticeController::class)->only(['index'])->middleware('remember');
    Route::post('/delete-notice', DeleteNoticeController::class)->name('delete.notice');
    Route::post('/mark-notice-as-read', MarkNoticeAsReadController::class)->name('mark-notice-as-read');
    Route::post('/send-message-to-many', SendToManyController::class)->name('send-message-to-many');
    Route::resource('users.notes', AdminUserNoteController::class);
    Route::resource('users.payments', AdminUserPaymentController::class);
    Route::get('users/{user}/conversation', AdminConversationController::class)->name('conversation');
});

Route::prefix('user')->name('user.')->middleware(['auth'])->group(function () {
    // Route::get('/application/form', [ApplicationFormController::class, 'create'])->name('application.form');
    Route::get('/worktravel/form', [ApplicationFormController::class, 'create'])->name('worktravel.form');
    Route::get('/worktravel/application', ApplicationUserWorktravelController::class)->name('worktravel.application');
    Route::get('/aupair/form', [ApplicationFormController::class, 'create'])->name('aupair.form');
    Route::get('/aupair/application', ApplicationUserAupairController::class)->name('aupair.application');
    // Route::get('/aupair/form', [AupairFormController::class, 'create'])->name('aupair.form');
    Route::prefix('worktravel')->name('worktravel.')->group(function () {
        // Route::get('/application/form/edit/{application}', [ApplicationFormController::class, 'edit'])->name('application.form.edit');
    });
    Route::prefix('aupair')->name('aupair.')->group(function () {
        // Route::get('/application/form/edit/{application}', [ApplicationFormController::class, 'edit'])->name('application.form.edit');
    });
    Route::get('/application/form/edit', [ApplicationFormController::class, 'edit'])->name('application.form.edit');
    Route::post('/application/form/store', [ApplicationFormController::class, 'store'])->name('application.form.store');
    Route::put('/application/form/{application}/update', [ApplicationFormController::class, 'update'])->name('application.form.update');
});

// User dashboard
Route::prefix('user')->name('user.')->middleware(['auth', 'is.user'])->group(function () {
    Route::get('/dashboard', UserDashboardController::class)->name('dashboard');
    Route::prefix('worktravel')->name('worktravel.')->group(function () {
        Route::get('/application/documents/{application}', ApplicationDocumentsController::class)->name('application.documents');
        Route::get('/application/pay/{application}', [ApplicationPayController::class, 'show'])->name('application.pay');
        // Route::get('/application/documents', ApplicationDocumentsController::class)->name('application.documents');
    });
    Route::prefix('aupair')->name('aupair.')->group(function () {
        Route::get('/application/documents/{application}', ApplicationDocumentsController::class)->name('application.documents');
        Route::get('/application/pay/{application}', [ApplicationPayController::class, 'show'])->name('application.pay');
        // Route::get('/application/documents', ApplicationDocumentsController::class)->name('application.documents');
    });
    // Route::get('/application/documents', ApplicationDocumentsController::class)->name('application.documents');
    Route::get('/application/visa', ApplicationVisaController::class)->name('application.visa');
    Route::get('/application/job', ApplicationJobController::class)->name('application.job');
    // Route::get('/application/pay', [ApplicationPayController::class, 'show'])->name('application.pay');
    Route::post('/application/pay/barcode', ApplicationPayBarcodeController::class)->name('application.pay.barcode');
    Route::get('/application/pay/virman', ApplicationPayVirmanController::class)->name('application.pay.virman');
    Route::get('/application/pay/payment', [ApplicationPayController::class, 'pay'])->name('application.pay.payment');
    // Route::get('/application/pay/barcode', [ApplicationPayController::class, 'barcode'])->name('application.pay.barcode');
    Route::get('/application/pay/payment/success', [ApplicationPayController::class, 'success'])->name('application.pay.payment.success');
    Route::get('/application/pay/payment/cancel', [ApplicationPayController::class, 'cancel'])->name('application.pay.payment.cancel');
    Route::get('conversation', UserConversationController::class)->name('conversation');
    Route::get('/paycross', UserPayCrossController::class)->name('paycross');
    Route::get('/pay', [UserPayController::class, 'show'])->name('pay');
    Route::post('/pay/barcode', UserPayBarcodeController::class)->name('pay.barcode');
    Route::get('/pay/virman', UserPayVirmanController::class)->name('pay.virman');
    Route::get('/pay/payment', [UserPayController::class, 'pay'])->name('pay.payment');
    Route::get('/worktravels', [UserWorkTravelController::class, 'index'])->name('worktravels')->middleware('remember');;
    Route::get('/worktravels/{worktravel}', [UserWorkTravelController::class, 'show'])->name('worktravels.show');
});

Route::prefix('user')->name('user.')->middleware(['auth'])->group(function () {
    Route::get('/profile/data', UserProfileDataController::class)->name('profile.data');
    Route::get('/profile/password', UserProfilePasswordController::class)->name('profile.password');
    Route::get('/profile/photo', [UserProfilePhotoController::class, 'show'])->name('profile.photo');
    Route::put('/profile/photo', [UserProfilePhotoController::class, 'update'])->name('update.profile.photo');
    Route::delete('/profile/photo', [UserProfilePhotoController::class, 'destroy'])->name('destroy.profile.photo');
});

Route::get('/cancel', [ApplicationPayController::class, 'cancel']);

Route::prefix('messages')->middleware(['verified', 'auth'])->name('messages.')->group(function () {
    Route::resource('received_messages', ReceivedMessageController::class)->only(['index'])->middleware('remember');
    Route::resource('sent_messages', SentMessageController::class)->only(['index'])->middleware('remember');
    Route::resource('mass_messages', MassMessageController::class)->only(['index'])->middleware('remember');
    Route::resource('users.sendmessage', SendToController::class)->only(['store']);
    Route::post('/mark-message-as-read', MarkMessageAsReadController::class)->name('mark-message.notification');
    Route::post('/delete-received-message', DeleteReceivedMessageController::class)->name('delete.received');
    Route::post('/delete-sent-message', DeleteSentMessageController::class)->name('delete.sent');
    Route::post('/delete-sent-mass-message', DeleteSentMassMessageController::class)->name('delete.sent.massmesage');
});

Route::middleware(['auth'])->group(function () {
    Route::post('attachments-store', [AttachmentController::class, 'store'])->name('attachments.store');
    Route::delete('attachments-remove/{media}', [AttachmentController::class, 'destroy'])->name('attachments.destroy');
    Route::delete('attachment-remove/{attachment}', [AttachmentController::class, 'removeAttachment'])->name('attachment.remove');
    Route::get('attachments-download/{attachment}', [AttachmentController::class, 'download'])->name('attachments.download');
    Route::get('attachments-show/{attachment}', [AttachmentController::class, 'show'])->name('attachments.show');
    Route::post('documents-store/{application}', [DocumentController::class, 'store'])->name('documents.store');
    Route::get('documents-download/{document}', [DocumentController::class, 'download'])->name('documents.download');
    Route::get('documents-show/{document}', [DocumentController::class, 'show'])->name('documents.show');
    Route::delete('documents-remove/{document}', [DocumentController::class, 'destroy'])->name('documents.destroy');
    Route::post('dropzone-media', [DropController::class, 'storeMedia'])->name('dropzone.storeMedia');
});

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware(['guest', 'honey']);
Route::put('/user/profile-information', [ProfileInformationController::class, 'update'])
    ->middleware(['auth'])
    ->name('user-profile-information.update');

Route::get('/med', function() {
    $med = Attachment::first()->getMedia('attachments');
    return $med;
});

/*   Route::get('/email/verify/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify'); */
