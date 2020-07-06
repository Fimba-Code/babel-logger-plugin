# babel-logger-plugin 🔍

This [babel](https://babeljs.io/) plugins hacks into your functions by using `$log` key and adds a `console.log()` statement with your return value. Here is how:

```js
function sum(a, b) {
  $log;
  const result = a + b;

  return result;
}
add(2, 3);

   ↓ ↓ ↓ ↓ ↓ ↓
 
function sum(a, b) {
  const result = a + b;

  console.log("Final Result 😛 ==> ", result);

  return result;
}
add(2, 3);
```

## Installation
```shell
$ npm install @codefimba/babel-logger-plugin --save-dev
or
$ yarn add -D @codefimba/babel-logger-plugin
```

The solution requires you to have **babel** installed in your project.

## Usage
Via `.babelrc` or `babel-loader`.
```js
{
  plugins: ["@codefimba/babel-logger-plugin"]
}
```

## Contributing
Pull requests are most welcome!

## Authors
- [Faustino Kialungila](https://github.com/Fausto95) - Inital code - [@Fausto95_](https://twitter.com/Fausto95)
- [Bruno Kiafuka](https://github.com/brunokiafuka) - Inital code - [@bruno_kiafuka](https://twitter.com/bruno_kiafuka)

See also the list of [contributors](https://github.com/Fimba-Code/babel-logger-plugin/graphs/contributors) who participated in this project.

