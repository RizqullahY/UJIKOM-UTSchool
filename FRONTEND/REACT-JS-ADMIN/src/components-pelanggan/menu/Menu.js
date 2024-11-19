/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Swal = require("sweetalert2");

export default class Menu extends Component {
	handleLogout = () => {
		Swal.fire({
			title: "Apakah Anda Ingin Keluar",
			showCancelButton: true,
			confirmButtonText: "Iya",
			icon:'warning',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Selamat Jalan", "", "success")
				.then(()=>{
					localStorage.removeItem("loggedInUser");
					localStorage.removeItem("roleUser");
					window.location.href = "/";
				});
			}
		});
	};
	render() {
		return (
			<div>
				<header className="header">
					<a href="" className="logo">
						<span>Bengkel Sentral </span>Otomotif
						<h6>
							Login as :<b> {localStorage.getItem("loggedInUser")}</b>
						</h6>
					</a>
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<Link to="/LayananPelanggan">Layanan</Link>
						</li>
						<li>
							<Link to="/ReservasiPelanggan">Reservasi</Link>
						</li>
						<li>
							<Link to="/PelangganPelanggan">Pelanggan</Link>
						</li>
						{/* <li>
							<Link to="/KendaraanPelanggan">Kendaraan</Link>
						</li> */}
						<li>
							<Link onClick={this.handleLogout}>
								Logout
							</Link>
						</li>
					</ul>
				</header>
			</div>
		);
	}
}
