import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import OverviewPage from "./components/OverviewPage";
import AdminPage from "./components/AdminPage";

import styles from "./App.module.css";

const App = () => {
	const [view, setView] = useState("main");
	return (
		<div className={styles.app}>
			<div className="App">
				{view === "main" ? <LandingPage setView={setView} /> : ""}
				{view === "overview" ? <OverviewPage setView={setView} /> : ""}
				{view === "admin" ? <AdminPage setView={setView} /> : ""}
			</div>
		</div>
	);
};

export default App;
