import React, { useState, useEffect } from "react";
import "./Reservasi.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataReservasi() {
	const [dataReservasi, setDataReservasi] = useState([]);
	const handleDetailClick = (id_kendaraan) => {
		localStorage.setItem("id_kendaraan", id_kendaraan);
	};
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const id_user = parseInt(localStorage.getItem("id_user"));
		const response = await axios.get(
			`http://localhost:5162/getByUserId/${id_user}`
		);
		const data = await response.data.data;
		setDataReservasi(data);
	};

	const columns = [
		{
			name: "ID",
			selector: (row) => row.id,
			sortable: true,
			width: "100px",
		},
		{
			name: "Kendaraan",
			selector: (row) => row.kendaraan,
			sortable: true,
		},
		{
			name: "ID Layanan",
			selector: (row) => row.id_layanan,
			sortable: true,
			width: "130px",
		},
		{
			name: "Tanggal Reservasi",
			selector: (row) => row.tanggal,
			sortable: true,
		},
		{
			name: "+ Detail",
			selector: (row) => (
				<Link
					to={`/dataKendaraanPelanggan_add/${row.id_user}/${row.kendaraan}`}
					className="btn btn-primary"
					onClick={() => handleDetailClick(row.id)}
				>
					+ Detail
				</Link>
			),
			sortable: true,
			width: "120px",
		},
		{
			name: "Ubah",
			selector: (row) => (
				<Link to={`/ReservasiPelangganEdit/${row.id}`} className="btn btn-warning">
					Edit
				</Link>
			),
			width: "100px",
			sortable: true,
		},
		{
			name: "Hapus",
			selector: (row) => (
				<Link to={`/ReservasiPelangganDelete/${row.id}`} className="btn btn-danger">
					Delete
				</Link>
			),
			width: "120px",
			sortable: true,
		},
		{
			name: "+ Layanan",
			selector: (row) => (
				<Link
					to={`/ReservasiPelangganTambahLayanan/${row.id}`}
					className="btn btn-secondary"
				>
					+ Layanan
				</Link>
			),
			width: "140px",
			sortable: true,
		},
	];

	return (
		<div className="card" style={{ marginTop: 150 }}>
			<div className="container">
				<div className="content">
					<h2 className="Titel">Data Reservasi</h2>
					<Link to="/ReservasiPelangganAdd" className="btn btn-primary">
						+ Data Reservasi
					</Link>
					<DataTable columns={columns} data={dataReservasi} pagination />
				</div>
			</div>
		</div>
	);
}

export default DataReservasi;
