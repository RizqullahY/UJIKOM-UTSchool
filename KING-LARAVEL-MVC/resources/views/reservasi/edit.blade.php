<!DOCTYPE html>
<html lang="en" data-bs-theme='dark'>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Edit Transaksi Layanan Bengkel</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
   <div class="" id="app">
      <div class="main-wrapper">
         <div class="main-content">
            <div class="container">
               <form action="{{ route('transaksi-layanan-bengkel.update', $transaksiLayananBengkel->id) }}" method="POST">
                  @csrf
                  @method('PUT') 
            
                  <div class="card mt-5">
                     <div class="card-header">
                        <h3>Edit Transaksi Layanan Bengkel</h3>
                     </div>
                     <div class="card-body">
                        @if ($errors->any())
                              <div class="alert alert-danger">
                                 <div class="alert-title"><h4>Error</h4></div>
                                 <ul>
                                    @foreach ($errors->all() as $error)
                                          <li>{{ $error }}</li>
                                    @endforeach
                                 </ul>
                              </div>
                        @endif
                        @if (session('success'))
                              <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        @if (session('error'))
                              <div class="alert alert-danger">{{ session('error') }}</div>
                        @endif
            
                        <div class="mb-3">
                              <label class="form-label" for="id">ID</label>
                              <input type="text" class="form-control" name="id" value="{{ $transaksiLayananBengkel->id }}" placeholder="ID" readonly>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="id_pelanggan">Pelanggan</label>
                              <select class="form-select" name="id_pelanggan" required>
                                 <option value="">Pilih Pelanggan</option>
                                 @foreach($pelanggans as $pelanggan)
                                    <option value="{{ $pelanggan->id_pelanggan }}" {{ $transaksiLayananBengkel->id_pelanggan == $pelanggan->id_pelanggan ? 'selected' : '' }}>
                                       {{ $pelanggan->nama_pelanggan }}
                                    </option>
                                 @endforeach
                              </select>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="id_kendaraan">Kendaraan</label>
                              <select class="form-select" name="id_kendaraan" required>
                                 <option value="">Pilih Kendaraan</option>
                                 @foreach($kendaraans as $kendaraan)
                                    <option value="{{ $kendaraan->id_kendaraan }}" {{ $transaksiLayananBengkel->id_kendaraan == $kendaraan->id_kendaraan ? 'selected' : '' }}>
                                       {{ $kendaraan->nopol }} - {{ $kendaraan->merk }} {{ $kendaraan->tipe }}
                                    </option>
                                 @endforeach
                              </select>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="id_layanan">Layanan</label>
                              <select class="form-select" name="id_layanan" required>
                                 <option value="">Pilih Layanan</option>
                                 @foreach($layanans as $layanan)
                                    <option value="{{ $layanan->id_layanan }}" {{ $transaksiLayananBengkel->id_layanan == $layanan->id_layanan ? 'selected' : '' }}>
                                       {{ $layanan->nama_layanan }} - {{ $layanan->deskripsi }}
                                    </option>
                                 @endforeach
                              </select>
                        </div>                   
                        <div class="mb-3">
                              <label class="form-label" for="tanggal_transaksi">Tanggal Transaksi</label>
                              <input type="date" class="form-control" name="tanggal_transaksi" value="{{ $transaksiLayananBengkel->tanggal_transaksi }}" placeholder="Tanggal Transaksi" required>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="biaya_transaksi">Biaya Transaksi</label>
                              <input type="number" step="0.01" class="form-control" name="biaya_transaksi" value="{{ $transaksiLayananBengkel->biaya_transaksi }}" placeholder="Biaya Transaksi" required>
                        </div>
                        <div class="mb-3">
                              <label class="form-label" for="status_transaksi">Status Transaksi</label>
                              <select class="form-select" name="status_transaksi" required>
                                 <option value="">Pilih Status</option>
                                 <option value="Lunas" {{ $transaksiLayananBengkel->status_transaksi == 'Lunas' ? 'selected' : '' }}>Lunas</option>
                                 <option value="Belum Lunas" {{ $transaksiLayananBengkel->status_transaksi == 'Belum Lunas' ? 'selected' : '' }}>Belum Lunas</option>
                                 <option value="Menunggu Pembayaran" {{ $transaksiLayananBengkel->status_transaksi == 'Menunggu Pembayaran' ? 'selected' : '' }}>Menunggu Pembayaran</option>
                              </select>
                        </div>
                     </div>
                     <div class="card-footer">
                        <button class="btn btn-warning" type="submit">Update</button>
                        <a href="{{ route('transaksi-layanan-bengkel.index') }}" class="btn btn-secondary">Back</a>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>

   <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
</body>
</html>
