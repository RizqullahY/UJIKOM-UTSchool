import React, { useState, useEffect } from "react";
import "./Layanan.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function DataLayanan() {
	const formatRupiah = (angka, prefix) => {
		let numberString = angka.toString().replace(/[^,\d]/g, '');
		let split = numberString.split(',');
		let sisa = split[0].length % 3;
		let rupiah = split[0].substr(0, sisa);
		let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

		if (ribuan) {
			let separator = sisa ? '.' : '';
			rupiah += separator + ribuan.join('.');
		}

		rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
		return prefix === undefined ? rupiah : (rupiah ? 'Rp' + rupiah : '');
	};
	const [dataLayanan, setDataLayanan] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const response = await axios.get(
			"http://localhost:5162/api/Layanan"
		);
		const data = await response.data.data;
		setDataLayanan(data);
		console.log(data.data);
	};
	const columns = [
		{
			name: "ID Layanan",
			selector: (row) => row.id_layanan,
			sortable: true,
			width: "150px",
		},
		{
			name: "Nama Layanan",
			selector: (row) => row.nama_layanan,
			sortable: true,
		},
		{
			name: "Harga",
			selector: (row) => formatRupiah(row.harga, 'Rp'),
			sortable: true,
		},
		{
			name: "Deskripsi",
			selector: (row) => row.deskripsi,
			sortable: true,
		},
		{
			name: "Show",
			selector: (row) => (
				<Link to={"/LayananShowPelanggan/" + row.id_layanan} className="btn btn-secondary">
					Show
				</Link>
			),
			sortable: true,
		},
	];
	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="content">
					<h2 className="Titel">Data Layanan</h2>
					<DataTable columns={columns} data={dataLayanan} pagination />
				</div>
			</div>
		</div>
	);
}
export default DataLayanan;
