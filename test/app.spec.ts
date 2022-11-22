import request from 'supertest'
import httpStatus from 'http-status'

import app from '../src/index'

describe('GET', () => {
  it('should return 200 OK', () => {
    return request(app).get('/').expect(httpStatus.OK)
  })
})
