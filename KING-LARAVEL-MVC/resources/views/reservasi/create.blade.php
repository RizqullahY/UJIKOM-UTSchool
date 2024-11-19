<!DOCTYPE html>
<html lang="en" data-bs-theme='dark'>
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Create Transaction Service Workshop</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
   <div class="" id="app">
      <div class="main-wrapper">
         <div class="main-content">
            <div class="container">
               <form action="{{ route('transaksi-layanan-bengkel.store') }}" method="post">
                  @csrf
                  <div class="card mt-5">
                     <div class="card-header">
                        <h3>Create Transaction Service Workshop</h3>
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
                           <label class="form-label" for="id_pelanggan">Customer</label>
                           <select class="form-select" name="id_pelanggan" required>
                              <option value="">Pilih Customer</option>
                              @foreach($pelanggans as $pelanggan)
                                 <option value="{{ $pelanggan->id_pelanggan }}">{{ $pelanggan->id_pelanggan }} - {{ $pelanggan->nama_pelanggan }}</option>
                              @endforeach
                           </select>
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="id_kendaraan">Vehicle</label>
                           <select class="form-select" name="id_kendaraan" required>
                              <option value="">Pilih Vehicle</option>
                              @foreach($kendaraans as $kendaraan)
                                 <option value="{{ $kendaraan->id_kendaraan }}">{{ $kendaraan->id_kendaraan }} - {{ $kendaraan->nopol }} - {{ $kendaraan->merk }} {{ $kendaraan->tipe }}</option>
                              @endforeach
                           </select>
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="id_layanan">Service</label>
                           <select class="form-select" name="id_layanan" required>
                              <option value="">Pilih Service</option>
                              @foreach($layanans as $layanan)
                                 <option value="{{ $layanan->id_layanan }}">{{ $layanan->id_layanan }} - {{ $layanan->nama_layanan }} - {{ $layanan->deskripsi }}</option>
                              @endforeach
                           </select>
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="tanggal_transaksi">Transaction Date</label>
                           <input type="date" class="form-control" name="tanggal_transaksi" value="{{ old('tanggal_transaksi') }}" placeholder="Transaction Date" required>
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="biaya_transaksi">Transaction Cost</label>
                           <input type="number" step="0.01" class="form-control" name="biaya_transaksi" value="{{ old('biaya_transaksi') }}" placeholder="Transaction Cost" required>
                        </div>
                        <div class="mb-3">
                           <label class="form-label" for="status_transaksi">Transaction Status</label>
                           <select class="form-select" name="status_transaksi" required>
                              <option value="">Pilih Status</option>
                              <option value="Lunas" {{ old('status_transaksi') == 'Lunas' ? 'selected' : '' }}>Lunas</option>
                              <option value="Belum Lunas" {{ old('status_transaksi') == 'Belum Lunas' ? 'selected' : '' }}>Belum Lunas</option>
                              <option value="Menunggu Pembayaran" {{ old('status_transaksi') == 'Menunggu Pembayaran' ? 'selected' : '' }}>Menunggu Pembayaran</option>
                           </select>
                        </div>
                     </div>
                     <div class="card-footer">
                        <button class="btn btn-success" type="submit">Create</button>
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
