import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
import AuthConfig from './AuthConfig';

export const authContext = new AuthenticationContext(AuthConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, AuthConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, AuthConfig.endpoints.api);

export const getCachedToken = () => {
    return authContext.getCachedToken(AuthConfig.clientId);
  };
  
  // Example usage:
  //
  // const user = getCachedUser();
  // console.log('Display Name: ' + user.profile.name);
  // console.log('User Email: ' + user.userName);
  export const getCachedUser = () => {
    return authContext.getCachedUser();
  };
  
  export const acquireToken = (callback) => {
    authContext.acquireToken(AuthConfig.endpoints.api, callback);
  };
  export const LogOut = () => {
    this.authContext.logOut();
};

  