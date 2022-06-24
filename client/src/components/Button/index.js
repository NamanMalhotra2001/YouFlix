export default function Button() {
	const handleClick = (event) => {
		// 👇️ toggle styles on click
		if (event.currentTarget.style.backgroundColor) {
			event.currentTarget.style.backgroundColor = null;
			event.currentTarget.style.color = null;
		} else {
			event.currentTarget.style.backgroundColor = 'salmon';
			event.currentTarget.style.color = 'white';
		}

		// 👇️ toggle class on click
		event.currentTarget.classList.toggle('my-class-1', 'my-class-2');
	};

	return (
		<div>
			<button onClick={handleClick}>Click</button>
		</div>
	);
}
