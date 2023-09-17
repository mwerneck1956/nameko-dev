// import { PUBLIC_API_URL } from '$env/static/public';
import type { Order } from './index';

export const fetchOrder = async (id: number): Promise<Array<Order>> => {
	try {
		const url = `http://localhost:3000/orders/${id}`;
		const res = await fetch(url);

		const data: Array<Order> = await res.json();

		return data;
	} catch (err) {
		throw new Error(err);
	}
};
