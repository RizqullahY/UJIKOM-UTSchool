@extends('layouts.app')

@section('content')
   <div class="container">
      <h3 class="mt-4">List Reservasi Bengkel</h3>
      <table id="reservasiTable" class="table table-striped table-bordered" data-toggle="table" data-search="true"
            data-show-columns="true" data-pagination="true" data-page-list="[5, 10, 20, 50, 100]" data-sortable="true">
            <thead class="table-secondary">
               <tr>
                  <th data-field="id" data-sortable="true">ID</th>
                  <th data-field="id_layanan" data-sortable="true">Layanan</th>
                  <th data-field="id_user" data-sortable="true">User</th>
                  <th data-field="kendaraan" data-sortable="true">Kendaraan</th>
                  <th data-field="status" data-sortable="true">Status</th>
                  <th data-field="tanggal" data-sortable="true">Tanggal</th>
                  <th data-field="total" data-sortable="true">Total</th>
                  <th data-field="total_dibayar" data-sortable="true">Total Dibayar</th>
                  <th data-field="kembalian" data-sortable="true">Kembalian</th>
                  <th data-field="action" data-sortable="false">Action</th>
               </tr>
            </thead>
            <tbody>
               @forelse ($reservations as $reservation)
                  <tr>
                        <td>{{ $reservation->id }}</td>
                        <td>{{ $reservation->id_layanan }} - {{ $reservation->layanan->nama_layanan }}</td>
                        <td>{{ $reservation->id_user }} - {{ $reservation->user->username }}</td>
                        <td>{{ $reservation->kendaraan }}</td>
                        <td class="{{ $reservation->status == 'Belum Lunas' ? 'text-secondary' : '' }}">
                           {{ $reservation->status }}
                        </td>
                        <td>{{ $reservation->tanggal }}</td>
                        <td>Rp{{ number_format($reservation->layanan->harga, 0, ',', '.') }}</td>
                        <td>Rp{{ number_format($reservation->total, 0, ',', '.') }}</td>
                        <td>Rp{{ number_format($reservation->kembalian, 0, ',', '.') }}</td>
                        <td class="" style="width: 130px">
                           <a href="{{ route('reservasi.show', ['id' => $reservation->id]) }}" class="btn btn-primary"
                              style="margin: 5px;">
                              <i class="bi bi-pen"></i>
                           </a>
                           {{-- @if ($reservation->status == 'Belum Lunas')
                              <form action="{{ route('reservasi.updateStatus', ['id' => $reservation->id]) }}"
                                    method="POST" style="display: inline; margin: 5px;">
                                    @csrf
                                    @method('PUT')
                                    <input type="hidden" name="status" value="Lunas">
                                    <button type="submit" class="btn btn-success"><i
                                          class="bi bi-check2-circle"></i></button>
                              </form>
                           @elseif ($reservation->status == 'Lunas')
                              <form action="{{ route('reservasi.updateStatus', ['id' => $reservation->id]) }}"
                                    method="POST" style="display: inline; margin: 5px;">
                                    @csrf
                                    @method('PUT')
                                    <input type="hidden" name="status" value="Belum Lunas">
                                    <button type="submit" class="btn btn-warning"><i class="bi bi-x-circle"></i></button>
                              </form>
                           @endif --}}
                           @csrf
                           @method('DELETE')
                           <form id="deleteForm" action="{{ route('reservasi.destroy', ['id' => $reservation->id]) }}"
                              method="POST" style="display: inline-block; margin: 5px;">
                              @csrf
                              @method('DELETE')
                              <button type="button" class="btn btn-danger" onclick="confirmDeletion()">
                                    <i class="bi bi-trash"></i>
                              </button>
                           </form>
                        </td>
                  </tr>
               @empty
                  <tr>
                        <td colspan="7" class="text-center">No reservations available</td>
                  </tr>
               @endforelse
            </tbody>
      </table>
      <script>
            function confirmDeletion() {
               Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
               }).then((result) => {
                  if (result.isConfirmed) {
                        document.getElementById('deleteForm').submit();
                        Swal.fire({
                           title: 'Deleted!',
                           text: 'Your file has been deleted.',
                           icon: 'success'
                        });
                  }
               })
            }
            document.addEventListener('DOMContentLoaded', function() {
               const username = localStorage.getItem('username');
               if (!username) {
                  window.location.href = '/'; // Redirect ke halaman login jika belum login
               }
            });
      </script>
   </div>
@endsection
