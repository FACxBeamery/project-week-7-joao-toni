import React from "react";
import Header from "../Header";
import Button from "../Button";

import styles from "./MainPage.module.css";

const MainPage = () => {
	return (
		<div className={styles.mainpage}>
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
				/>
				<Button
					size={"large"}
					category={"outlined"}
					buttonText={"Not Paul? Sign in as admin "}
				/>
			</div>
		</div>
	);
};

export default MainPage;
