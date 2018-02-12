const superagent = require('superagent')
const supertest = require('supertest')

it('superagent: parses cookie to an array', () => {
  return superagent.post('http://localhost:8081/')
    .then((res) => {
      const cookie = res.header['set-cookie']
      console.log('superagent', cookie)
      expect(cookie.length).toBe(2)
    })
})

it('supertest: parses cookie to an array', () => {
  const server = require('./server')
  return supertest(server.callback())
    .post('/api/authenticate-test')
    .then((res) => {
      const cookie = res.header['set-cookie']
      console.log('supertest', cookie)
      expect(cookie.length).toBe(2)
    })
})
