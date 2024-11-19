/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./Reservasi.css";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";
const Swal = require('sweetalert2')

function ReservasiEdit() {
	const { id } = useParams();
	console.log('Layanan ID:', id);

	const [formValue, setFormValue] = React.useState({
		id_user: localStorage.getItem("id_user"),
		kendaraan: "",
		id_layanan:"",
		tanggal: "",
		status: "Belum Lunas",
	});

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Reservasi/${id}`
			);
			const data = response.data.data;
			console.log(data);

			setFormValue({
				id_user: data.id_user,
				kendaraan: data.kendaraan,
				// id_layanan: data.id_layanan,
				tanggal: data.tanggal,
				status: "Belum Lunas",
			});
		} catch (error) {
			console.log(error);
		}
	};

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
				`http://localhost:5162/api/Reservasi`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			Swal.fire({
				title: "Berhasil",
				text: "Berhasil Menambah Data Reservasi",
				icon: "success",
				timer: 9999,
			}).then(()=>{
				window.location.href = "/ReservasiPelanggan";
			})
		} catch (error) {
			console.log(error);
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
						<div className="form-group">
							<input
								type="number"
								name="id_user"
								placeholder="Enter id_user"
								value={formValue.id_user}
								onChange={handleChange}
								style={{ width: '100%' }}
								readOnly
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="kendaraan"
								placeholder="Enter Kendaraan"
								value={formValue.kendaraan}
								onChange={handleChange}
								style={{ width: '100%' }}
								readOnly
							/>
						</div>
						<div className="form-group">
							<input
								type="number"
								name="id_layanan"
								placeholder="Tambah Reservasi Layanan"
								value={formValue.id_layanan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<input
								type="date"
								name="tanggal"
								placeholder="Enter Tanggal"
								value={formValue.tanggal}
								onChange={handleChange}
								style={{ width: '100%' }}
								readOnly
							/>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Tambah</button>
							<Link to="/ReservasiPelanggan">
								<button type="button" className="btn btn-secondary ms-4">Back to Reservasi</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReservasiEdit;
