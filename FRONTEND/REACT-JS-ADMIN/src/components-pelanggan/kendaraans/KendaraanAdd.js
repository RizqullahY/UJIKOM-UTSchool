/* eslint-disable no-unused-vars */
import "./Kendaraan.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const Swal = require("sweetalert2");

function KendaraanAdd() {
	const id_user = localStorage.getItem('id_user')
	const { kendaraan } = useParams();
	const [formValue, setFormValue] = useState({
		nopol: "",
		merk: "",
		tipe: "",
		tahun: "",
		id_user: id_user,
		keterangan: "",
	});
	const [isUpdating, setIsUpdating] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5162/getByUserId/${id_user}`
				);
				const dataKendaraan = response.data.data.find(
					(item) => item.kendaraan === kendaraan
				);

				const merkResponse = await axios.get(
					`http://localhost:5162/getKendaraanByMerk/${kendaraan}`
				);
				const merkData = merkResponse.data.data;

				if (dataKendaraan && merkData) {
					setIsUpdating(true);
					setFormValue({
						nopol: merkData.nopol,
						merk: dataKendaraan.kendaraan,
						tipe: merkData.tipe,
						tahun: merkData.tahun,
						id_user: id_user,
						keterangan: merkData.keterangan,
					});
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [id_user, kendaraan]);

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const id_kendaraan = localStorage.getItem("id_kendaraan");

		try {
			let response;
			if (isUpdating) {
				response = await axios.put(
					`http://localhost:5162/api/Kendaraan/${id_kendaraan}`,
					formValue,
					{ headers: { "Content-Type": "application/json" } }
				);
			} else {
				response = await axios.post(
					"http://localhost:5162/api/Kendaraan",
					formValue,
					{ headers: { "Content-Type": "application/json" } }
				);
			}

			Swal.fire({
				title: "Berhasil",
				text: "Data Berhasil Disimpan",
				icon: "success",
				timer: 9999,
			}).then(() => {
				window.location.href = "/ReservasiPelanggan";
			});
		} catch (error) {
			console.error("Error saving data:", error);
			Swal.fire({
				title: "Gagal",
				text: "Data Tidak Berhasil Disimpan",
				icon: "error",
				timer: 9999,
			});
		}
	};

	return (
		<div className="card" style={{ marginTop: 150, padding: '2rem' }}>
			<div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<div className="Titel" style={{ marginBottom: '2rem', fontSize: '24px', fontWeight: 'bold' }}>Tambah Detail Kendaraan</div>
				<div className="content" style={{ width: '100%' }}>
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', justifyContent: 'center' }}>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="nopol"
								placeholder="Enter Nopol Kendaraan"
								value={formValue.nopol}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
							<br />
							<input
								type="number"
								name="id_user"
								placeholder="Enter Id User"
								value={formValue.id_user}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
							<br />
							<input
								type="text"
								name="merk"
								placeholder="Enter Merk"
								value={formValue.merk}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<input
								type="text"
								name="tipe"
								placeholder="Enter Tipe"
								value={formValue.tipe}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
							<br />
							<input
								type="number"
								name="tahun"
								placeholder="Enter Tahun"
								value={formValue.tahun}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
							<br />
							<input
								type="text"
								name="keterangan"
								placeholder="Enter keterangan"
								value={formValue.keterangan}
								onChange={handleChange}
								style={{ width: '100%' }}
							/>
						</div>
						<div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary" style={{ marginRight: '1rem' }}>
								Simpan
							</button>
							<Link to="/ReservasiPelanggan">
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

export default KendaraanAdd;
