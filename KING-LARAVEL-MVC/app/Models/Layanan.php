<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    protected $table = 'layanan';
    protected $primaryKey = 'id_layanan';

    public function transaksi()
    {
        return $this->hasMany(Layanan::class, 'id_layanan', 'id_layanan');
    }
}
