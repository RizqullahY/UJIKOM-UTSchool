/* eslint-disable react-hooks/exhaustive-deps */
import "./Pelanggan.css";
import axios from "axios";
import React from "react";
import { useParams, Link } from "react-router-dom";

function PelangganEdit() {
	const { id_pelanggan } = useParams();
	console.log('Pelanggan ID:', id_pelanggan);

	const [formValue, setFormValue] = React.useState({
		id_pelanggan: "",
		nama_pelanggan: "",
		alamat: "",
		no_telepon: "",
		email: "",
		terakhir_diubah: "",
	});

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Pelanggan/${id_pelanggan}`
			);
			const data = response.data.data;

			setFormValue({
				id_pelanggan: data.id_pelanggan,
				nama_pelanggan: data.nama_pelanggan,
				alamat: data.alamat,
				no_telepon: data.no_telepon,
				email: data.email,
				terakhir_diubah: (localStorage.getItem("loggedInUser")) 
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
				`http://localhost:5162/api/Pelanggan/${id_pelanggan}`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			console.log(response);
			alert("Data berhasil diubah");
			window.location.href = "/Pelanggan";
		} catch (error) {
			console.log(error);
			alert("Error updating data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Edit Data Pelanggan {id_pelanggan}</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="id_pelanggan"
							placeholder="Enter ID Pelanggan"
							value={formValue.id_pelanggan}
							onChange={handleChange}
							disabled
						/>
						<br />
						<br />
						<input
							type="text"
							name="nama_pelanggan"
							placeholder="Enter Nama Pelanggan"
							value={formValue.nama_pelanggan}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="alamat"
							placeholder="Enter Alamat"
							value={formValue.alamat}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="no_telepon"
							placeholder="Enter No Telepon"
							value={formValue.no_telepon}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="email"
							placeholder="Enter Email"
							value={formValue.email}
							onChange={handleChange}
						/>
						<br />
						<br />
						<button type="submit" className="btn btn-primary">
							Simpan
						</button>
						<Link to="/Pelanggan">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default PelangganEdit;
