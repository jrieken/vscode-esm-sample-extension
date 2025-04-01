import { resolve } from 'path';
import Mocha from 'mocha';
import glob from 'glob';
import { fileURLToPath } from 'url';



export function run() {
	// Create the mocha test
	const mocha = new Mocha({
		ui: 'tdd',
		color: true
	});

	// ESM - enable async file loading
	mocha.lazyLoadFiles(true);

	// ESM use import.meta and URL-math insead of __dirname
	const testsRoot = fileURLToPath(new URL('..', import.meta.url));

	return new Promise((c, e) => {
		glob('**/**.test.js', { cwd: testsRoot }, (err, files) => {
			if (err) {
				return e(err);
			}

			// Add files to the test suite
			files.forEach(f => mocha.addFile(resolve(testsRoot, f)));

			try {

				// ESM - kick off async file loading
				mocha.loadFilesAsync().then(() => {
					mocha.run(failures => {
						if (failures > 0) {
							e(new Error(`${failures} tests failed.`));
						} else {
							c();
						}
					});
				}).catch(e);

				// Run the mocha test
			} catch (err) {
				console.error(err);
				e(err);
			}
		});
	});
}

