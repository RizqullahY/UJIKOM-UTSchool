import React, { useState, useEffect } from "react";
import "./User.css";
import axios from "axios";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DataUser() {
	const [dataUser, setDataUser] = useState([]);
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const response = await axios.get(
			"http://localhost:5162/api/User"
		);
		const data = await response.data.data;
		setDataUser(data);
		console.log(data.data);
	};
	const columns = [
		{
			name: "Id User",
			selector: (row) => row.id_user,
			sortable: true,
		},
		{
			name: "Username",
			selector: (row) => row.username,
			sortable: true,
		},
		{
			name: "Password",
			selector: (row) => row.password,
			sortable: true,
		},
		{
			name: "Role",
			selector: (row) => row.role,
			sortable: true,
		},
		{
			name: "Ubah",
			selector: (row) => (
				<Link to={"/dataUser_edit/" + row.id_user} className="btn btn-primary">
					Edit
				</Link>
			),
			sortable: true,
		},
		{
			name: "Hapus",
			selector: (row) => (
				<Link to={"/dataUser_delete/" + row.id_user} className="btn btn-danger">
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
					<h2 className="Titel">Data User</h2>
					<Link to="/dataUser_add" className="btn btn-primary">+ Data User</Link>
					<DataTable columns={columns} data={dataUser} pagination />
				</div>
			</div>
		</div>
	);
}
export default DataUser;
