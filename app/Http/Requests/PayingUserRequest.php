<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class PayingUserRequest extends FormRequest
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
        return [
            "name" => 'required',
            "last_name" => 'required',
            "email" => 'required',
            "phone" => 'required',
            "country" => 'required',
            "address" => 'required',
            "postal_code" => 'required',
            "city" => 'required',
            "subtotal" => 'required',
        ];
    }

    public function messages()
    {
        return [
            'required' => 'Ovo polje je obvezno'
        ];
    }

    public function validated()
    {
        return auth()->user() ?
            parent::validated() :
            array_merge(parent::validated(), ['role_id' => User::getRoleID('anonimus')]);
    }
}
