/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";

function UserDelete() {
	const { id_user } = useParams();
	const [user, setDataUser] = useState({
		username: "",
		password: "",
		role: "admin"
	});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				`http://localhost:5162/api/User/${id_user}`
			);
			const data = response.data.data;

			setDataUser({
				username: data.username,
				password: data.password,
				role: data.role,
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.delete(`http://localhost:5162/api/User/${id_user}`);
			alert("Data berhasil dihapus");
			window.location.href = "/User";
		} catch (error) {
			console.error(error);
			alert("Error deleting data");
		}
	};

	return (
		<div className="card" style={{ marginTop:150 }}>
			<div className="container">
				<div className="Titel">Hapus Data User dengan id {id_user} ?</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ textAlign:'center' }}>
						<button type="submit" className="btn btn-danger">
							Hapus
						</button>
						<Link to="/User">
							<button className="btn btn-secondary ms-4 ">Back</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default UserDelete;
