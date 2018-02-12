# testcase-superagent-multiple-cookies
Testcase illustrating a bug with multiple cookies in supertest with jest.

## demonstration

When run standalone, both superagent and supertest parse the two `set-cookie` headers into separate items in an array.
```bash
node request.js

supertest [ 'koa:sess=foo; path=/; httponly',
  'koa:sess.sig=E3XmR2LMmP11O418i_oXS61zGi0; path=/; httponly' ]
superagent [ 'koa:sess=foo; path=/; httponly',
  'koa:sess.sig=E3XmR2LMmP11O418i_oXS61zGi0; path=/; httponly' ]
```

When run in the context of jest, supertest behaves differently, combining the two `set-cookie` headers.
```bash
npm test

superagent [ 'koa:sess=foo; path=/; httponly',
  'koa:sess.sig=E3XmR2LMmP11O418i_oXS61zGi0; path=/; httponly' ]
supertest [ 'koa:sess=foo; path=/; httponly,koa:sess.sig=E3XmR2LMmP11O418i_oXS61zGi0; path=/; httponly' ]
```
