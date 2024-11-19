/* eslint-disable no-unused-vars */
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Login from "./components/home/Login";
import Register from "./components/home/Register";
import Footer from "./components/footer/Footer";

//! MANG ADMIN ======================================
import Layanan from "./components/layanan/Layanan";
import LayananAdd from "./components/layanan/LayananAdd";
import LayananEdit from "./components/layanan/LayananEdit";
import LayananDelete from "./components/layanan/LayananDelete";
import LayananShow from "./components/layanan/LayananShow";

// import TransaksiLayanan from "./components/transaksi_layanan/TransaksiLayanan";
// import TransaksiLayananAdd from "./components/transaksi_layanan/TransaksiLayananAdd";

import Pelanggan from "./components/pelanggan/Pelanggan";
import PelangganAdd from "./components/pelanggan/PelangganAdd";
import PelangganEdit from "./components/pelanggan/PelangganEdit";
import PelangganDelete from "./components/pelanggan/PelangganDelete";

import Kendaraan from "./components/kendaraans/Kendaraan";
import KendaraanAdd from "./components/kendaraans/KendaraanAdd";
import KendaraanEdit from "./components/kendaraans/KendaraanEdit";
import KendaraanDelete from "./components/kendaraans/KendaraanDelete";

import Reservasi from "./components/reservasi/Reservasi";
import ReservasiAdd from "./components/reservasi/ReservasiAdd";
import ReservasiEdit from "./components/reservasi/ReservasiEdit";
import ReservasiDelete from "./components/reservasi/ReservasiDelete";

import User from "./components/user/User";
import UserAdd from "./components/user/UserAdd";
import UserEdit from "./components/user/UserEdit";
import UserDelete from "./components/user/UserDelete";

import ProtectedRoute from "./components/ProtectedRoute";

//! PELANGGAN LANGGAN ======================================
import LayananPelanggan from "./components-pelanggan/layanan/Layanan";

import MenuPelanggan from "./components-pelanggan/menu/Menu";

import ReservasiPelanggan from "./components-pelanggan/reservasi/Reservasi";
import ReservasiPelangganAdd from "./components-pelanggan/reservasi/ReservasiAdd";
import ReservasiPelangganEdit from "./components-pelanggan/reservasi/ReservasiEdit";
import ReservasiPelangganDelete from "./components-pelanggan/reservasi/ReservasiDelete";
import ReservasiPelangganTambahLayanan from "./components-pelanggan/reservasi/ReservasiPelangganTambahLayanan";

import PelangganPelanggan from "./components-pelanggan/pelanggan/Pelanggan";
import PelangganPelangganAdd from "./components-pelanggan/pelanggan/PelangganAdd";
import PelangganPelangganEdit from "./components-pelanggan/pelanggan/PelangganEdit";
import PelangganPelangganDelete from "./components-pelanggan/pelanggan/PelangganDelete";

import KendaraanPelanggan from "./components-pelanggan/kendaraans/Kendaraan";
import KendaraanPelangganAdd from "./components-pelanggan/kendaraans/KendaraanAdd";
import KendaraanPelangganEdit from "./components-pelanggan/kendaraans/KendaraanEdit";
import KendaraanPelangganDelete from "./components-pelanggan/kendaraans/KendaraanDelete";

const AppRouter = () => {
	const location = useLocation();
	const hideHeaderPaths = ["/","/Register"];
	const roleUser = localStorage.getItem("roleUser");

	return (
		<div>
			{!hideHeaderPaths.includes(location.pathname) && (
				<div className="app-header">
         {roleUser === "admin" ? <Menu /> : <MenuPelanggan />}
				</div>
			)}
			<div className="app-content">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/Register" element={<Register />} />

					<Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
						<Route path="/Layanan" element={<Layanan />} />
						<Route path="/LayananShow/:id_layanan" element={<LayananShow />} />
						<Route path="/dataLayanan_add" element={<LayananAdd />} />
						<Route path="/dataLayanan_edit/:id_layanan" element={<LayananEdit />} />
						<Route
							path="/dataLayanan_delete/:id_layanan"
							element={<LayananDelete />}
						/>
						<Route path="/Pelanggan" element={<Pelanggan />} />
						<Route path="/dataPelanggan_add" element={<PelangganAdd />} />
						<Route
							path="/dataPelanggan_edit/:id_pelanggan"
							element={<PelangganEdit />}
						/>
						<Route
							path="/dataPelanggan_delete/:id_pelanggan"
							element={<PelangganDelete />}
						/>						

						<Route path="/Kendaraan" element={<Kendaraan />} />
						<Route path="/dataKendaraan_add" element={<KendaraanAdd />} />
						<Route
							path="/dataKendaraan_edit/:id_kendaraan"
							element={<KendaraanEdit />}
						/>
						<Route
							path="/dataKendaraan_delete/:id_kendaraan"
							element={<KendaraanDelete />}
						/> 

						<Route path="/Reservasi" element={<Reservasi />} />
						<Route path="/dataReservasi_add" element={<ReservasiAdd />} />
						<Route path="/dataReservasi_edit/:id" element={<ReservasiEdit />} />
						<Route path="/dataReservasi_delete/:id" element={<ReservasiDelete />} />

						<Route path="/User" element={<User />} />
						<Route path="/dataUser_add" element={<UserAdd />} />
						<Route path="/dataUser_edit/:id_user" element={<UserEdit />} />
						<Route path="/dataUser_delete/:id_user" element={<UserDelete />} />
					</Route>

					<Route element={<ProtectedRoute allowedRoles={["pelanggan"]} />}>
						<Route path="/LayananPelanggan" element={<LayananPelanggan />} />
						<Route path="/LayananShowPelanggan/:id_layanan" element={<LayananShow />} />

						<Route path="/ReservasiPelanggan" element={<ReservasiPelanggan />} />
						<Route path="/ReservasiPelangganAdd" element={<ReservasiPelangganAdd />} />
						<Route path="/ReservasiPelangganEdit/:id" element={<ReservasiPelangganEdit />} />
						<Route path="/ReservasiPelangganDelete/:id" element={<ReservasiPelangganDelete />} />
						<Route path="/ReservasiPelangganTambahLayanan/:id" element={<ReservasiPelangganTambahLayanan />} />

						<Route path="/PelangganPelanggan" element={<PelangganPelanggan />} />
						<Route path="/PelangganPelangganAdd" element={<PelangganPelangganAdd />} />
						<Route path="/PelangganPelangganEdit/:id" element={<PelangganPelangganEdit />} />
						<Route path="/PelangganPelangganDelete/:id" element={<PelangganPelangganDelete />} />

						{/* <Route path="/dataKendaraanPelanggan_add/:id_user" element={<KendaraanPelangganAdd />} /> */}
						<Route path="/dataKendaraanPelanggan_add/:id_user/:kendaraan" element={<KendaraanPelangganAdd />} />
						<Route
							path="/dataKendaraan_delete/:id_kendaraan"
							element={<KendaraanPelangganDelete />}
						/> 
					</Route>
				</Routes>
			</div>
			{!hideHeaderPaths.includes(location.pathname) && (
				<div className="app-footer">
         {roleUser === "admin" ? <Footer /> : <Footer />}
				</div>
			)}
		</div>
	);
};

const App = () => (
	<Router>
		<AppRouter />
	</Router>
);

export default App;
