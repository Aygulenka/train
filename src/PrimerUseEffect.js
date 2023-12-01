// useEffect controlled component fragment

import React, { useState, useEffect, Fragment } from 'react';

const PrimerUseEffect = () => {
    // controlled компонента-компонент зн-е кот контролируеся заданным состоянием(state)
    const [inputValue, setInputValue] = useState(''); 
  
    // useEffect для componentDidMount     // useEffect для componentWillUnmount
    useEffect(() => {
      console.log('Компонент отмонтирован');
      return () => {
        console.log('Компонент размонтирован');
      };
    }, []);
  
    // useEffect для componentDidUpdate (при изменении inputValue)
    useEffect(() => {
      console.log('Значение input обновлено:', inputValue);
    }, [inputValue]);
  

    useEffect(() => {
      return () => {
        console.log('Компонент обновлен');
      };
    });
  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }
    return (
      <Fragment>
        <p>Controlled компонент со значением по умолчанию:</p>
        <input
          type="text"
          value={inputValue}
          // событие onChange передаем функцию 
           onChange={(event) => setInputValue(event.target.value)}
           //либо onChange = {handleChange} 
          
        />
      </Fragment>
    );
  }

export default PrimerUseEffect;
