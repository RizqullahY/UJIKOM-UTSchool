/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Pelanggan.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const Swal = require('sweetalert2')

function DataPelanggan() {
const id_user = parseInt(localStorage.getItem("id_user"));
const [formValue, setFormValue] = useState({
	id_pelanggan: id_user,
	nama_pelanggan: "",
	alamat: "",
	no_telepon: "",
	email: "",
});
const [isExisting, setIsExisting] = useState(false);

useEffect(() => {
	fetchData();
}, []);

const fetchData = async () => {
	try {
		const response = await axios.get(`http://localhost:5162/api/Pelanggan/${id_user}`);
		const data = response.data.data;
		console.log(data)
		if (data) {
		setFormValue({
			id_pelanggan: data.id_user,
			nama_pelanggan: data.nama_pelanggan || "",
			alamat: data.alamat || "",
			no_telepon: data.no_telepon || "",
			email: data.email || "",
		});
		setIsExisting(true);
		}
	} catch (error) {
		console.log(error);
		setIsExisting(false);
	}
};

const handleChange = (event) => {
	const { name, value } = event.target;
	setFormValue((prevState) => ({
		...prevState,
		[name]: value,
	}));
};

const handleSubmit = async (event) => {
	event.preventDefault();
	try {
		if (isExisting) {
		await axios.put(
			`http://localhost:5162/api/Pelanggan/${id_user}`,
			formValue,
			{ headers: { "Content-Type": "application/json" } }
		);
		Swal.fire({
			title: "Berhasil",
			text: "Data Berhasil Diubah",
			icon: "success",
			timer: 9999,
		}).then(()=>{
			window.location.reload();
		})
		} else {
		await axios.post(
			`http://localhost:5162/api/Pelanggan`,
			formValue,
			{ headers: { "Content-Type": "application/json" } }
		);
		Swal.fire({
			title: "Berhasil",
			text: "Data Berhasil Ditambahkan",
			icon: "success",
			timer: 9999,
		}).then(()=>{
			window.location.reload();
		})
	}
	} catch (error) {
		console.log(error);
		alert("Error updating data");
	}
};

return (
	<div className="card mx-auto" style={{ marginTop: 150,marginBottom:50, maxWidth: 600 }}>
	<div className="card-body">
		<h2 className="card-title text-center mb-4">Data Pelanggan</h2>
		<form onSubmit={handleSubmit}>
			<div className="form-group">
			<label>Nama</label>
			<input
				type="text"
				name="nama_pelanggan"
				value={formValue.nama_pelanggan}
				onChange={handleChange}
				className="form-control"
				placeholder="Nama Pelanggan"
			/>
			</div>
			<div className="form-group">
			<label>Alamat</label>
			<input
				type="text"
				name="alamat"
				value={formValue.alamat}
				onChange={handleChange}
				className="form-control"
				placeholder="Alamat"
			/>
			</div>
			<div className="form-group">
			<label>No Telepon</label>
			<input
				type="text"
				name="no_telepon"
				value={formValue.no_telepon}
				onChange={handleChange}
				className="form-control"
				placeholder="No Telepon"
			/>
			</div>
			<div className="form-group">
			<label>Email</label>
			<input
				type="email"
				name="email"
				value={formValue.email}
				onChange={handleChange}
				className="form-control"
				placeholder="Email"
			/>
			</div>
			<button type="submit" className="btn btn-primary btn-block">
			{isExisting ? "Simpan" : "Tambah"}
			</button>
		</form>
	</div>
	</div>
);
}

export default DataPelanggan;
