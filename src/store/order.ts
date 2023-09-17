import { writable } from 'svelte/store';
import { fetchOrder } from '../endpoints/fetchOrder';

export const order = writable({});
export const loading = writable(true);

const fetchOrderData = async () => {
	const res = await fetchOrder(1);

	console.log('res', res);

	order.set(res);
	loading.set(false);
};

fetchOrderData();
