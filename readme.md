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
  
  console.log('Final Result 😛 ==> ', result)
  
  return result;
}
add(2, 3);
```



### Todo 📕
- [ ] Improve Docs

### Roadmap 🛣
- [ ]  Publish to NPM



