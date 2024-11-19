import "./User.css";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserAdd() {
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    role: "admin", // Default role
  });

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Data berhasil disimpan");
    try {
      const response = await axios.post(
        "http://localhost:5162/api/User",
        formValue,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      if (response.status === 200) {
        alert("User berhasil ditambahkan!");
        window.location.href = "/User";
      } else {
        alert("Gagal menambahkan user");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Terjadi kesalahan saat menambahkan user");
    }
  };

  return (
		<div className="card" style={{ marginTop: 150}}>
			<div className="container">
				<div className="Titel">Tambah User</div>
				<div className="content">
					<form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
						<div className="form-group" style={{ gridColumn: '1 / span 2' }}>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								placeholder="Enter username"
								value={formValue.username}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="text"
								name="password"
								placeholder="Enter password"
								value={formValue.password}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="role">Role</label>
							<select
								name="role"
								id="role"
								value={formValue.role}
								onChange={handleChange}
								className="form-control"
								required
								style={{ width: '100%' }}
							>
								<option value="admin">Admin</option>
								<option value="pelanggan">Pelanggan</option>
								<option value="kasir">Kasir</option>
							</select>
						</div>
						<div style={{ gridColumn: '1 / span 2', textAlign: 'center' }}>
							<button type="submit" className="btn btn-primary">Simpan</button>
							<Link to="/User">
								<button type="button" className="btn btn-secondary ms-4">Back</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default UserAdd;
