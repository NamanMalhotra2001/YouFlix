import { useState } from 'react';

export default function Button() {
	const [isActive, setIsActive] = useState(false);

	const handleMouseDown = () => {
		setIsActive((current) => !current);
	};

	const handleMouseUp = () => {
		setIsActive((current) => !current);
	};

	return (
		<div>
			<button
				style={isActive ? styles.active : styles.inactive}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				Click
			</button>
		</div>
	);
}



const styles = {
	active: {
		backgroundColor: 'red',
	},
	inactive: {
		backgroundColor: 'gray',
	},
};
