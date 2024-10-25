import { createApi } from './index'

describe('axios', () => {
  it('should create an api', () => {
    const result = createApi('')
    expect(result).toBeDefined()
  })

  it('should have base url', () => {
    const result = createApi('http://localhost.com')
    expect(result.defaults.baseURL).toBe('http://localhost.com')
  })
})
