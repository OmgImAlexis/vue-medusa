# vue-medusa
A small wrapper for integrating [Medusa](https://github.com/omgimalexis/medusa-lib) to Vuejs

## How to install:
### CommonJS:
```console
$ yarn add medusa-lib vue-medusa
```

And in your entry file:
```js
import Vue from 'vue';
import Medusa from 'medusa-lib';
import VueMedusa from 'vue-medusa';

Vue.use(VueMedusa, new Medusa({
  url: 'http://localhost:8081/'
}));
```

### Script:
Just add 3 scripts in order: `vue`, `medusa` and `vue-medusa` to your `document`.

## Usage:
This wrapper will bind `medusa` to `Vue` or `this` if you're using single file component.

You can `medusa` like this:
```js
Vue.medusa.auth({
  username: 'OmgImAlexis',
  password: 'secret!123'
}).then(res => {
  console.log(res.body);
});

this.medusa.auth({
  username: 'OmgImAlexis',
  password: 'secret!123'
}).then(res => {
  console.log(res.body);
});```
