import React from "react";
import styles from "./Header.module.css";

const Header = ({ size, text, sans }) => {
	let header;

	if (size === "large") {
		header = <h1 className={`${styles.header} ${styles.large}`}>{text}</h1>;
	} else if (size === "medium") {
		header = (
			<h2
				className={`${styles.header} ${styles.medium} ${
					sans ? styles.sans : ""
				}`}
			>
				{text}
			</h2>
		);
	}
	return <>{header}</>;
};

export default Header;
