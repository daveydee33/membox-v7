// ** Core JWT Import
import useJwt from '@src/@core/auth/jwt/useJwt'

const { jwt } = useJwt({
  loginEndpoint: '/v1/auth/login',
  registerEndpoint: '/v1/auth/register',
  refreshEndpoint: '/v1/auth/refresh-tokens',
  logoutEndpoint: '/v1/auth/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
})

export default jwt
