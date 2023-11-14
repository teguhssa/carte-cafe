<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MenuStoreRequest extends FormRequest
{
    public function rules(): array
    {
        return 
        [
            "namaMenu" => ["required"],
            "fotoMenu" => ["mimes:png,jpg,jpeg,svg"],
            "harga" => ["required"]
        ];
    }
}