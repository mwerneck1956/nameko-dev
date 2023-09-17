import { PUBLIC_API_URL } from '$env/static/public';

export const fetchOrder = async (id: number) => {
	try {
		const url = `${PUBLIC_API_URL}/orders/${id}`;
		const res = await fetch(url);

		const data = await res.json();

		return data;
	} catch (err) {
		return {
			message: err.message,
			status: err.status || 500
		};
	}
};
