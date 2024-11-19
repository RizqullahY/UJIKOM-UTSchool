<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    protected $table = 'pelanggan';
    protected $primaryKey = 'id_pelanggan';

    public function transaksi()
    {
        return $this->hasMany(TransaksiLayananBengkel::class, 'id_pelanggan', 'id_pelanggan');
    }
}
