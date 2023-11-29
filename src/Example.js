import React, {useState, useEffect} from 'react';

const Example = () =>{
const [state, setState] = useState(0)

const incr = () =>{
setState(state+1)
}

const [count, setCount] = useState(0);
// яркий пример использования useEffect. в класс это был бы 

//     componentDidUpdate(prevProps, prevState) {
//       if (prevState.count !== this.state.count) {
//         console.log('Count has been updated:', this.state.count);
//       }
//     }
  
//     increment = () => {
//       this.setState((prevState) => ({ count: prevState.count + 1 }));
//     };

useEffect(() => {
  console.log('Count has been updated:', count);
}, [count]);
// ф-я обратного вызова, кот вызывает пред состояние(count) и увелич его
const increment = () => {
  setCount(prevCount => prevCount + 1);
};

return(
    <div>
<p>Count: {state}</p>

{/* чтобы кнопка сработала, мы должны задать ей, 
на что реагировать. в данном случае это клик(событие).
в фигурных скобках указываем, как назыв функция, вызываемая при клике */}
<button onClick={incr}>+1</button>
<p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
)
}

export default Example;