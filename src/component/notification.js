import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BiCheckCircle } from "react-icons/bi";
    import { faCheck, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';

const NotificationItem = ({ notification }) => {
  return (
    <div className="notification-item">
  <img src={notification.image} alt={notification.name} className="notification-image" />
  <div className="notification-message-container">
    <p className="notification-message">{notification.message}
    <br/>
    </p>
    <div className="notification-buttons-container">
   <div className='btx'>
    <button className="accept-btn">Accept</button>
<button className="reject-btn">Reject</button></div>

    </div>
    <p className="notification-time">{notification.time}</p>
  </div>
</div>

  );
};

const NotificationDropdown = ({ selectedOption, options, onSelectOption }) => {
  return (
    <div className="notification-dropdown">
      {options.map((option) => (
        <button
          key={option}
          className={selectedOption === option ? 'active' : ''}
          onClick={() => onSelectOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

const NotificationHeader = ({ options, selectedOption, onSelectOption, onMarkAllRead }) => {
  return (
    <div className="notification-header">
         <div>Notifications </div>
  <div className="dropdown" >
  <select  > 
      <option  value="all">All</option>
      <option value="unread">Unread</option>
      <option value="unseen">Unseen</option>
    </select>
  </div>
  <div style={{cursor:'pointer'}} className="mark-all">
    <span>Mark all as read</span>
    <BiCheckCircle style={{marginLeft:'auto',fontSize:'1.3em', color:'#091E42', marginRight:'auto'}} icon={faCheck} className="ml-5" />
  </div>
</div>

  );
};

const NotificationList = ({ notifications }) => {
  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

const Notification = () => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/id/238/200/300',
      message: 'Josiah Chukuma has just added you to Atlantic Hall School Project.',
               
      time: 'Today at 6:05AM'

      
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/238/200/300',
      message: 'Josiah Chukuma has just added you to Atlantic Hall School Project.',
      time: 'Yesterday at 11:42 PM',
    },
    {
        id: 3,
        image: 'https://picsum.photos/id/238/200/300',
        message: 'Josiah Chukuma has just added you to Atlantic Hall School Project.',
        time: 'Yesterday at 11:42 PM',
      }
    // {
    //   id: 3,
    //   image: 'https://picsum.photos/id/239/200/300',
    //   message: 'John Hammond created Isla Nublar SOC2 compliance report',
    //   time: 'Last Wednesday at 11:15 AM',
    // },
  ]);

  const options = ['All', 'Unread', 'Unseen'];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleMarkAllRead = () => {
    // mark all notifications as read
  };

  return (
    <div className='notification-card'>
    <div className="notification-container">
      <NotificationHeader
        options={options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
        onMarkAllRead={handleMarkAllRead}
      />
      <NotificationList notifications={notifications} />
    </div>
    </div>
  );
};

export default Notification;
