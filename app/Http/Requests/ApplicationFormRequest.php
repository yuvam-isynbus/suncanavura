<?php

namespace App\Http\Requests;

use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ApplicationFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return auth()->user()->role === 'admin'
        ? [
            'enter_date' => ['nullable', 'date_format:d. m. Y.'],
            'birth_date' => ['nullable', 'date_format:d. m. Y.'],
            'program' => [''],
            'sponsor_id' => [''],
            'destination_id' => [''],
            'id_number' => [''],
            'id_start_date' => ['nullable', 'date_format:d. m. Y.'],
            'id_end_date' => ['nullable', 'date_format:d. m. Y.'],
            'country' => ['required'],
            'street_address' => [''],
            'home_number' => [''],
            'phone' => [''],
            'skype' => [''],
            'city' => ['required'],
            'postal_code' => ['required','numeric'],
            'university' => ['required'],
            'university_program' => ['required'],
            'university_year' => ['required'],
            'university_course' => ['required'],
            'university_start_date' => ['nullable','date_format:d. m. Y.'],
            'university_end_date' => ['nullable','date_format:d. m. Y.'],
            'languages' => [''],
            'health' => ['required'],
            'terms' => ['required'],
            'type' => [''],
        ]
        : [
          'birth_date' => ['required', 'date_format:d. m. Y.'],
          'program' => [''],
          'sponsor_id' => [''],
          'destination_id' => [''],
          'id_number' => ['required'],
          'id_start_date' => ['required', 'date_format:d. m. Y.'],
          'id_end_date' => ['required', 'date_format:d. m. Y.'],
          'country' => ['required'],
          'street_address' => ['required'],
          'home_number' => [''],
          'phone' => ['required'],
          'skype' => [''],
          'city' => ['required'],
          'postal_code' => ['required','numeric'],
          'university' => ['required'],
          'university_program' => ['required'],
          'university_year' => ['required'],
          'university_course' => ['required'],
          'university_start_date' => ['required','date_format:d. m. Y.'],
          'university_end_date' => ['required','date_format:d. m. Y.'],
          'languages' => [''],
          'health' => ['required'],
          'terms' => ['required', Rule::in([true])],
          'type' => [''],
      ];
    }

    /*     protected function prepareForValidation()
        {
            $this->merge([
                'birth_date' => Carbon::createFromFormat('d. m. Y.', $this->birth_date),
                'id_start_date' => Carbon::createFromFormat('d. m. Y.', $this->id_start_date),
                'id_end_date' => Carbon::createFromFormat('d. m. Y.', $this->id_end_date),
                'university_start_date' => Carbon::createFromFormat('d. m. Y.', $this->university_start_date),
                'university_end_date' => Carbon::createFromFormat('d. m. Y.', $this->university_end_date),
            ]);
        } */
}
