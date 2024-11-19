import React, { useState, useEffect } from "react";
import "./TransaksiLayanan.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataLayanan() {
	const [dataLayanan, setDataLayanan] = useState([]);
	
	useEffect(() => {
		fetchData();
	}, []);
	
	const fetchData = async () => {
		const response = await axios.get("http://localhost:5162/api/TransaksiLayanan");
		const data = await response.data.data;
		setDataLayanan(data);
		console.log(data);
	};
	
	const columns = [
		{
				name: "ID",
				selector: (row) => row.id,
				sortable: true,
		},
		{
				name: "ID Pelanggan",
				selector: (row) => row.id_pelanggan,
				sortable: true,
		},
		{
				name: "ID Kendaraan",
				selector: (row) => row.id_kendaraan,
				sortable: true,
		},
		{
				name: "ID Layanan",
				selector: (row) => row.id_layanan,
				sortable: true,
		},
		{
				name: "Tanggal Transaksi",
				selector: (row) => new Date(row.tanggal_transaksi).toLocaleDateString(),
				sortable: true,
		},
		{
				name: "Biaya Transaksi",
				selector: (row) => row.biaya_transaksi,
				sortable: true,
		},
		{
				name: "Status Transaksi",
				selector: (row) => row.status_transaksi,
				sortable: true,
		},
		{
				name: "Created At",
				selector: (row) => new Date(row.created_at).toLocaleString(),
				sortable: true,
		},
		{
				name: "Updated At",
				selector: (row) => new Date(row.updated_at).toLocaleString(),
				sortable: true,
		},
		{
			name: "Ubah",
			cell: (row) => (
				<Link to={"/dataTransaksi_edit/" + row.id} className="btn btn-primary">
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
				<Link to={"/dataTransaksi_delete/" + row.id} className="btn btn-danger">
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
						<h2 className="Titel">Data Transaksi Layanan</h2>
						<Link to={"/TransaksiLayananAdd"} className="btn btn-primary">
							+ Transaksi
						</Link>
						<DataTable columns={columns} data={dataLayanan} pagination />
					</div>
				</div>
		</div>
	);
}

export default DataLayanan;
