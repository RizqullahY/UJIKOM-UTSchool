/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";

function ReservasiDelete() {
	const { id } = useParams();
	const [reservasi, setReservasi] = useState({
		id_user: 1,
		kendaraan: "",
		id_layanan:"",
		tanggal: "",
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Reservasi/${id}`
			);
			const data = response.data.data;

			setReservasi({
				id_user: data.id_user,
				kendaraan: data.kendaraan,
				tanggal: data.tanggal,
				id_layanan: data.id_layanan,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.delete(`http://localhost:5162/api/Reservasi/${id}`);
			alert("Data berhasil dihapus");
			window.location.href = "/Reservasi";
		} catch (error) {
			console.error(error);
			alert("Error deleting data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Hapus Data Reservasi dengan id {id} ?</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ textAlign:'center' }}>
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

export default ReservasiDelete;
