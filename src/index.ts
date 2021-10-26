import { get as http_get, RequestOptions } from 'https';

export async function get(url: RequestOptions | string | URL): Promise<any> {
	return new Promise((resolve: Function, reject: Function) => {
		http_get(url, res => {
			res.setEncoding('utf-8');
			let body = '';
			res.on('data', data => {
				body += data;
			});
			res.on('end', () => {
				resolve(JSON.parse(body));
			});

		}).on('error', error => {
			reject(error);
		});
	},
	);
}