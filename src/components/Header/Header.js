import React from "react";
import styles from "./Header.module.css";

const Header = ({
	size = "medium",
	text,
	sans = false,
	highlighted = "no"
}) => {
	let header;

	if (size === "large") {
		header = (
			<h1
				className={`${styles.large} ${
					highlighted === "yes" ? styles[text.toLowerCase()] : ""
				}`}
			>
				{text}
			</h1>
		);
	} else if (size === "medium") {
		header = (
			<h2
				className={`${styles.medium} ${sans ? styles.sans : ""} ${
					highlighted === "yes" ? styles[text.toLowerCase()] : ""
				}`}
			>
				{text}
			</h2>
		);
	}
	return <>{header}</>;
};

export default Header;
