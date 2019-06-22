# Sapper Environment

This module helps you manage env variables in your Sapper App. 

The code is really simple and you should be able to manage env variables on your own without this, see DIY section. 

So, use this directly or as a guide, just don't hard code your config variables :)

## Usage

This module looks for any env variable prefixed with ``SAPPER_APP_`` (configurable) and creates an object that you can use in the build process.

### 1. Install

```
npm install sapper-environment --save#or
yarn add sapper-environment 
```

### 2. Require

```javascript
const sapperEnv = require('sapper-environment');
```

### 3. Use at compile time

If using rollup template, add ``...sapperEnv()`` to the client replace plugin options.

```javascript
client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
        replace({
            ...sapperEnv(),
            'process.browser': true,
            'process.env.NODE_ENV': JSON.stringify(mode),
        }),
```
If using webpack template, add  ``...sapperEnv()`` to the webpack.DefinePlugin options.

```javascript
module.exports = {
	client: {
		//Omitted for readability...
		plugins: [
			// pending https://github.com/sveltejs/svelte/issues/2377
			// dev && new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
			    ...sapperEnv(),
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
```

### 4. Use env variables in Sapper!

Let's say you defined a env variable called ``SAPPER_APP_API_URL=http://localhost:3000/``.

Either from a ``.env`` file created at the root of your project with this content:

``` 
SAPPER_APP_API_URL=http://localhost:3000/
```

Or when running/building sapper:

``` 
SAPPER_APP_API_URL=http://localhost:3000/ npm run sapper dev
```

Or from your favorite IDE, from Netlify or really anywhere.

Then from any svelte component in your Sapper App:

```
console.log(process.env.SAPPER_APP_API_URL)
```

And you should see ``http://localhost:3000/`` in the console.
