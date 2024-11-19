using System.Data;
using MySql.Data.MySqlClient;
using Microsoft.Extensions.Configuration;

public class DbManager
{
   private readonly string? connectionString;
   private readonly MySqlConnection _connection;
   
   public DbManager(IConfiguration configuration)
   {
      connectionString = configuration.GetConnectionString("DefaultConnection");
      _connection = new MySqlConnection(connectionString);
   }

   //! TABEL LAYANAN ===================================
   public List<Layanan> GetAllLayanans()
   {
      List<Layanan> layananList = new List<Layanan>();
      try
      {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
               string query = "SELECT * FROM layanan";
               MySqlCommand command = new MySqlCommand(query, connection);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                        Layanan layanan = new Layanan
                        {
                           id_layanan = Convert.ToInt32(reader["id_layanan"]),
                           nama_layanan = reader["nama_layanan"].ToString(),
                           deskripsi = reader["deskripsi"].ToString(),
                           terakhir_diubah = reader["terakhir_diubah"].ToString(),
                           harga = Convert.ToDecimal(reader["harga"])
                        };
                        layananList.Add(layanan);
                  }
               }
            }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }
      return layananList;
   }
   public Layanan GetLayananById(int id_layanan)
   {
      Layanan layanan = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM layanan WHERE id_layanan = @id_layanan";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_layanan", id_layanan);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     layanan = new Layanan
                     {
                           id_layanan = Convert.ToInt32(reader["id_layanan"]),
                           nama_layanan = reader["nama_layanan"].ToString(),
                           deskripsi = reader["deskripsi"].ToString(),
                           terakhir_diubah = reader["terakhir_diubah"].ToString(),
                           harga = Convert.ToDecimal(reader["harga"])
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return layanan;
   }
   public int CreateLayanan(Layanan layanan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "INSERT INTO layanan (nama_layanan, deskripsi, harga, terakhir_diubah) VALUES (@nama_layanan, @deskripsi, @harga, @terakhir_diubah)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@nama_layanan", layanan.nama_layanan);
               command.Parameters.AddWithValue("@deskripsi", layanan.deskripsi);
               command.Parameters.AddWithValue("@harga", layanan.harga);
               command.Parameters.AddWithValue("@terakhir_diubah", layanan.terakhir_diubah);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int UpdateLayanan(int id_layanan, Layanan layanan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE layanan SET nama_layanan = @nama_layanan, deskripsi = @deskripsi, harga = @harga, terakhir_diubah = @terakhir_diubah WHERE id_layanan = @id_layanan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@nama_layanan", layanan.nama_layanan);
               command.Parameters.AddWithValue("@deskripsi", layanan.deskripsi);
               command.Parameters.AddWithValue("@harga", layanan.harga);
               command.Parameters.AddWithValue("@terakhir_diubah", layanan.terakhir_diubah);
               command.Parameters.AddWithValue("@id_layanan", id_layanan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeleteLayanan(int id_layanan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM layanan WHERE id_layanan = @id_layanan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_layanan", id_layanan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }

   //! TABEL PELANGGAN ===================================
   public List<Pelanggan> GetAllPelanggans()
   {
      List<Pelanggan> pelangganList = new List<Pelanggan>();
      try
      {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
               string query = "SELECT * FROM pelanggan";
               MySqlCommand command = new MySqlCommand(query, connection);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                        Pelanggan pelanggan = new Pelanggan
                        {
                           id_pelanggan = Convert.ToInt32(reader["id_pelanggan"]),
                           nama_pelanggan = reader["nama_pelanggan"].ToString(),
                           no_telepon = reader["no_telepon"].ToString(),
                           email = reader["email"].ToString(),
                           alamat = reader["alamat"].ToString(),
                           terakhir_diubah = reader["terakhir_diubah"].ToString()
                        };
                        pelangganList.Add(pelanggan);
                  }
               }
            }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }
      return pelangganList;
   }
   public int CreatePelanggan(Pelanggan pelanggan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "INSERT INTO pelanggan (id_pelanggan, nama_pelanggan, no_telepon, email, alamat, terakhir_diubah) VALUES (@id_pelanggan, @nama_pelanggan, @no_telepon, @email, @alamat, @terakhir_diubah)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_pelanggan", pelanggan.id_pelanggan);
               command.Parameters.AddWithValue("@nama_pelanggan", pelanggan.nama_pelanggan);
               command.Parameters.AddWithValue("@no_telepon", pelanggan.no_telepon);
               command.Parameters.AddWithValue("@email", pelanggan.email);
               command.Parameters.AddWithValue("@alamat", pelanggan.alamat);
               command.Parameters.AddWithValue("@terakhir_diubah", pelanggan.terakhir_diubah);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int UpdatePelanggan(int id_pelanggan, Pelanggan pelanggan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE pelanggan SET id_pelanggan = @id_pelanggan, nama_pelanggan = @nama_pelanggan, no_telepon = @no_telepon, email = @email, alamat = @alamat, terakhir_diubah = @terakhir_diubah WHERE id_pelanggan = @id_pelanggan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               // command.Parameters.AddWithValue("@id_pelanggan", pelanggan.id_pelanggan);
               command.Parameters.AddWithValue("@nama_pelanggan", pelanggan.nama_pelanggan);
               command.Parameters.AddWithValue("@no_telepon", pelanggan.no_telepon);
               command.Parameters.AddWithValue("@email", pelanggan.email);
               command.Parameters.AddWithValue("@alamat", pelanggan.alamat);
               command.Parameters.AddWithValue("@terakhir_diubah", pelanggan.terakhir_diubah);
               command.Parameters.AddWithValue("@id_pelanggan", id_pelanggan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeletePelanggan(int id_pelanggan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM pelanggan WHERE id_pelanggan = @id_pelanggan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_pelanggan", id_pelanggan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public Pelanggan GetPelangganById(int id_pelanggan)
   {
      Pelanggan pelanggan = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM pelanggan WHERE id_pelanggan = @id_pelanggan";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_pelanggan", id_pelanggan);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     pelanggan = new Pelanggan
                     {
                           id_pelanggan = Convert.ToInt32(reader["id_pelanggan"]),
                           nama_pelanggan = reader["nama_pelanggan"].ToString(),
                           alamat = reader["alamat"].ToString(),
                           email = reader["email"].ToString(),
                           no_telepon = reader["no_telepon"].ToString(),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return pelanggan;
   }

   //! TABEL KENDARAAN ===================================
   public List<Kendaraan> GetAllKendaraans()
   {
      List<Kendaraan> kendaraanList = new List<Kendaraan>();
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
            string query = "SELECT * FROM kendaraan";
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            using (MySqlDataReader reader = command.ExecuteReader())
            {
               while (reader.Read())
               {
                  Kendaraan kendaraan = new Kendaraan
                  {
                     id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                     id_user = Convert.ToInt32(reader["id_user"]),
                     nopol = reader["nopol"].ToString(),
                     merk = reader["merk"].ToString(),
                     tipe = reader["tipe"].ToString(),
                     keterangan = reader["keterangan"].ToString(),
                     tahun = Convert.ToInt32(reader["tahun"]),
                  };
                     kendaraanList.Add(kendaraan);
               }
            }
         }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }
      return kendaraanList;
   }
   public int CreateKendaraan(Kendaraan kendaraan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "INSERT INTO kendaraan (id_kendaraan, id_user, merk, nopol, tahun, tipe, keterangan) VALUES (@id_kendaraan,@id_user, @merk, @nopol, @tahun, @tipe, @keterangan)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_kendaraan", kendaraan.id_kendaraan);
               command.Parameters.AddWithValue("@id_user", kendaraan.id_user);
               command.Parameters.AddWithValue("@keterangan", kendaraan.keterangan);
               command.Parameters.AddWithValue("@nopol", kendaraan.nopol);
               command.Parameters.AddWithValue("@merk", kendaraan.merk);
               command.Parameters.AddWithValue("@tahun", kendaraan.tahun);
               command.Parameters.AddWithValue("@tipe", kendaraan.tipe);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int UpdateKendaraan(int id_kendaraan, Kendaraan kendaraan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE kendaraan SET nopol = @nopol, merk = @merk, tahun = @tahun, tipe = @tipe, id_user = @id_user, keterangan = @keterangan  WHERE id_kendaraan = @id_kendaraan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@nopol", kendaraan.nopol);
               command.Parameters.AddWithValue("@merk", kendaraan.merk);
               command.Parameters.AddWithValue("@tahun", kendaraan.tahun);
               command.Parameters.AddWithValue("@tipe", kendaraan.tipe);
               command.Parameters.AddWithValue("@id_user", kendaraan.id_user);
               command.Parameters.AddWithValue("@keterangan", kendaraan.keterangan);
               command.Parameters.AddWithValue("@id_kendaraan", id_kendaraan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeleteKendaraan(int id_kendaraan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM kendaraan WHERE id_kendaraan = @id_kendaraan";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_kendaraan", id_kendaraan);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public Kendaraan GetKendaraanById(int id_kendaraan)
   {
      Kendaraan kendaraan = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM kendaraan WHERE id_kendaraan = @id_kendaraan";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_kendaraan", id_kendaraan);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     kendaraan = new Kendaraan
                     {
                           id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                           id_user = Convert.ToInt32(reader["id_user"]),
                           nopol = reader["nopol"].ToString(),
                           merk = reader["merk"].ToString(),
                           tipe = reader["tipe"].ToString(),
                           keterangan = reader["keterangan"].ToString(),
                           tahun = Convert.ToInt32(reader["tahun"]),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return kendaraan;
   }
   public Kendaraan GetKendaraanByIdUser(int id_user)
   {
      Kendaraan kendaraan = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM kendaraan WHERE id_user = @id_user";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_user", id_user);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     kendaraan = new Kendaraan
                     {
                           id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                           id_user = Convert.ToInt32(reader["id_user"]),
                           nopol = reader["nopol"].ToString(),
                           merk = reader["merk"].ToString(),
                           tipe = reader["tipe"].ToString(),
                           keterangan = reader["keterangan"].ToString(),
                           tahun = Convert.ToInt32(reader["tahun"]),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return kendaraan;
   }
   public Kendaraan GetKendaraanByMerk(string merk)
   {
      Kendaraan kendaraan = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM kendaraan WHERE merk = @merk";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@merk", merk);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     kendaraan = new Kendaraan
                     {
                           id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                           id_user = Convert.ToInt32(reader["id_user"]),
                           nopol = reader["nopol"].ToString(),
                           merk = reader["merk"].ToString(),
                           tipe = reader["tipe"].ToString(),
                           keterangan = reader["keterangan"].ToString(),
                           tahun = Convert.ToInt32(reader["tahun"]),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return kendaraan;
   }

   //! TABEL USER ===================================
   public List<User> GetAllUsers()
   {
      List<User> userList = new List<User>();
      try
      {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
               string query = "SELECT * FROM user";
               MySqlCommand command = new MySqlCommand(query, connection);
               connection.Open();
               
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                        User user = new User
                        {
                           id_user = Convert.ToInt32(reader["id_user"]),
                           username = reader["username"].ToString(),
                           password = reader["password"].ToString(),
                           role = reader["role"].ToString(),
                        };
                        
                        userList.Add(user);
                  }
               }
            }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }

      return userList;
   }
   public int CreateUser(User user)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "INSERT INTO user (id_user, username, password, role) VALUES (@id_user, @username, @password, @role)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_user", user.id_user);
               command.Parameters.AddWithValue("@username", user.username);
               command.Parameters.AddWithValue("@password", user.password);
               command.Parameters.AddWithValue("@role", user.role);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int UpdateUser(int id_user, User user)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE user SET username = @username, password = @password, role = @role WHERE id_user = @id_user";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@username", user.username);
               command.Parameters.AddWithValue("@password", user.password);
               command.Parameters.AddWithValue("@role", user.role);
               command.Parameters.AddWithValue("@id_user", id_user);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeleteUser(int id_user)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM user WHERE id_user = @id_user";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_user", id_user);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public User GetUserById(int id_user)
   {
      User user = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM user WHERE id_user = @id_user";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_user", id_user);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     user = new User
                     {
                           id_user = Convert.ToInt32(reader["id_user"]),
                           username = reader["username"].ToString(),
                           password = reader["password"].ToString(),
                           role = reader["role"].ToString(),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return user;
   }
   public User GetUserByUsername(string username)
   {
      User user = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM user WHERE username = @username";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@username", username);
               connection.Open();

               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     user = new User
                     {
                           id_user = Convert.ToInt32(reader["id_user"]),
                           username = reader["username"].ToString(),
                           password = reader["password"].ToString(),
                           role = reader["role"].ToString(),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return user;
   }


   //! TABEL RESERVASI ===================================
   public List<Reservasi> GetAllReservasi()
   {
      List<Reservasi> ReservasiList = new List<Reservasi>();
      try
      {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
               string query = "SELECT * FROM reservasi_bengkel";
               MySqlCommand command = new MySqlCommand(query, connection);
               connection.Open();
               
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                        Reservasi Reservasi = new Reservasi
                        {
                           id = Convert.ToInt32(reader["id"]),
                           id_user = Convert.ToInt32(reader["id_user"]),
                           id_layanan = Convert.ToInt32(reader["id_layanan"]),
                           kendaraan = reader["kendaraan"].ToString(),
                           tanggal = Convert.ToDateTime(reader["tanggal"]),
                           status = reader["status"].ToString(),
                        };
                        
                        ReservasiList.Add(Reservasi);
                  }
               }
            }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }

      return ReservasiList;
   }
   public int CreateReservasi(Reservasi Reservasi)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
         string query = "INSERT INTO reservasi_bengkel (id, id_user, id_layanan, kendaraan, tanggal, status) VALUES (@id, @id_user, @id_layanan, @kendaraan, @tanggal, @status)";
         using (MySqlCommand command = new MySqlCommand(query, connection))
         {
               command.Parameters.AddWithValue("@id", Reservasi.id);
               command.Parameters.AddWithValue("@id_user", Reservasi.id_user);
               command.Parameters.AddWithValue("@id_layanan", Reservasi.id_layanan);
               command.Parameters.AddWithValue("@kendaraan", Reservasi.kendaraan);
               command.Parameters.AddWithValue("@tanggal", Reservasi.tanggal);
               command.Parameters.AddWithValue("@status", Reservasi.status);
               connection.Open();
               return command.ExecuteNonQuery();
         }
      }
   }
   public int UpdateReservasi(int id, Reservasi Reservasi)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE reservasi_bengkel SET id_user = @id_user, id_layanan = @id_layanan, kendaraan = @kendaraan, tanggal = @tanggal ,status = @status WHERE id = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_user", Reservasi.id_user);
               command.Parameters.AddWithValue("@id_layanan", Reservasi.id_layanan);
               command.Parameters.AddWithValue("@kendaraan", Reservasi.kendaraan);
               command.Parameters.AddWithValue("@tanggal", Reservasi.tanggal);
               command.Parameters.AddWithValue("@status", Reservasi.status);
               command.Parameters.AddWithValue("@id", id);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeleteReservasi(int id)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM reservasi_bengkel WHERE id = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id", id);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public Reservasi GetReservasiById(int id)
   {
      Reservasi reservasi = null;
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM reservasi_bengkel WHERE id = @id";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id", id);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  if (reader.Read())
                  {
                     reservasi = new Reservasi
                     {
                        id = Convert.ToInt32(reader["id"]),
                        id_user = Convert.ToInt32(reader["id_user"]),
                        id_layanan = Convert.ToInt32(reader["id_layanan"]),
                        kendaraan = reader["kendaraan"].ToString(),
                        status = reader["status"].ToString(),
                        tanggal = Convert.ToDateTime(reader["tanggal"]),
                     };
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      return reservasi;
   }
   public List<Reservasi> GetReservasiByIdUser(int id_user)
   {
      List<Reservasi> reservasiList = new List<Reservasi>();
   
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
               string query = "SELECT * FROM reservasi_bengkel WHERE id_user = @id_user";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_user", id_user);
               connection.Open();
               
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                     Reservasi reservasi = new Reservasi
                     {
                           id = Convert.ToInt32(reader["id"]),
                           id_user = Convert.ToInt32(reader["id_user"]),
                           id_layanan = Convert.ToInt32(reader["id_layanan"]),
                           kendaraan = reader["kendaraan"].ToString(),
                           status = reader["status"].ToString(),
                           tanggal = Convert.ToDateTime(reader["tanggal"]),
                     };
                     
                     reservasiList.Add(reservasi);
                  }
               }
         }
      }
      catch (Exception ex)
      {
         Console.WriteLine(ex.Message);
      }
      
      return reservasiList;
   }







   //! TABEL Transaksi Layanan ===================================
   public List<TransaksiLayanan> GetAllTransaksiLayanan()
   {
      List<TransaksiLayanan> transaksiLayananList = new List<TransaksiLayanan>();
      try
      {
         using (MySqlConnection connection = new MySqlConnection(connectionString))
         {
            string query = "SELECT * FROM transaksi_layanan_bengkels";
            MySqlCommand command = new MySqlCommand(query, connection);
            connection.Open();
            
            using (MySqlDataReader reader = command.ExecuteReader())
            {
               while (reader.Read())
               {
                  TransaksiLayanan transaksiLayanan = new TransaksiLayanan
                  {
                     id = Convert.ToInt32(reader["id"]),
                     id_pelanggan = Convert.ToInt32(reader["id_pelanggan"]),
                     id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                     id_layanan = Convert.ToInt32(reader["id_kendaraan"]),
                     tanggal_transaksi = Convert.ToDateTime(reader["tanggal_transaksi"]),
                     biaya_transaksi = Convert.ToInt32(reader["biaya_transaksi"]),
                     status_transaksi = reader["status_transaksi"].ToString(),
                     created_at = Convert.ToDateTime(reader["created_at"]),
                     updated_at = Convert.ToDateTime(reader["updated_at"])
                  };
                  
                  transaksiLayananList.Add(transaksiLayanan);
               }
            }
         }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }
      return transaksiLayananList;
   }
   public int CreateTransaksiLayanan(TransaksiLayanan transaksiLayanan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "INSERT INTO transaksi_layanan_bengkels (id_pelanggan, id_kendaraan, id_layanan, tanggal_transaksi, biaya_transaksi, status_transaksi) VALUES (@id_pelanggan, @id_kendaraan, @id_layanan, @tanggal_transaksi, @biaya_transaksi, @status_transaksi)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id_pelanggan", transaksiLayanan.id_pelanggan);
               command.Parameters.AddWithValue("@id_kendaraan", transaksiLayanan.id_kendaraan);
               command.Parameters.AddWithValue("@id_layanan", transaksiLayanan.id_layanan);
               command.Parameters.AddWithValue("@tanggal_transaksi", transaksiLayanan.tanggal_transaksi);
               command.Parameters.AddWithValue("@biaya_transaksi", transaksiLayanan.biaya_transaksi);
               command.Parameters.AddWithValue("@status_transaksi", transaksiLayanan.status_transaksi);

               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int UpdateTransaksiLayanan(int id, TransaksiLayanan transaksiLayanan)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "UPDATE transaksi_layanan_bengkels SET id_pelanggan = @id_pelanggan, id_kendaraan = @id_kendaraan, id_layanan = @id_layanan, tanggal_transaksi = @tanggal_transaksi, biaya_transaksi = @biaya_transaksi, status_transaksi = @status_transaksi WHERE id = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id", id);
               command.Parameters.AddWithValue("@id_pelanggan", transaksiLayanan.id_pelanggan);
               command.Parameters.AddWithValue("@id_kendaraan", transaksiLayanan.id_kendaraan);
               command.Parameters.AddWithValue("@id_layanan", transaksiLayanan.id_layanan);
               command.Parameters.AddWithValue("@tanggal_transaksi", transaksiLayanan.tanggal_transaksi);
               command.Parameters.AddWithValue("@biaya_transaksi", transaksiLayanan.biaya_transaksi);
               command.Parameters.AddWithValue("@status_transaksi", transaksiLayanan.status_transaksi);

               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public int DeleteTransaksiLayanan(int id)
   {
      using (MySqlConnection connection = new MySqlConnection(connectionString))
      {
            string query = "DELETE FROM transaksi_layanan_bengkels WHERE id = @id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
               command.Parameters.AddWithValue("@id", id);
               connection.Open();
               return command.ExecuteNonQuery();
            }
      }
   }
   public List<TransaksiLayanan> GetTransaksiLayananByIdPelanggan(int id_pelanggan)
   {
      List<TransaksiLayanan> transaksiLayananList = new List<TransaksiLayanan>();
      try
      {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
               string query = "SELECT * FROM transaksi_layanan_bengkels WHERE id_pelanggan = @id_pelanggan";
               MySqlCommand command = new MySqlCommand(query, connection);
               command.Parameters.AddWithValue("@id_pelanggan", id_pelanggan);
               connection.Open();
               using (MySqlDataReader reader = command.ExecuteReader())
               {
                  while (reader.Read())
                  {
                        TransaksiLayanan transaksiLayanan = new TransaksiLayanan
                        {
                           id = Convert.ToInt32(reader["id"]),
                           id_pelanggan = Convert.ToInt32(reader["id_pelanggan"]),
                           id_kendaraan = Convert.ToInt32(reader["id_kendaraan"]),
                           id_layanan = Convert.ToInt32(reader["id_layanan"]),
                           // tanggal_transaksi = reader["tanggal_transaksi"].ToString(),
                           tanggal_transaksi = Convert.ToDateTime(reader["tanggal_transaksi"]),
                           biaya_transaksi = Convert.ToInt32(reader["biaya_transaksi"]),
                           status_transaksi = reader["status_transaksi"].ToString(),
                        };
                        transaksiLayananList.Add(transaksiLayanan);
                  }
               }
            }
      }
      catch (Exception ex)
      {
            Console.WriteLine(ex.Message);
      }
      return transaksiLayananList;
   }

}
