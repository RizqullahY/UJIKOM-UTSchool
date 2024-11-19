/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PelangganDelete() {
	const { id_pelanggan } = useParams();
	const [pelanggan, setPelanggan] = useState({
		id_pelanggan: "",
		nama_pelanggan: "",
		alamat: "",
		no_telepon: "",
		email: "",
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Pelanggan/${id_pelanggan}`
			);
			const data = response.data.data;

			setPelanggan({
				id_pelanggan: data.id_pelanggan,
				nama_pelanggan: data.nama_pelanggan,
				alamat: data.alamat,
				no_telepon: data.no_telepon,
				email: data.email,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.delete(`http://localhost:5162/api/Pelanggan/${id_pelanggan}`);
			alert("Data berhasil dihapus");
			window.location.href = "/Pelanggan";
		} catch (error) {
			console.error(error);
			alert("Error deleting data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Hapus Data Pelanggan {id_pelanggan}</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<button type="submit" className="btn btn-danger">
							Hapus
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

export default PelangganDelete;
