import React from "react";
import { AsyncStorage } from "react-native";
import { Buffer } from 'buffer';

const buildHeaders = async () => {
  let user  = JSON.parse(await AsyncStorage.getItem("getUser"))
  let token = null;
  if(user) {
    token = user.token
  }

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  }
  if(token) {
    headers = { ...headers, token };
  }
  return headers
}

const baseURL = 'https://api-frontendchallenge.buildstaging.com';

const checkStatus = (response) => {
  if(response.status >= 200 && response.status < 300) {
    return response;
  }
  else {
    let error = new Error(response.statusText);
    error.response = response;
    console.log(error, 'ERRORRR')
    throw error;
  }
}
const parseJSON = response => response.json()

export const fetcher = {
  put: async (url, data) => {
    let headers = await buildHeaders();
    return await fetch(baseURL + url, {
      method: 'PUT',
      headers,
      body: data
    }).then(checkStatus).then(parseJSON)
  },
  get: async (url) => {
    let headers = await buildHeaders();
    return fetch(baseURL + url, {
      method: 'GET',
      headers
   }).then(checkStatus).then(parseJSON)
  },
  post: async (url, data) => {
    let headers = await buildHeaders();
     return await fetch(baseURL + url, {
      method: 'POST',
      headers,
      body: Buffer.from(JSON.stringify(data))
   }).then(checkStatus).then(parseJSON)
  },
  delete: async (url) => {
    let headers = await buildHeaders();
    return fetch(baseURL + url, {
      method: 'DELETE',
      headers
   }).then(checkStatus).then(parseJSON)
  }
}
