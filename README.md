# replauth-component

An extremely **simple** and **beautiful** ReplAuth Button to drop into React. Comes with
prebuild light and dark theme styles you can toggle easily.

## Installation
Install it from npm and include it in your project!
```sh
npm install --save replauth-component
```

or:
```sh
yarn add --save replauth-component
```

## Usage
Drop the component into your React project!

```js
const customCallback = () => {
	window.reload();
}

class App extends React.Component {
  render() {
    return (
      <ReplAuthButton 
        theme="" { /* default: "dark" */ }
        message="" { /* default: "Auth with Replit" */ }
        callback={customCallback} { /* default: none */ }
      />
    )
  }
}
```

See the demo [here](https://ReplAuth-React-Component.rayhanadev.repl.co). (It may take time to load, be patient for me :D)