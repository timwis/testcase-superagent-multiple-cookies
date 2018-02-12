const assert = require('assert')
const superagent = require('superagent')
const supertest = require('supertest')

superagent.post('http://localhost:8081/')
  .then((res) => {
    const cookie = res.header['set-cookie']
    console.log('superagent', cookie)
    assert(cookie.length, 2, 'superagent: length is not 2')
  })

const server = require('./server')
supertest(server.callback())
  .post('/api/authenticate-test')
  .then((res) => {
    const cookie = res.header['set-cookie']
    console.log('supertest', cookie)
    assert(cookie.length, 2, 'supertest: length is not 2')
  })
