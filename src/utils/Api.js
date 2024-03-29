class Api {
 constructor({ baseUrl, headers }) {
  this._baseUrl = baseUrl;
  this._headers = headers;
 }
 _processServerResponse(res) {
  if (res.ok) {
   return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
 }

 getInitialCards() {
  return fetch(`${this._baseUrl}/cards`, {
   headers: this._headers,
  }).then(this._processServerResponse);
 }
 getUserInfo() {
  return fetch(`${this._baseUrl}/users/me`, {
   headers: this._headers,
  }).then(this._processServerResponse);
 }
 setUserInfo({ name, about }) {
  return fetch(`${this._baseUrl}/users/me`, {
   headers: this._headers,
   method: "PATCH",
   body: JSON.stringify({
    name: name,
    about: about,
   }),
  }).then(this._processServerResponse);
 }
 createCard(data) {
  return fetch(`${this._baseUrl}/cards`, {
   headers: this._headers,
   method: "POST",
   body: JSON.stringify(data),
  }).then(this._processServerResponse);
 }
 deleteCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
   headers: this._headers,
   method: "DELETE",
  }).then(this._processServerResponse);
 }
 likeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
   headers: this._headers,
   method: "PUT",
  }).then(this._processServerResponse);
 }

 dislikeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
   headers: this._headers,
   method: "DELETE",
  }).then(this._processServerResponse);
 }
 setUserAvatar(url) {
  return fetch(`${this._baseUrl}/users/me/avatar`, {
   headers: this._headers,
   method: "PATCH",
   body: JSON.stringify({
    avatar: url,
   }),
  }).then(this._processServerResponse);
 }

 // other methods for working with the API
}

export const api = new Api({
 baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en", //cohort-3-en
 headers: {
  authorization: "f0c06eb5-f66f-4f1d-b700-3920553239f3",
  "Content-Type": "application/json",
 },
});
