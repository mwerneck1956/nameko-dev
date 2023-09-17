import { writable } from 'svelte/store';
import { fetchOrder } from '../endpoints/fetchOrder';
import type { Order } from '../endpoints/index';

export const order = writable<Order>({} as Order);
export const loading = writable(true);
export const error = writable(false);

const fetchOrderData = async () => {
	try {
		const res = await fetchOrder(1);
		order.set(res[0]);
		error.set(false);
	} catch (err) {
		error.set(true);
	} finally {
		loading.set(false);
	}
};

fetchOrderData();
