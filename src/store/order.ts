import { writable } from 'svelte/store';
import { fetchOrder } from '../endpoints/fetchOrder';
import type { Order } from '../endpoints/index';

export const order = writable<Order>({} as Order);
export const loading = writable(true);
export const error = writable(false);

export const fetchOrderData = async () => {
	try {
		loading.set(true);
		error.set(false);

		const res = await fetchOrder(1);
		order.set(res[0]);
	} catch (err) {
		error.set(true);
	} finally {
		loading.set(false);
	}
};
