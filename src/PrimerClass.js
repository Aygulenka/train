import React,{Component} from "react";

class PrimerClass extends React.Component{
        constructor(props){
        super(props)
        this.state = {count: 0}
        this.increment = this.increment.bind(this)
    }
    increment() {
        this.setState({count: this.state.count +1})
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
         // подписка на события, инициализация и т.д.
         window.addEventListener('mousemove', this.handleMouseMove);
    }
    handleResize() {
        console.log('Изменился размер окна');
      }

      //указываем значения nextProps, nextState
      shouldComponentUpdate(nextProps, nextState){
        // прописываем условия. важно правильно прописать чего мы хотим и обязательно вернут булиан
         if(nextState.count % 3 ===0){
            console.log("я обновлен, потому что count делится на 3 без остатка")
            return true;
        } return false;
      }
      componentWillUnmount() {
        // отписка от событий и другие операции перед удалением компонента
        window.removeEventListener('mousemove', this.handleMouseMove);
      }
    
      handleMouseMove = (event) => {
        // обработка события
        console.log(`Курсор двигается по координатам X: ${event.clientX}, Y: ${event.clientY}`);
      };
    render(){
        return(
            <div>
 <p>Пример классового компонента с использованием componentDidMount()
    При изменении размера окна в консоле будет сообщение
 </p>
 <p>Пример классового компонента с использованием shouldComponentUpdate(nextProps, nextState)</p>
 <p>Count: {this.state.count}</p>
 <button onClick={this.increment}>Увеличить </button>
 <p>Пример компонента с использованием componentWillUnmount()</p>
            </div>
        )
    }
}
export default PrimerClass;