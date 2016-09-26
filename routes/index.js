'use strict'

const config = require('../config')
const handlers = require('../handlers')

module.exports = [
  {
    method: 'POST',
    path: '/unoconv/{format}',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: parseInt(config.PAYLOAD_MAX_SIZE, 10)
      },
      handler: handlers.handleUpload
    }
  },
  {
    method: 'GET',
    path: '/unoconv/formats',
    config: {
      handler: handlers.showFormats
    }
  },
  {
    method: 'GET',
    path: '/unoconv/formats/{type}',
    config: {
      handler: handlers.showFormat
    }
  }
]
