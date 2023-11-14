<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = [
        'namaMenu',
        'fotoMenu',
        'harga',
    ];

    public function cart():HasOne {
        return $this->hasOne(Cart::class);
    }
}
