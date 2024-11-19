import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataKendaraan() {
	const [dataKendaraan, setDataKendaraan] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"http://localhost:5162/api/Kendaraan"
			);
			const data = response.data.data;
			setDataKendaraan(data);
			console.log(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const columns = [
		{
			name: "ID Kendaraan",
			selector: (row) => row.id_kendaraan,
			sortable: true,
		},
		{
			name: "ID User",
			selector: (row) => row.id_user,
			sortable: true,
		},
		{
			name: "Nomor Polisi",
			selector: (row) => row.nopol,
			sortable: true,
		},
		{
			name: "Merk",
			selector: (row) => row.merk,
			sortable: true,
		},
		{
			name: "Tipe",
			selector: (row) => row.tipe,
			sortable: true,
		},
		{
			name: "Tahun",
			selector: (row) => row.tahun,
			sortable: true,
		},
		{
			name: "Keterangan",
			selector: (row) => row.keterangan,
			sortable: true,
		},
		{
			name: "Ubah",
			selector: (row) => (
				<Link to={"/dataKendaraan_edit/" + row.id_kendaraan} className="btn btn-primary">
					Edit
				</Link>
			),
			sortable: true,
		},
		{
			name: "Hapus",
			selector: (row) => (
				<Link to={"/dataKendaraan_delete/" + row.id_kendaraan} className="btn btn-danger">
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
					<h2 className="Titel">Data Kendaraan</h2>
					<Link to="/dataKendaraan_add" className="btn btn-primary">+ Tambah Kendaraan</Link>
					<DataTable columns={columns} data={dataKendaraan} pagination />
				</div>
			</div>
		</div>
	);
}

export default DataKendaraan;
