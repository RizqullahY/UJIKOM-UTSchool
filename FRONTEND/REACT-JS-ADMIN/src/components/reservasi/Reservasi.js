import React, { useState, useEffect } from "react";
import "./Reservasi.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataReservasi() {
	const [dataReservasi, setDataReservasi] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const response = await axios.get(
			"http://localhost:5162/api/Reservasi"
		);
		const data = await response.data.data;
		setDataReservasi(data);
		console.log(data.data);
	};
	const columns = [
		{
			name: "Id",
			selector: (row) => row.id,
			sortable: true,
		},
		{
			name: "Id User",
			selector: (row) => row.id_user,
			sortable: true,
		},
		{
			name: "Kendaraan",
			selector: (row) => row.kendaraan,
			sortable: true,
		},
		{
			name: "Layanan",
			selector: (row) => row.id_layanan,
			sortable: true,
		},
		{
			name: "Tanggal",
			selector: (row) => row.tanggal,
			sortable: true,
		},
		{
			name: "Status",
			selector: (row) => row.status,
			sortable: true,
		},
		{
			name: "Ubah",
			selector: (row) => (
				<Link to={"/dataReservasi_edit/" + row.id} className="btn btn-primary">
					Edit
				</Link>
			),
			sortable: true,
		},
		{
			name: "Hapus",
			selector: (row) => (
				<Link to={"/dataReservasi_delete/" + row.id} className="btn btn-danger">
					Delete
				</Link>
			),
			sortable: true,
		},
	];
	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="content">
					<h2 className="Titel">Data Reservasi</h2>
					<Link to="/dataReservasi_add" className="btn btn-primary">+ Data Reservasi</Link>
					<DataTable columns={columns} data={dataReservasi} pagination />
				</div>
			</div>
		</div>
	);
}
export default DataReservasi;
