export interface OrderResponse {
	order_details: Array<Order>;
}

export interface Order {
	id: number;
	quantity: number;
	product_id: string;
	image: string;
	price: string;
	product: {
		maximum_speed: number;
		id: string;
		title: string;
		passenger_capacity: 101;
		in_stock: number;
	};
}
