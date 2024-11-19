import "./TransaksiLayanan.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function LayananTransaksiAdd() {
	const [formValue, setFormValue] = React.useState({
		id_pelanggan: "",
		id_kendaraan: "",
		id_layanan: "",
		tanggal_transaksi: "",
		biaya_transaksi: "",
		status_transaksi: "Belum Lunas", 
	});

	const handleChange = (event) => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:5162/api/TransaksiLayanan",
				formValue,
				{ headers: { "Content-Type": "application/json" } }
			);
			// alert("Data berhasil disimpan");
			// window.location.href = "/TransaksiLayanan";
			console.log(response);
		} catch (error) {
			console.error("There was an error!", error);
			alert("Ada kesalahan saat menyimpan data. Silakan coba lagi.");
		}
	};

	return (
		<div className="card" style={{ marginTop: 150 }}>
			<div className="container">
				<div className="title">Tambah Transaksi Layanan</div>
				<div className="content">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label htmlFor="id_pelanggan">ID Pelanggan</label>
							<input
								type="text"
								name="id_pelanggan"
								id="id_pelanggan"
								placeholder="Enter ID Pelanggan"
								value={formValue.id_pelanggan}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<br />
						<div className="form-group">
							<label htmlFor="id_kendaraan">ID Kendaraan</label>
							<input
								type="text"
								name="id_kendaraan"
								id="id_kendaraan"
								placeholder="Enter ID Kendaraan"
								value={formValue.id_kendaraan}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<br />
						<div className="form-group">
							<label htmlFor="id_layanan">ID Layanan</label>
							<input
								type="text"
								name="id_layanan"
								id="id_layanan"
								placeholder="Enter ID Layanan"
								value={formValue.id_layanan}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<br />
						<div className="form-group">
							<label htmlFor="tanggal_transaksi">Tanggal Transaksi</label>
							<input
								type="date"
								name="tanggal_transaksi"
								id="tanggal_transaksi"
								placeholder="Enter Tanggal Transaksi"
								value={formValue.tanggal_transaksi}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<br />
						<div className="form-group">
							<label htmlFor="biaya_transaksi">Biaya Transaksi</label>
							<input
								type="number"
								name="biaya_transaksi"
								id="biaya_transaksi"
								placeholder="Enter Biaya Transaksi"
								value={formValue.biaya_transaksi}
								onChange={handleChange}
								className="form-control"
							/>
						</div>
						<br />
						<div className="form-group">
							<label htmlFor="status_transaksi">Status Transaksi</label>
							<select
								name="status_transaksi"
								id="status_transaksi"
								value={formValue.status_transaksi}
								onChange={handleChange}
								className="form-control"
							>
								<option value="Belum Lunas">Belum Lunas</option>
								<option value="Lunas">Lunas</option>
							</select>
						</div>
						<br />
						<button type="submit" className="btn btn-primary">Simpan</button>
						<Link to="/TransaksiLayanan">
							<button type="button" className="btn btn-secondary ms-4">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LayananTransaksiAdd;
