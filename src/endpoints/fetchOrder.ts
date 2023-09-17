import { PUBLIC_API_URL } from '$env/static/public';
import type { OrderResponse, Order } from './index';

export const fetchOrder = async (id: number): Promise<Array<Order>> => {
	try {
		const url = `${PUBLIC_API_URL}/orders/${id}`;
		const res = await fetch(url);

		const data: OrderResponse = await res.json();

		return data.order_details;
	} catch (err) {
		throw new Error(err);
	}
};
