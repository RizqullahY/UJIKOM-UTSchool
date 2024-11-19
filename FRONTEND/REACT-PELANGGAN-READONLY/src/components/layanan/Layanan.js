import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios library

function LayananCard() {
	const [layanan, setLayanan] = useState([]);
	const formatRupiah = (angka, prefix) => {
		let numberString = angka.toString().replace(/[^,\d]/g, "");
		let split = numberString.split(",");
		let sisa = split[0].length % 3;
		let rupiah = split[0].substr(0, sisa);
		let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

		if (ribuan) {
			let separator = sisa ? "." : "";
			rupiah += separator + ribuan.join(".");
		}

		rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
		return prefix === undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:2000/getAllLayanan");
				const data = response.data.data;
				console.log(data);
				setLayanan(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				// height: "100vh",
				// position: "relative",
			}}
		>
			<div
				style={
					{
						/* Styles for content */
					}
				}
			>
				<div
					style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
				>
					<h1>Layanan Bengkel Central Otomotif</h1>
				</div>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
						gap: "20px",
						margin: "25px",
					}}
				>
					{layanan.map((layanan) => (
						<div
							key={layanan.id}
							style={{
								width: "300px",
								backgroundColor: "#fff",
								boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Card shadow
								borderRadius: "10px",
								padding: "20px",
								textAlign: "center",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "10px",
								}}
							>
								<h3 style={{ fontSize: "18px", margin: "0" }}>
									{layanan.nama_layanan}
								</h3>
								<p style={{ fontSize: "14px", color: "#666", margin: "0" }}>
									{layanan.id_layanan}
								</p>
							</div>
							<div style={{ fontSize: "16px" }}>{layanan.deskripsi}</div>
							<span style={{ fontWeight: "bold", color: "#333" }}>
								Harga: {formatRupiah(layanan.harga, 'Rp')}
							</span>
						</div>
					))}
				</div>
			</div>
			<div
				style={{
					position: "absolute", // Make pseudo-element absolute
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background:
						"url('https://static.promediateknologi.id/crop/0x256:1280x1147/750x500/webp/photo/p1/960/2024/06/29/Bengkel-3169437029.jpeg') center/cover no-repeat",
					filter: "blur(5px)", // Blur applied to background image
					zIndex: -1, // Place background behind content
				}}
			/>
		</div>
	);
}

export default LayananCard;
