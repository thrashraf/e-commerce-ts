import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';
import App from './App';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

document.addEventListener('DOMContentLoaded', async() => {
  
  const { publishableKey } = await axios.get('http://localhost:5000/api/v1/config').then(res => res.data)
  const stripePromise = loadStripe(publishableKey);
  
  ReactDOM.render(
    <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>,
  document.getElementById('root')
  );
  
})
