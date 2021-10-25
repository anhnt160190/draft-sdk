# Draft SDK

Demo how to build up sdk With NodeJS

## Requirements

- NodeJS

## Installation

```bash
$ npm install hugo-sdk
# or
$ yarn add hugo-sdk
```

## Usage

```js
const HugoSdk = require('hugo-sdk');

const sdk = new HugoSdk.Sdk();

sdk.userService.getUsers().then(response => {
  if (response.isSuccess) {
    console.log("Receive Data", response.data);
  } else {
    console.log("Error Message: ", response.data.message);
    console.log("Error Code: ", response.data.errorCode);
  }
});
```

Or using ES modules and ```async/await```

```js
import { Sdk } from 'hugo-sdk';

const hugoSdk = new Sdk();

(async () => {
  const response = await hugoSdk.userService.getUsers();
  if (response.isSuccess) {
    console.log("Receive Data", response.data);
  } else {
    console.log("Error Message: ", response.data.message);
    console.log("Error Code: ", response.data.errorCode);
  }
})();
```
