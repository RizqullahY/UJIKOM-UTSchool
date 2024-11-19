<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransaksiLayananBengkelTable extends Migration
{
    public function up()
    {
        Schema::create('transaksi_layanan_bengkels', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_pelanggan');
            $table->unsignedBigInteger('id_kendaraan');
            $table->unsignedBigInteger('id_layanan');
            $table->date('tanggal_transaksi');
            $table->decimal('biaya_transaksi', 10, 2);
            $table->string('status_transaksi');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('transaksi_layanan_bengkels');
    }
}
