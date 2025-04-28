# ESM extension sample

This extension sample uses the newly added support for ESM extension. 

**AT THE TIME THIS IS ONLY SUPPORTED FOR NODEJS EXTENSIONS**


This the rough outline of changes to enable ESM extensions

* declare `"type": "module"` in `package.json`, alternatively use the `.mjs` ending for the `main`
* only use ESM imports, like `import('./my_module`) and `import('vscode')`
* for testing see the ESM-annotated lines in `test/suite/index.js` and use "Debug > Extension Tests" or use `npm run test`

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
