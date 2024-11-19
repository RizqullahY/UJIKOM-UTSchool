import React, { useState, useEffect } from "react";
import "./Pelanggan.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataPelanggan() {
	const [dataPelanggan, setDataPelanggan] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await axios.get(
			"http://localhost:5162/api/Pelanggan"
		);
		const data = await response.data.data;
		setDataPelanggan(data);
		console.log(data);
	};

	const columns = [
		{
			name: "ID Pelanggan",
			selector: (row) => row.id_pelanggan,
			sortable: true,
		},
		{
			name: "Nama Pelanggan",
			selector: (row) => row.nama_pelanggan,
			sortable: true,
		},
		{
			name: "Alamat",
			selector: (row) => row.alamat,
			sortable: true,
		},
		{
			name: "No Telepon",
			selector: (row) => row.no_telepon,
			sortable: true,
		},
		{
			name: "Email",
			selector: (row) => row.email,
			sortable: true,
		},
		{
			name: "Terakhir diubah",
			selector: (row) => row.terakhir_diubah,
			sortable: true,
		},
		{
			name: "Ubah",
			cell: (row) => (
				<Link to={"/dataPelanggan_edit/" + row.id_pelanggan} className="btn btn-primary">
					Edit
				</Link>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
		{
			name: "Hapus",
			cell: (row) => (
				<Link to={"/dataPelanggan_delete/" + row.id_pelanggan} className="btn btn-danger">
					Delete
				</Link>
			),
			ignoreRowClick: true,
			allowOverflow: true,
			button: true,
		},
	];

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="content">
					<h2 className="Titel">Data Pelanggan</h2>
					<Link to="/dataPelanggan_add" className="btn btn-primary">+ Data Pelanggan</Link>
					<DataTable columns={columns} data={dataPelanggan} pagination />
				</div>
			</div>
		</div>
	);
}

export default DataPelanggan;
