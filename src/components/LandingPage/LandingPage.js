import React, { useEffect } from "react";
import Header from "../Header";
import Button from "../Button";

import styles from "./LandingPage.module.css";

const LandingPage = ({ setView }) => {
	return (
		<div className={styles.landingpage}>
			<header className={styles["header-wrapper"]}>
				<Header size={"large"} text={"Hi Paul"} />
				<Header
					size={"medium"}
					text={"Welcome to Beamery. Let's get started!"}
				/>
			</header>
			<div className={styles["button-wrapper"]}>
				<Button
					size={"large"}
					category={"primary"}
					buttonText={"Sign in"}
					onClick={(e) => setView("overview")}
				/>
				<Button
					size={"large"}
					category={"outlined"}
					buttonText={"Not Paul? Sign in as admin "}
					onClick={(e) => setView("admin")}
				/>
			</div>
		</div>
	);
};

export default LandingPage;