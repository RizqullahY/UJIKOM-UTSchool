import "./Layanan.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
const Swal = require('sweetalert2')


function LayananAdd() {
	const [formValue, setFormValue] = React.useState({
		nama_layanan: "",
		harga: "",
		deskripsi: "",
		terakhir_diubah: localStorage.getItem("loggedInUser"),
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
				"http://localhost:5162/api/Layanan",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			Swal.fire({
				title: "Berhasil",
				text: "Behasil Menambah Data Layanan",
				icon: "success",
				showConfirmButton: true,
				timer: 9999
			}).then(()=>{
				window.location.href = "/Layanan";
			})
			console.log(response);
		} catch (error) {
			console.log(error);
			Swal.fire({
				title: "Gagal",
				text: "Gagal Menambah Data Layanan",
				icon: "error",
				showConfirmButton: true,
				timer: 9999
			})
		}
	};

	return (
		<div className="card" style={{ marginTop: 150 }}>
			<div className="container">
				<div className="Titel">Tambah Data Layanan</div>
				<div className="content" style={{ display: "flex" }}>
					<div style={{ flex: "1", marginRight: "20px" }}>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="nama_layanan"
								placeholder="Enter Nama Layanan"
								value={formValue.nama_layanan}
								onChange={handleChange}
								style={{ width: "100%", marginBottom: "30px" }}
							/>
							<input
								type="text"
								name="harga"
								placeholder="Enter Harga"
								value={formValue.harga}
								onChange={handleChange}
								style={{ width: "100%", marginBottom: "30px" }}
							/>
							<button type="submit" className="btn btn-primary">
								Simpan
							</button>
							<Link to="/Layanan">
								<button className="btn btn-secondary ms-4">Back</button>
							</Link>
						</form>
					</div>
					<div style={{ flex: "1" }}>
						<textarea
							name="deskripsi"
							placeholder="Enter Deskripsi"
							value={formValue.deskripsi}
							onChange={handleChange}
							style={{ width: "100%", height: "200px" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LayananAdd;
