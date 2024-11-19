<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReservasiBengkel extends Model
{
    use HasFactory;

    protected $table = 'reservasi_bengkel';

    protected $fillable = [
        'id_layanan',
        'id_user',
        'kendaraan',
        'status',
        'tanggal',
        'total',
        'kembalian',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function layanan()
    {
        return $this->belongsTo(Layanan::class, 'id_layanan');
    }
}
