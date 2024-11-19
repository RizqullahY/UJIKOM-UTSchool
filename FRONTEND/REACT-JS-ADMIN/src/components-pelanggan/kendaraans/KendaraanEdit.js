/* eslint-disable react-hooks/exhaustive-deps */
import "./Kendaraan.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function KendaraanEdit() {
	const { id_kendaraan } = useParams();
	console.log('Kendaraan ID:', id_kendaraan);

	const [formValue, setFormValue] = useState({
		nopol: "",
		merk: "",
		tipe: "",
		tahun: "",
		id_user: "",
		keterangan: ""
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/Kendaraan/${id_kendaraan}`
			);
			const data = response.data.data;

			setFormValue({
				nopol: data.nopol,
				merk: data.merk,
				tipe: data.tipe,
				tahun: data.tahun,
				id_user: data.id_user,
				keterangan: data.keterangan
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
			await axios.put(
				`http://localhost:5162/api/Kendaraan/${id_kendaraan}`,
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			alert("Data Kendaraan berhasil diubah");
			window.location.href = "/Kendaraan";
		} catch (error) {
			console.log(error);
			alert("Error updating Kendaraan data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Tambah Data Kendaraan</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ justifyContent:'center' }}>
						<input
							type="text"
							name="nopol"
							placeholder="Enter Nopol Kendaraan"
							value={formValue.nopol}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="number"
							name="id_user"
							placeholder="Enter Id User"
							value={formValue.id_user}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="merk"
							placeholder="Enter Merk"
							value={formValue.merk}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="tipe"
							placeholder="Enter Tipe"
							value={formValue.tipe}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="number"
							name="tahun"
							placeholder="Enter Tahun"
							value={formValue.tahun}
							onChange={handleChange}
						/>
						<br />
						<br />
						<input
							type="text"
							name="keterangan"
							placeholder="Enter keterangan"
							value={formValue.keterangan}
							onChange={handleChange}
						/>
						<br />
						<br />
						<button type="submit" className="btn btn-primary">
							Simpan
						</button>
						<Link to="/Kendaraan">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default KendaraanEdit;
