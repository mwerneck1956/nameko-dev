import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:3000/orders/1', (req, res, ctx) => {
		return res(
			ctx.json({
				id: 1,
				order_details: [
					{
						id: 1,
						quantity: 1,
						product_id: 'the_odyssey',
						image: 'http://www.example.com/airship/images/the_odyssey.jpg',
						price: '100000.99',
						product: {
							maximum_speed: 5,
							id: 'the_odyssey',
							title: 'The Odyssey',
							passenger_capacity: 101,
							in_stock: 9
						}
					}
				]
			})
		);
	})
];
