export function loadCartState<T>(): T | undefined {
	try {
		const jsonState = localStorage.getItem('cart');
		if (!jsonState) {
			return undefined;
		}
		return JSON.parse(jsonState);
	} catch (e) {
		console.error(e);
		return undefined;
	}
}

export function saveCartState<T>(state: T) {
	const stringState = JSON.stringify(state);
	localStorage.setItem('cart', stringState);
}