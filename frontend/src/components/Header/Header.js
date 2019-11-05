import React from "react";
import styles from "./Header.module.css";

const Header = ({
	size = "medium",
	text,
	sans = false,
	highlighted = false,
	centered = false
}) => {
	const headerIsLarge = size === "large";
	const HeaderTag = headerIsLarge ? "h1" : "h2";

	return (
		<HeaderTag
			className={`${styles[size]} ${highlighted &&
				styles[text.toLowerCase()]} ${sans && styles.sans} ${centered &&
				styles.centered}`}
		>
			{text}
		</HeaderTag>
	);
};

export default Header;
