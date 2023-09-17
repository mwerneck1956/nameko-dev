import { browser, dev } from '$app/environment';

export async function inject() {
	if (dev && browser) {
		const { worker } = await import('../mocks/worker');

		return worker.start({ onUnhandledRequest: 'bypass' }).catch(console.warn);
	}
	if (dev && !browser) {
		const { server } = await import('../mocks/server');

		return server.listen({ onUnhandledRequest: 'bypass' });
	}
}
