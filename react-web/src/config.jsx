const config = {
  AWS_REGION: 'us-west-2',
  AWS_COGNITO_IDENTITY_POOL_ID: 'SETME',
  AWS_COGNITO_USER_POOL_ID: 'us-west-2_PISHww7U1',
  AWS_COGNITO_CLIENT_ID: '7a17ijjfbpt5ljsia9p51jsitr',
  AWS_COGNITO_CLIENT_DOMAIN_NAME: 'fdevetel.auth.us-west-2.amazoncognito.com',
  AWS_COGNITO_IDP_NAME: 'FDevetelProvider',
  AWS_COGNITO_IDP_SIGNIN_URL: 'http://localhost:3000/redirect', // must match cognito setting
  AWS_COGNITO_IDP_SIGNOUT_URL: 'http://localhost:3000', // must match cognito setting
  AWS_COGNITO_IDP_OAUTH_CLAIMS: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  AWS_COGNITO_IDP_GRANT_FLOW: 'code' // 'code' or 'token'
};
export default config;
