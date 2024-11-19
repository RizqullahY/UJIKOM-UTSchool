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
		<div className="card" style={{ marginTop: 150, padding: '2rem' }}>
			<div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div className="Titel" style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: 'bold' }}>Edit Data Kendaraan</div>
				<div className="content" style={{ width: '100%' }}>
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', justifyContent: 'center' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="nopol"
								placeholder="Enter Nopol Kendaraan"
								value={formValue.nopol}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="number"
								name="id_user"
								placeholder="Enter Id User"
								value={formValue.id_user}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="text"
								name="merk"
								placeholder="Enter Merk"
								value={formValue.merk}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="tipe"
								placeholder="Enter Tipe"
								value={formValue.tipe}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="number"
								name="tahun"
								placeholder="Enter Tahun"
								value={formValue.tahun}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
							<br />
							<input
								type="text"
								name="keterangan"
								placeholder="Enter keterangan"
								value={formValue.keterangan}
								onChange={handleChange}
								style={{ width: '80%' }}
							/>
						</div>
						<div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }}>
								Simpan
							</button>
							<Link to="/Kendaraan">
								<button className="btn btn-secondary">
									Back
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default KendaraanEdit;
