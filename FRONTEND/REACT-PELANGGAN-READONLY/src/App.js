import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Layanan from "./components/layanan/Layanan";

function App() {
	return (
		<Router>
				<div className="app-content">
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/Register" element={<Register />} />
						<Route path="/Layanan" element={<Layanan />} />
					</Routes>
				</div>
		</Router>
	);
}

export default App;
