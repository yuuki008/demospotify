import base64 from 'react-native-base64';

export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "1af29c9dc26d45e6998a84aaa1f5664e"
export const clientsecret = "362701aaa8b94bf6b573763d2bcfc92e";
export const redirectUri = "http://localhost:3000/";
export const scopes = 'user-read-private user-read-email';
export const basic_authorization = base64.encode(clientId+":"+clientsecret)
//この場所は何を書けばいいのかわからない