/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";

function LayananDelete() {
	const { id_layanan } = useParams();
	const [layanan, setLayanan] = useState({
		id_layanan: "",
		nama_layanan: "",
		harga: "",
		deskripsi: "",
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Layanan/${id_layanan}`
			);
			const data = response.data.data;

			setLayanan({
				id_layanan: data.id_layanan,
				nama_layanan: data.nama_layanan,
				harga: data.harga,
				deskripsi: data.deskripsi,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.delete(`http://localhost:5162/api/Layanan/${id_layanan}`);
			alert("Data berhasil dihapus");
			window.location.href = "/Layanan";
		} catch (error) {
			console.error(error);
			alert("Error deleting data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Hapus Data Layanan {id_layanan}</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<button type="submit" className="btn btn-danger">
							Hapus
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

export default LayananDelete;
