<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Import extends Model
{
    protected $fillable = [
        'user_id',
        'updated',
        'created',
        'status',
        'type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}