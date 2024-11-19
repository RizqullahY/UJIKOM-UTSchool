import "./Layanan.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";


function LayananAdd() {
	const [formValue, setFormValue] = React.useState({
		nama_layanan: "",
		harga: "",
		deskripsi: "",
	});

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		alert("Data berhasil disimpan");
		try {
			const response = await axios.post(
				"http://localhost:5162/api/Layanan",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			window.location.href = "/Layanan";
			console.log(response);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Tambah Data Layanan</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="nama_layanan"
							placeholder="Enter Nama Layanan"
							value={formValue.nama_layanan}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="harga"
							placeholder="Enter Harga"
							value={formValue.harga}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="deskripsi"
							placeholder="Enter Deskripsi"
							value={formValue.deskripsi}
							onChange={handleChange}
						/>
						<br />
						<br />
						<button type="submit" className="btn btn-primary">Simpan</button>
						<Link to="/Layanan">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LayananAdd;
