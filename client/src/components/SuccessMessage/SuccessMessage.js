import React from "react"

import styles from "./SuccessMessage.module.css"

const SuccessMessage = ({message, emojiNotifier, emoji}) => {
    return (
        <p className={styles.message}>
				{message}
				<span role="img" aria-label={emojiNotifier}>
					{emoji}
				</span>
			</p>
    )
}
export default SuccessMessage;