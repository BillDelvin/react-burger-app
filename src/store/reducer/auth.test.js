import reducer from './auth'
import * as actionsType from '../action/actionTypes'

describe('auth reducer', () => {
  it('should return inital state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: null,
      authRedirectPath: '/',
    })
  })
  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/',
        },
        {
          type: actionsType.AUTH_SUCCESS,
          idToken: 'some-token',
          userId: 'some-user_id',
        }
      )
    ).toEqual({
      token: 'some-token',
      userId: 'some-user_id',
      error: null,
      loading: false,
      authRedirectPath: '/',
    })
  })
})
