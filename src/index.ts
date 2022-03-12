import { get as http_get, RequestOptions } from 'https';

export async function get(url: RequestOptions | string | URL, encoding: BufferEncoding): Promise<string> {
	return new Promise((resolve: Function, reject: Function) => {
		http_get(url, res => {
			res.setEncoding(encoding);
			let body = '';
			res.on('data', data => {
				body += data;
			});
			res.on('end', () => {
				resolve(body);
			});

		}).on('error', error => {
			reject(error);
		});
	},
	);
}