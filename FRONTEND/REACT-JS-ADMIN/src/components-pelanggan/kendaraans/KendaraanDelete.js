/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";
const Swal = require('sweetalert2')

function KendaraanDelete() {
	const { id_kendaraan } = useParams();
	const [kendaraan, setKendaraan] = useState({
		id_kendaraan: "",
		nopol: "",
		merk: "",
		tipe: "",
		tahun: "",
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Kendaraan/${id_kendaraan}`
			);
			const data = response.data.data;

			setKendaraan({
				id_kendaraan: data.id_kendaraan,
				nopol: data.nopol,
				merk: data.merk,
				tipe: data.tipe,
				tahun: data.tahun,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.delete(`http://localhost:5162/api/Kendaraan/${id_kendaraan}`);
			// alert("Data Kendaraan berhasil dihapus");
			Swal.fire({
				title: "Berhasil",
				text: "Mencoba Menghapus Data",
				icon: "success",
				timer: 9999,
			}).then(()=>{
				window.location.href = "/Kendaraan";
			})
		} catch (error) {
			console.error(error);
			Swal.fire({
				title: "Gagal",
				text: "Tidak Berhasil Menghapus Data",
				icon: "error",
				timer: 9999,
			}).then(()=>{
				
			})
			alert("Error deleting Kendaraan data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container" style={{ justifyContent:'center' }}>
				<div className="Titel">Hapus Data Kendaraan {id_kendaraan}</div>
				<div className="content">
					<p>ID Kendaraan: {kendaraan.id_kendaraan}</p>
					<p>Nopol: {kendaraan.nopol}</p>
					<p>Merk: {kendaraan.merk}</p>
					<p>Tipe: {kendaraan.tipe}</p>
					<p>Tahun: {kendaraan.tahun}</p>
					<form onSubmit={handleSubmit}>
						<button type="submit" className="btn btn-danger">
							Hapus
						</button>
						<Link to="/Kendaraan">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default KendaraanDelete;
