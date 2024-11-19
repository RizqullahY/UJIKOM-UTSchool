import "./Reservasi.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ReservasiAdd() {
	const [formValue, setFormValue] = React.useState({
		id_user: "",
		kendaraan: "",
		id_layanan: "",
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
		alert("Data berhasil disimpan");
		try {
			const response = await axios.post(
				"http://localhost:5162/api/Reservasi",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			window.location.href = "/Reservasi";
			console.log(response);
		} catch (error) {
			console.log(error);
			alert(error);
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
								type="number"
								name="id_user"
								placeholder="id User"
								value={formValue.id_user}
								onChange={handleChange}
								style={{ width: '100%' }}
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
							/>
						</div>
						<div className="form-group">
							<input
								type="number"
								name="id_layanan"
								placeholder="Pilih Reservasi Layanan"
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
							/>
						</div>
						{/* <div className="form-group">
							<select name="status" value={formValue.status} onChange={handleChange} style={{ width: '100%' }}>
								<option value="Belum Lunas">Belum Lunas</option>
								<option value="Lunas">Lunas</option>
							</select>
						</div> */}
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Tambah</button>
							<Link to="/Reservasi">
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
