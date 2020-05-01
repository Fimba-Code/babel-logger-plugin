### Babel Plugin 🔀

Playing with Babel Plugins and trying to hackly replace the key `$log` with an actual `console.log` statement.

Pair programming with: [Bruno Kiafuka](https://github.com/brunokiafuka)

It converts this:

```js
function add(a, b) {
  $log;
  const result = a + b;

  return result;
}
add(2, 3);
```

Into this:

```js
function add(a, b) {
  const result = a + b;

  console.log("Final Result 😛 ==> ", result);

  return result;
}
add(2, 3);
```

### Set up ⚙️

- Clone the repo
- Navigate into your folder directory. `cd babel-fimba-plugin`
- Run `yarn` to install dependencies
- Run `yarn build` to run the project

### Todo 📕

- [ ] Improve Docs
- [ ] Add code linters
- [ ] Write tests
- [ ] Write production ready version

### Roadmap 🛣

- [ ] Publish to NPM

### Useful links

- [Babel Handbook](https://github.com/jamiebuilds/babel-handbook)
- [Abstract Syntax Trees (AST)](https://ruslanspivak.com/lsbasi-part7/)
- [babel-plugin-macros-example](https://github.com/kentcdodds/babel-plugin-macros-example)
- [AST Explorer](https://astexplorer.net/)
