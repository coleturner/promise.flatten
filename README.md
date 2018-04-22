# 🥞 promise.flatten
Resolves a promise with [response, error] instead of using a try/catch block

```sh
npm install promise.flatten
```

## How to use

```js
import promiseFlatten from 'promise.flatten';

const [response, error] = await promiseFlatten(fetch('https://google.com/'));
```

## Why?
With async and await now we can have our asynchronous code cake and eat it too. But as complexity grows we can still find ourselves in try/catch hell:

```js
  try {
    await workItHarder();
  } catch (e) {
    return await makeItBetter();
  }

  doIt.makeUs(['harder', 'better', 'faster', 'stronger']);

  try {
    await everAfterWork.isOver();
  } catch(e) {
    console.log('enough of this');
  }
```

We find ourselves with a lot of cruft. Maybe we're doing something clever and don't care about the error. Here's what this looks like:

```js
import promiseFlatten from 'promise.flatten';

const [response, error] = await promiseFlatten(fetch('https://google.com/'));

// Fun with errors
const [, error] = await promiseFlatten(fireAndForget());

// Fughettaboutit
const [response] = await promiseFlatten(feedMeResponses());
```