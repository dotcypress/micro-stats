const Client = require('statsy')

function track (options, handler) {
  if (!handler) {
    handler = options
    options = {
      prefix: process.env.STATSD_PREFIX,
      host: process.env.STATSD_HOST,
      port: process.env.STATSD_PORT
    }
  }
  const stats = new Client(options)
  return (req, res) => {
    stats.incr('request')
    stats.incr(`request.${req.method}`)
    stats.set('request.addresses', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
    const end = stats.timer('request')
    res.on('finish', () => {
      if (res.statusCode >= 500) {
        stats.incr('request.error')
      }
      end()
    })
    return handler(req, res)
  }
}

module.exports = track
