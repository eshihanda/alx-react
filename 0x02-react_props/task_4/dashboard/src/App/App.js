import React, { Fragment } from 'react';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import "./App.css";

function App({ isLoggedIn }) {
  return (
    <Fragment>
      <Notifications />
      <div className='App-container'>
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          {!isLoggedIn ? <Login /> : <CourseList />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;