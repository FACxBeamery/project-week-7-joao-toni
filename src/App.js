import React, { useState } from "react";
import MainPage from "./components/MainPage";
import OverviewPage from "./components/OverviewPage";
import AdminPage from "./components/AdminPage";

import styles from "./App.module.css";

function App() {
	const [view, setView] = useState("main");
	return (
		<div className={styles.app}>
			<div className="App">
				{view === "main" ? <MainPage setView={setView} /> : ""}
				{view === "overview" ? <OverviewPage setView={setView} /> : ""}
				{view === "admin" ? <AdminPage setView={setView} /> : ""}
			</div>
		</div>
	);
}

export default App;
