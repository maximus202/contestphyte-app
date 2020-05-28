import React from 'react';
import TokenService from '../../services/token-service';
import LoggedIn from '../LoggedIn/LoggedIn';
import LoggedOut from '../LoggedOut/LoggedOut';

function Menu() {
  return (
    <>
      {TokenService.hasAuthToken()
        ? <LoggedIn />
        : <LoggedOut />}
    </>
  );
}

export default Menu;
