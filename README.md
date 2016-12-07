[![NPM Version](https://img.shields.io/npm/v/micro-route.svg?style=flat-square)](https://www.npmjs.com/package/micro-stats)
[![node](https://img.shields.io/node/v/micro-stats.svg?style=flat-square)](https://www.npmjs.com/package/micro-stats)
[![Build Status](https://img.shields.io/travis/dotcypress/micro-stats.svg?branch=master&style=flat-square)](https://travis-ci.org/dotcypress/micro-stats)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

# micro-stats
>  📊 Tiny statsd helper

## Installation

Install from NPM:

```js
$ npm install micro-stats --save
```

## Examples

```js
const track = require('micro-stats')

module.exports = track(function (req, res) {
  req.end(200)
})

module.exports = track(options, function (req, res) {
  req.end(200)
})
```

### Options

* `host` - optional statsd host [process.env.STATSD_HOST]
* `port` - optional statsd port  [process.env.STATSD_PORT]
* `prefix` - optional statsd prefix ('.' is appended) [process.env.STATSD_PREFIX]
* `tcp` - use TCP instead of UDP
