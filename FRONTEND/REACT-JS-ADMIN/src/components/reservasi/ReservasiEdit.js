/* eslint-disable react-hooks/exhaustive-deps */
import "./Reservasi.css";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";

function ReservasiEdit() {
	const { id } = useParams();
	console.log("Layanan ID:", id);

	const [formValue, setFormValue] = React.useState({
		id_user: "",
		kendaraan: "",
		id_layanan: "",
		tanggal: "",
		status: "",
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
				id_layanan: data.id_layanan,
				tanggal: data.tanggal,
				status: data.status,
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
			const response = await axios.put(
				`http://localhost:5162/api/Reservasi/${id}`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			alert("Data berhasil diubah");
			window.location.href = "/Reservasi";
		} catch (error) {
			console.log(error);
			alert("Error updating data");
		}
	};

	return (
		<div className="card" style={{ marginTop: 150}}>
			<div className="container">
				<div className="Titel">Ubah Reservasi</div>
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
						<div className="form-group">
							<select name="status" value={formValue.status} onChange={handleChange} style={{ width: '100%' }}>
								<option value="Belum Lunas">Belum Lunas</option>
								<option value="Lunas">Lunas</option>
							</select>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Ubah</button>
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

export default ReservasiEdit;
