import "./Pelanggan.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


function PelangganAdd() {
	
	const [formValue, setFormValue] = React.useState({
		id_pelanggan: "",
		nama_pelanggan: "",
		alamat: "",
		no_telepon: "",
		email: "",
		terakhir_diubah : (localStorage.getItem("loggedInUser"))
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
					"http://localhost:5162/api/Pelanggan",
					formValue,
					{ headers: { "Content-Type": "application/json" } }
				);
				console.log(response);
				alert("Data berhasil disimpan");
				window.location.href = "/Pelanggan";
		} catch (error) {
				console.log(error);
				alert("Error saving data");
		}
	};

	return (
		<div className="card" style={{ marginTop: 150}}>
			<div className="container">
				<div className="Titel">Tambah Data Pelanggan</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
						<div style={{ gridColumn: '1 / span 2' }}>
							<input
								type="number"
								name="id_pelanggan"
								placeholder="Enter id_pelanggan"
								value={formValue.id_pelanggan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<input
								type="text"
								name="nama_pelanggan"
								placeholder="Enter Nama Pelanggan"
								value={formValue.nama_pelanggan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<input
								type="text"
								name="alamat"
								placeholder="Enter Alamat"
								value={formValue.alamat}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<input
								type="text"
								name="no_telepon"
								placeholder="Enter No Telepon"
								value={formValue.no_telepon}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div>
							<input
								type="email"
								name="email"
								placeholder="Enter Email"
								value={formValue.email}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Simpan</button>
							<Link to="/Pelanggan">
								<button className="btn btn-secondary ms-4">Back</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default PelangganAdd;
