import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
  } from './uiActionTypes';

  export const login = (email, password) => {
	return {
		type: LOGIN,
		user: {email, password},
	};
  };
  export const logout = () => {
	return {
	  type: LOGOUT,
	};
  };

  export const displayNotificationDrawer = () => {
	return {
	  type: DISPLAY_NOTIFICATION_DRAWER,
	};
  };

  export const hideNotificationDrawer = () => {
	return {
	  type: HIDE_NOTIFICATION_DRAWER,
	};
  };


  export const loginFailure = () => {
	return {
		type: LOGIN_FAILURE,
	};
  };
  export const loginSuccess = () => {
	return {
		type: LOGIN_SUCCESS,
	};
  };

  export const loginRequest = (email, password) => {
	return (dispatch) => {
		fetch('/public/login_success.json')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		});
		.then((data) => {
			// Assuming your API response has a structure that indicates success or failure
			if (data.email === email && data.password === password) {
			  dispatch(loginSuccess());
			} else {
			  dispatch(loginFailure());
			}
		  })
		  .catch((error) => {
			console.error('There was an error with the login request:', error);
			dispatch(loginFailure());
		  });
	};
  };


