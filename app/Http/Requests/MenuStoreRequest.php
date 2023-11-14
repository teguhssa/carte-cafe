<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MenuStoreRequest extends FormRequest
{
    public function rules(): array
    {
        return 
        [
            "namaMenu" => ["required"],
            "fotoMenu" => ["required", "mimes:png,jpg,jpeg,svg"],
            "harga" => ["required"]
        ];
    }
}