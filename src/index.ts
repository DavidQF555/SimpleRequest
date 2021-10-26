import https from 'https';

export async function get(url: https.RequestOptions | string | URL): Promise<any> {
	return new Promise((resolve: Function, reject: Function) => {
		https.get(url, res => {
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