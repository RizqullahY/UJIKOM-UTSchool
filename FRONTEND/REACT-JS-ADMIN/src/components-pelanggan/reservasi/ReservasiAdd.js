import "./Reservasi.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const Swal = require('sweetalert2')


function ReservasiAdd() {
	const [formValue, setFormValue] = React.useState({
		id_user: localStorage.getItem("id_user"),
		kendaraan: "",
		id_layanan:"",
		tanggal: "",
		status: "Belum Lunas",
	});

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5162/api/Reservasi",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			Swal.fire({
					title: "Berhasil",
					text: "Berhasil Menambah Data Reservasi",
					icon: "success",
					timer: 9999,
			}).then(()=>{
				window.location.href = "/ReservasiPelanggan";
			})
			console.log(response);
		} catch (error) {
			Swal.fire({
				title: "Gagal",
				text: "Gagal Menambah Data Reservasi",
				icon: "error",
				timer: 9999,
			})
		}
	};

	return (
		<div className="card" style={{ marginTop: 150 }}>
			<div className="container">
				<div className="Titel">Tambah Reservasi</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
						<div className="form-group" style={{ gridColumn: '1 / span 2' }}>
							<input
								type="text"
								name="kendaraan"
								placeholder="Masukkan Kendaraan"
								value={formValue.kendaraan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<input
								type="number"
								name="id_layanan"
								placeholder="Pilih Id Reservasi Layanan"
								value={formValue.id_layanan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<input
								type="date"
								name="tanggal"
								placeholder="Masukkan Tanggal Resevasi"
								value={formValue.tanggal}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Simpan</button>
							<Link to="/ReservasiPelanggan">
								<button type="button" className="btn btn-secondary ms-4">Back</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReservasiAdd;
