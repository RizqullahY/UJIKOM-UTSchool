/* eslint-disable react-hooks/exhaustive-deps */
import "./Layanan.css";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";

function LayananEdit() {
	const { id_layanan } = useParams();
	console.log('Layanan ID:', id_layanan);

	const [formValue, setFormValue] = React.useState({
		id_layanan: "",
		nama_layanan: "",
		harga: "",
		deskripsi: "",
	});

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Layanan/${id_layanan}`
			);
			const data = response.data.data;
			console.log(data);

			setFormValue({
				id_layanan: data.id_layanan,
				nama_layanan: data.nama_layanan,
				harga: data.harga,
				deskripsi: data.deskripsi,
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
				`http://localhost:5162/api/Layanan/${id_layanan}`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			alert("Data berhasil diubah");
			window.location.href = "/Layanan";
		} catch (error) {
			console.log(error);
			alert("Error updating data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Edit Data Layanan {id_layanan}</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="id_layanan"
							placeholder="Enter ID Layanan"
							value={formValue.id_layanan}
							onChange={handleChange}
							disabled
						/>
						<br />
						<br />
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
						<button type="submit" className="btn btn-primary">
							Simpan
						</button>
						<Link to="/Layanan">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LayananEdit;
