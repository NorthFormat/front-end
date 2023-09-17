import React, { Component } from 'react';
import TextField from '../components/TextField';
import ResultField from '../components/ResultField';
import InputSelector from '../components/InputSelector';
import Filter from '../components/Filter';
//import '../css/css-reset.css'
import '../css/dark-theme.css';


function FormatterPage() {
  return (
    <div className='split-container'>
      <div className='half'>
        <TextField />
        <InputSelector />
        <Filter />
      </div>

      <div className='half'>
        <ResultField />
      </div>
    </div>
  );
}

export default FormatterPage;