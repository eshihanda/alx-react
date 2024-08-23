import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

export function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <li data-priority='default'> New course available </li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}>
        </li>
      </ul>
      <button className="close-button" onClick={handleClick} aria-label="close">
        <img src={closeIcon} alt="Close" style={{height:'10px', width: '10px', padding:'10px'}} />
      </button>
    </div>
  );
}