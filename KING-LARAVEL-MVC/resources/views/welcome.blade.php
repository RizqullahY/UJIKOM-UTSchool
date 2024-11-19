<!DOCTYPE html>
<html>

<head>
    <title>Bengkel Sentral Otomotif Login Page</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>

<body
    style="background-image: url('https://i.pinimg.com/564x/89/a8/30/89a830accd5f2fc95c86d87b847f88a1.jpg'); background-size: cover; background-repeat: no-repeat; height:92vh">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">Bengkel Sentral Otomotif - Kasir Login</div>
                    <div class="card-body bg-gray-25">
                        <form method="POST" action="{{ route('login') }}" id="loginForm">
                            @csrf

                            <div class="form-group">
                                <label for="username">Username</label>
                                <input id="username" type="text" class="form-control" name="username" required
                                    autofocus>
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input id="password" type="password" class="form-control" name="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');

            loginForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                localStorage.setItem('username', username);
                this.submit();
            });
        });
    </script>
</body>

</html>
