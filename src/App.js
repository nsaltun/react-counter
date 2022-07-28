import { useState } from 'react';

export default function App() {
	const [counter, setCounter] = useState(0)

	const increaseCounter = () => {
		setCounter(counter + 1)
	}

	const decreaseCounter = () => {
		if (counter === 0) {
			return;
		}

		setCounter(counter - 1);
	}

	return (
		<div>
			<input readOnly value={counter} />
			<button onClick={increaseCounter}>+</button>
			<button onClick={decreaseCounter}>-</button>
		</div>);
}
