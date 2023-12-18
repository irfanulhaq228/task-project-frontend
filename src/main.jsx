import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from '../Store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ToastContainer />
      <Provider store={store}><App /></Provider>
    </BrowserRouter>
)
