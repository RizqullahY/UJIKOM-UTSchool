<!DOCTYPE html>
<html lang="en" data-bs-theme='dark'>

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Show Reservation Workshop</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
   <style>
      .transaction-card {
            transition: transform 0.2s;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      .transaction-card:hover {
            transform: scale(1.02);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
      }
   </style>
</head>

<body>
   <div class="container mt-5">
      <div class="row justify-content-center">
            <div class="col-md-8">
               <div class="card transaction-card">
                  <div class="card-header text-white">
                        <h3 class="card-title">Detail Reservasi Bengkel</h3>
                  </div>
                  <div class="card-body">
                        <h5 class="card-subtitle mb-2 text-muted">ID Reservasi : {{ $reservation->id }}</h5>
                        <p class="card-text">
                           <strong>Layanan : </strong>{{ $reservation->id_layanan }} -
                           {{ $reservation->layanan->nama_layanan }}<br>
                           <strong>User : </strong> {{ $reservation->id_user }} -
                           {{ $reservation->user->username }}<br>
                           <strong>Kendaraan :</strong> {{ $reservation->kendaraan }} <br>
                           <strong>Status :</strong> {{ $reservation->status }} <br>
                           <strong>Tanggal :</strong> {{ $reservation->tanggal }} <br>
                           <strong>Harga Layanan : </strong>Rp{{ number_format($reservation->layanan->harga, 0, ',', '.') }} <br>
                           <strong>Telah Dibayarkan : </strong>Rp{{ number_format($reservation->total, 0, ',', '.') }} <br>
                           <strong>Telah Kembalian : </strong>Rp{{ number_format($reservation->kembalian, 0, ',', '.') }} <br>
                        </p>
                        <a href="{{ route('reservasi.index') }}" class="btn btn-secondary"><i
                              class="bi bi-arrow-left"></i> Kembali</a>
                        {{-- <button type="button" id="pay-button" class="btn btn-success"><i class="bi bi-cash"></i>
                           Bayar
                        </button> --}}
                        @if ($reservation->status !== 'Lunas')
                        <button type="button" id="pay-button" class="btn btn-success"><i class="bi bi-cash"></i>
                           Bayar
                        </button>
                        @endif

                        <form id="delete-form" action="{{ route('reservasi.destroy', ['id' => $reservation->id]) }}"
                           method="POST" style="display: inline-block; margin-left: 10px;">
                           @csrf
                           @method('DELETE')
                           <button type="button" id="delete-button" class="btn btn-danger"><i class="bi bi-trash"></i>
                              Hapus</button>
                        </form>
                  </div>
               </div>
            </div>
      </div>
   </div>

   <script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js"></script>
   <script>
      document.getElementById('delete-button').addEventListener('click', function() {
            Swal.fire({
               title: 'Apakah Anda yakin?',
               text: "Anda tidak akan dapat mengembalikan ini!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Ya, hapus!'
            }).then((result) => {
               if (result.isConfirmed) {
                  document.getElementById('delete-form').submit();
               }
            });
      });

      document.getElementById('pay-button').addEventListener('click', function() {
            Swal.fire({
               title: "Masukkan jumlah pembayaran",
               input: "number",
               inputAttributes: {
                  min: 0,
                  step: 0.01,
                  placeholder: "Masukkan jumlah pembayaran"
               },
               showCancelButton: true,
               confirmButtonText: "Bayar",
               showLoaderOnConfirm: true,
               preConfirm: (amount) => {
                  if (!amount || amount <= 0) {
                        Swal.showValidationMessage('Jumlah pembayaran harus lebih dari 0');
                        return false;
                  }
                  if (amount < {{ $reservation->layanan->harga }}) {
                        Swal.showValidationMessage(
                           'Jumlah pembayaran tidak boleh kurang dari harga layanan');
                        return false;
                  }
                  return {
                        amount: amount
                  };
               },
               allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
               if (result.isConfirmed) {
                  $.ajax({
                        url: "{{ route('reservasi.updateStatus', ['id' => $reservation->id]) }}",
                        type: "POST",
                        data: {
                           _token: "{{ csrf_token() }}",
                           amount: result.value.amount
                        },
                        success: function(response) {
                           Swal.fire({
                              title: "Pembayaran berhasil",
                              text: `Status reservasi telah diubah menjadi Lunas. Total: ${response.total}, Kembalian: ${response.kembalian}`,
                              icon: "success"
                           }).then(() => {
                              location.reload();
                           });
                        },
                        error: function(error) {
                           Swal.fire({
                              title: "Terjadi kesalahan",
                              text: error.responseJSON.message,
                              icon: "error"
                           });
                        }
                  });
               }
            });
      });
   </script>
</body>
</html>
