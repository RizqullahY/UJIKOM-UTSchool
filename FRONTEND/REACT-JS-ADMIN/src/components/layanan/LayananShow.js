/* eslint-disable react-hooks/exhaustive-deps */
// CardLayanan.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CardLayanan = () => {
	const [layanan, setLayanan] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
   const { id_layanan } = useParams();
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


	useEffect(() => {
		axios
			.get("http://localhost:5162/api/Layanan/" + id_layanan)
			.then((response) => {
            console.log(response)
				setLayanan(response.data.data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div style={styles.card}>
			<div style={styles.cardBody}>
				<h5 style={styles.cardTitle}>{layanan.nama_layanan}</h5>
				<h6 style={styles.cardSubtitle}>ID: {layanan.id_layanan}</h6>
				<p style={styles.cardText}>Harga: Rp{formatRupiah(layanan.harga)}</p>
				<p style={styles.cardText}>{layanan.deskripsi}</p>
			</div>
		</div>
	);
};

const styles = {
	card: {
		margin: "200px auto",
		padding: "20px",
		borderRadius: "10px",
		boxShadow: "1px 4px 8px rgba(1, 1, 1, 0.7)",
		maxWidth: "400px",
		backgroundColor: "#fff",
	},
	cardBody: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	cardTitle: {
		fontSize: "1.5em",
		marginBottom: "10px",
	},
	cardSubtitle: {
		fontSize: "1em",
		color: "#666",
	},
	cardText: {
		fontSize: "1em",
		marginTop: "10px",
	},
};

export default CardLayanan;
