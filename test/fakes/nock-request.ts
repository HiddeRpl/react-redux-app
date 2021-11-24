import * as nock from 'nock'

export const nockRequest = (clean?: boolean, options?: nock.Options): nock.Scope => {
  if (clean) {
    nock.cleanAll()
  }
  return nock('http://localhost', options)
}
