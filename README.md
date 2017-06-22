# gitignore-clean

Cleans the files listed in your .gitignore

Please &#9733; this repo if you found it useful &#9733; &#9733; &#9733;


## Features

* Choose files to ignore


## Installation

```sh
npm install --save gitignore-clean
```


## Dependencies

* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)


## Usage

Assume you have the following .gitignore

```
node_modules/
dist/
index.js
```

The following will clean everything but `node_modules/`

```js
import gitignoreClean from 'gitignore-clean';
import projPath from 'proj-path';
import path from 'path';

export default async function clean() {
  await gitignoreClean(path.resolve(projPath(), '.gitignore'), [ 'node_modules/' ]);
}
```


## Support

Submit an [issue](https://github.com/jamrizzi/gitignore-clean/issues/new)


## Buy Me Coffee

A ridiculous amount of coffee was consumed in the process of building this project.

[Add some fuel](https://pay.jamrizzi.com) if you'd like to keep me going!


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## License

[MIT License](https://github.com/jamrizzi/gitignore-clean/blob/master/LICENSE)

[Jam Risser](https://jamrizzi.com) &copy; 2017


## Credits

* [Jam Risser](https://jamrizzi.com) - Author


## Changelog

0.0.1 (2017-06-21)
* Initial release
