import "./Kendaraan.css";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Swal = require('sweetalert2')

function KendaraanAdd() {
	const [formValue, setFormValue] = useState({
		nopol: "",
		merk: "",
		tipe: "",
		tahun: "",
		id_user: "",
		keterangan: "",
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
				"http://localhost:5162/api/Kendaraan",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			Swal.fire({
				title: "Berhasil",
				text: "Data Berhasil Disimpan",
				icon: "success",
				timer: 9999,
			}).then(()=>{
				window.location.href = "/Kendaraan";
			})
		} catch (error) {
			console.error("Error saving data:", error);
			// alert("Error saving data");
			Swal.fire({
				title: "Gagal",
				text: "Data Tidak Berhasil Disimpan",
				icon: "error",
				timer: 9999,
			})
		}
	};

	return (
		<div className="card" style={{ marginTop: 150, padding: '2rem' }}>
			<div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div className="Titel" style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: 'bold' }}>Tambah  Kendaraan</div>
				<div className="content" style={{ width: '100%' }}>
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', justifyContent: 'center' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="nopol"
								placeholder="Enter Nopol Kendaraan"
								value={formValue.nopol}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="number"
								name="id_user"
								placeholder="Enter Id User"
								value={formValue.id_user}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="text"
								name="merk"
								placeholder="Enter Merk"
								value={formValue.merk}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="tipe"
								placeholder="Enter Tipe"
								value={formValue.tipe}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="number"
								name="tahun"
								placeholder="Enter Tahun"
								value={formValue.tahun}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="text"
								name="keterangan"
								placeholder="Enter keterangan"
								value={formValue.keterangan}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
						</div>
						<div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }}>
								Simpan
							</button>
							<Link to="/Kendaraan">
								<button className="btn btn-secondary">
									Back
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default KendaraanAdd;
