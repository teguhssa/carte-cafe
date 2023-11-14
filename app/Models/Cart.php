<?php

namespace App\Models;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_order',
        'menu_id',
        'qty',
        'total',
        'isDeleted'
    ];

    public function menu(): BelongsTo {
        return $this->belongsTo(Menu::class);
    }
}
