import { greeting } from './module01.mjs';

console.log('index.js loaded');

const API_BASE_URL = 'https://api.noroff.dev/api/v1';

async function registerUser (url, userData) {
  try{
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);
    } catch (err) {
      console.log(err);
    }
}

const userToRegister = {
  name: 'John_Doe_one',
  email: 'John_Doe_one@noroff.no',
  password: 'Doe12345',
};

const registerURL = `${API_BASE_URL}/social/auth/register`;

registerUser(registerURL, userToRegister);