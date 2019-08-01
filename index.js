import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyDocument from './MyDocument'
import {PDFViewer} from '@react-pdf/renderer';


const ReactPdf = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
