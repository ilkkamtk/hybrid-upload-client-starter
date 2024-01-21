import {fetchData} from './functions';

// select forms from the DOM
const loginForm = document.querySelector('#login-form');
const fileForm = document.querySelector('#file-form');

// select inputs from the DOM
const usernameInput = document.querySelector('#username') as HTMLInputElement;
const passwordInput = document.querySelector('#password') as HTMLInputElement;

const profileUsernameInput = document.querySelector(
  '#profile-username'
) as HTMLInputElement;
const profileEmailInput = document.querySelector(
  '#profile-email'
) as HTMLInputElement;

// select profile elements from the DOM
const usernameTarget = document.querySelector('#username-target');
const emailTarget = document.querySelector('#email-target');

// TODO: function to login
const login = async (): Promise<LoginUser> => {};

// TODO: function to add userdata (email, username and avatar image) to the
// Profile DOM and Edit Profile Form
const addUserDataToDom = (user: User): void => {};

// function to get userdata from API using token
const getUserData = async (token: string): Promise<User> => {};

// TODO: function to check local storage for token and if it exists fetch
// userdata with getUserData then update the DOM with addUserDataToDom
const checkToken = async (): Promise<void> => {};

// call checkToken on page load to check if token exists and update the DOM
checkToken();

// TODO: login form event listener
// event listener should call login function and save token to local storage
// then call addUserDataToDom to update the DOM with the user data

// TODO: profile form event listener
// event listener should call updateUserData function and update the DOM with
// the user data by calling addUserDataToDom or checkToken

// TODO: avatar form event listener
// event listener should call uploadAvatar function and update the DOM with
// the user data by calling addUserDataToDom or checkToken
