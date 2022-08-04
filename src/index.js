import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage.jsx';
import RegisterPage from './containers/RegisterPage.jsx';


import ProtectedComponent from './components/ProtectedComponent';
import ProtectedComponentLogged from './components/ProtectedComponentLogged';
import DetailPage from './containers/DetailPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element= {<App/> } />
        <Route path='movies/:id' element= {
          <ProtectedComponent>
            <DetailPage/>
          </ProtectedComponent>
        } 
          />
        <Route path='login' element={
          <ProtectedComponentLogged site={'/'}>
            <LoginPage/>
          </ProtectedComponentLogged>
        } />
        <Route path='register' element={<RegisterPage/>} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
