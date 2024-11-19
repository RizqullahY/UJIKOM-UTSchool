-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jul 2024 pada 15.18
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bengkel`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kendaraan`
--

CREATE TABLE `kendaraan` (
  `id_kendaraan` int(11) NOT NULL,
  `nopol` varchar(20) DEFAULT NULL,
  `merk` varchar(50) DEFAULT NULL,
  `tipe` varchar(50) DEFAULT NULL,
  `id_user` int(10) NOT NULL,
  `keterangan` varchar(50) NOT NULL,
  `tahun` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `kendaraan`
--

INSERT INTO `kendaraan` (`id_kendaraan`, `nopol`, `merk`, `tipe`, `id_user`, `keterangan`, `tahun`) VALUES
(4, 'B 9079 C', 'BMW', 'Limited Edition', 0, '', 2020),
(22, 'B 9876 XYZ', 'Mobil Lambo', 'Mewah', 8, 'rusak', 2004),
(23, 'B 9876 XYZ', 'Kijang', 'Limited Edition', 16, 'Rusak dibagian ban', 2020),
(24, 'B 9876 XYZ', 'Mustang Merah', 'Offroad', 26, 'rusak di bagian depan', 2020),
(25, 'B 9876 XYZ', 'Mobil', 'Road Race', 26, 'rusakParah', 2020),
(26, 'B 9876 XYZ', 'Mustang Hitam', 'Road Race', 26, 'ban Rusak', 2020);

-- --------------------------------------------------------

--
-- Struktur dari tabel `layanan`
--

CREATE TABLE `layanan` (
  `id_layanan` int(11) NOT NULL,
  `nama_layanan` varchar(100) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `terakhir_diubah` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `layanan`
--

INSERT INTO `layanan` (`id_layanan`, `nama_layanan`, `deskripsi`, `harga`, `terakhir_diubah`) VALUES
(1, 'Ganti Oli', 'Mengganti oli kendaraan sesuai spesifikasi', 150000.00, 'admin'),
(2, 'Tune Up', 'Melakukan penyetelan mesin kendaraan', 300000.00, ''),
(3, 'Ganti Ban', 'Mengganti ban kendaraan dengan yang baru', 500000.00, ''),
(12, 'Perbaikan AC', 'Pemeriksaan dan perbaikan sistem AC kendaraan untuk memastikan pendinginan optimal', 300000.00, 'admin'),
(15, 'Balancing dan Spooring', 'Penyetelan keseimbangan dan arah roda untuk meningkatkan kenyamanan dan keamanan berkendara.', 250.00, 'admin'),
(16, 'Perbaikan Rem', 'Pemeriksaan dan perbaikan sistem rem kendaraan, termasuk penggantian kampas rem jika diperlukan.', 150000.00, 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id_pelanggan` int(11) NOT NULL,
  `nama_pelanggan` varchar(255) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `no_telepon` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `terakhir_diubah` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `pelanggan`
--

INSERT INTO `pelanggan` (`id_pelanggan`, `nama_pelanggan`, `alamat`, `no_telepon`, `email`, `terakhir_diubah`) VALUES
(0, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(1, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'jj'),
(2, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(3, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(4, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(5, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(6, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(7, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(8, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(9, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(10, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(11, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(12, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(13, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(14, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(15, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(16, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(17, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(18, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', ''),
(19, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(20, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(21, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(22, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(23, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(24, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(25, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(26, 'Rizqullah Yusuf', 'Jln Trenggalek - Ponorogo', '0890-3450-2341', '21043@smkmutumalang.sch.id', ''),
(27, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(28, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(29, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(30, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(31, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(32, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(33, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(34, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(35, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(36, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin'),
(37, 'nama lengkap pelanggan', 'alamat pelanggan', '0', 'email@pelanggan.com', 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reservasi_bengkel`
--

CREATE TABLE `reservasi_bengkel` (
  `id` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `kendaraan` varchar(255) DEFAULT NULL,
  `id_layanan` int(11) DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `status` varchar(11) NOT NULL,
  `updated_at` varchar(20) NOT NULL,
  `total` int(11) NOT NULL,
  `kembalian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `reservasi_bengkel`
--

INSERT INTO `reservasi_bengkel` (`id`, `id_user`, `kendaraan`, `id_layanan`, `tanggal`, `status`, `updated_at`, `total`, `kembalian`) VALUES
(113, 16, 'Mustang Merah', 1, '2024-07-10', 'Lunas', '2024-07-10 13:27:46', 200000, 50000),
(115, 16, 'Mustang Merah', 3, '2024-07-10', 'Lunas', '2024-07-11 06:05:19', 999999, 499999),
(116, 16, 'Mustang Merah', 12, '2024-07-10', 'Lunas', '2024-07-11 08:46:40', 10000000, 9700000),
(117, 26, 'Mustang Hitam', 1, '2024-07-31', 'Belum Lunas', '', 0, 0),
(120, 26, 'Mustang Hitam', 16, '2024-07-31', 'Belum Lunas', '', 0, 0),
(121, 26, 'Ferrari', 1, '2024-07-15', 'Belum Lunas', '', 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `role`) VALUES
(2, 'kasir', 'kasir', 'kasir'),
(3, 'pelanggan', 'pelanggan', 'pelanggan'),
(4, 'rafly', '123', 'admin'),
(8, 'ahmad', 'ahmad', 'pelanggan'),
(12, 'LT', 'tiara', 'admin'),
(13, 'string', 'string', 'admin'),
(16, 'kun', 'kun', 'pelanggan'),
(17, 'rry', 'rry', 'kasir'),
(18, 'randi', 'randi', 'pelanggan'),
(20, 'himalaya', '123456', 'pelanggan'),
(21, 'hambatukam', '123456', 'pelanggan'),
(22, 'kamal', 'kamal', 'pelanggan'),
(23, 'ahmad1231', '12345678A@a', 'pelanggan'),
(24, 'admin', 'admin', 'admin'),
(26, 'Rizqullah1', 'Rizqullah1!', 'pelanggan'),
(27, '1234567890', '1234567890A@a', 'pelanggan'),
(28, 'Rizqullah1122@@', 'aaaaaaaaaaaaaaaaaaA1#', 'pelanggan');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  ADD PRIMARY KEY (`id_kendaraan`);

--
-- Indeks untuk tabel `layanan`
--
ALTER TABLE `layanan`
  ADD PRIMARY KEY (`id_layanan`);

--
-- Indeks untuk tabel `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- Indeks untuk tabel `reservasi_bengkel`
--
ALTER TABLE `reservasi_bengkel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_layanan` (`id_layanan`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `kendaraan`
--
ALTER TABLE `kendaraan`
  MODIFY `id_kendaraan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `layanan`
--
ALTER TABLE `layanan`
  MODIFY `id_layanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `reservasi_bengkel`
--
ALTER TABLE `reservasi_bengkel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `reservasi_bengkel`
--
ALTER TABLE `reservasi_bengkel`
  ADD CONSTRAINT `reservasi_bengkel_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `reservasi_bengkel_ibfk_2` FOREIGN KEY (`id_layanan`) REFERENCES `layanan` (`id_layanan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
