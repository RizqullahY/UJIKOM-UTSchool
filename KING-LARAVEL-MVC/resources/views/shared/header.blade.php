<header>
   <div class="text-bg-dark container">
      <div class="row justify-content-center">
            <div class="col-md-6 text-center">
               <a href="#" class="text-decoration-none text-light">
                  <h2 class="mt-3 font-weight-bolder">Transaksi Layanan Bengkel</h2>
                  <h6 id="kasirText" class="mt-2">Kasir yang bertugas : <span class="text-secondary">kosong</span></h6>
               </a>
            </div>
            <div class="col-md-6">
               <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                  <li class="nav-item">
                     <form method="POST" action="{{ route('logout') }}" id="logoutForm">
                        @csrf
                        <a href="#" id="logoutLink" class="nav-link text-secondary text-white d-flex flex-column align-items-center">
                              <i class="bi bi-box-arrow-in-left" style="font-size: 24px;"></i>
                              <span>Log Out</span>
                        </a>
                     </form>
                  </li>
               </ul>
            </div>

      </div>
   </div>
   <div class="px-3 py-2 border-bottom mb-3"></div>
</header>


<script>
   document.addEventListener('DOMContentLoaded', function() {
      const username = localStorage.getItem('username');
      const logoutLink = document.getElementById('logoutLink');
      const logoutForm = document.getElementById('logoutForm');
      
      if (username) {
            document.getElementById('kasirText').textContent = `Kasir yang bertugas: ${username}`;
      }
      logoutLink.addEventListener('click', function(event) {
         event.preventDefault();
         Swal.fire({
            title: 'Anda yakin ingin logout?',
            text: "Anda harus login kembali untuk mengakses halaman ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
         }).then((result) => {
            if (result.isConfirmed) {
                  logoutForm.submit();
            }
         }).then(() => localStorage.removeItem('username'));
      });
   });
</script>
