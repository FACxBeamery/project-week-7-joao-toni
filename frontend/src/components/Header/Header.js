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

	const isCentered = `${centered && styles.centered}`;
	const isSans = `${sans && styles.sans}`;
	// if highlighted is true, it is a header that represents a day of the week
	// the header'stext can be Monday, Tuesday, Wednesday, ...
	const isHighlighted = `${highlighted && styles[text.toLowerCase()]}`;

	return (
		<HeaderTag
			className={`${styles[size]} ${isHighlighted} ${isSans} ${isCentered}`}
		>
			{text}
		</HeaderTag>
	);
};

export default Header;
