import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './ui/contexts/UserContext';
import './index.css';
import ReposProvider from './ui/contexts/ReposContext';
import FollowersProvider from './ui/contexts/FollowersContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ReposProvider>
        <FollowersProvider>
          <App />
        </FollowersProvider>
      </ReposProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

