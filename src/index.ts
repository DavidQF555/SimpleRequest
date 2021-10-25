import https from 'https';

async function get(url: https.RequestOptions | string | URL): Promise<string> {
	return new Promise((resolve: Function, reject: Function) => {
		https.get(url, res => {
			res.setEncoding('utf-8');
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