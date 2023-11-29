import React from 'react';
import { useNavigate } from 'react-router-dom';
import Example from './Example';

const Rout = () =>{
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/example');
    };
const book = `
Жизненный цикл классовых компонентов:
Mounting (Монтирование):
constructor(): Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.
render(): Отрисовывает компонент и возвращает React элементы.
componentDidMount(): Вызывается после рендеринга компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.
ПРИМЕР 🧐​
class MyComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
    this.increment = this.increment.bind(this)
  }

  increment () {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount () {
    // Здесь можно выполнять запросы к серверу.
    console.log('Компонент был смонтирован!')
  }

  render () {
    return (
      <div>
        <p>Количество: {this.state.count}</p>
        <button onClick={this.increment}>+++</button>
      </div>
    )
  }
}
​
Updating (Обновление):
shouldComponentUpdate(nextProps, nextState): Вызывается перед обновлением компонента. Используется для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.
render(): Отрисовывает компонент и возвращает React элементы.
componentDidUpdate(prevProps, prevState): Вызывается после обновления компонента и его рендеринга. Используется для выполнения дополнительных действий после обновления компонента, например, для выполнения запросов к серверу на основе новых пропсов.
ПРИМЕР 🧐​
class MyComponent extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    // В этом примере компонент будет обновляться только при изменении свойства name.
    return nextProps.name !== this.props.name
  }

  componentDidUpdate (prevProps, prevState) {
    // Здесь можно выполнять действия после обновления компонента.
    console.log('Компонент был обновлен!')
  }

  render () {
    return <div>Hello, {this.props.name}!</div>
  }
}
​
Unmounting (Размонтирование):
componentWillUnmount(): Вызывается перед удалением компонента из DOM. Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
ПРИМЕР 🧐​
import React from 'react'

class WillUnmountExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount () {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
    alert('Компонент удален из DOM')
  }

  render () {
    return (
      <div>
        <p>Время: {this.state.time} секунд</p>
      </div>
    )
  }
}

export default WillUnmountExample
​
Error Handling (Обработка ошибок):
componentDidCatch(error, info): Вызывается при возникновении ошибки в дочерних компонентах. Используется для отлавливания и обработки ошибок.
ПРИМЕР 🧐​
import React, { Component } from 'react';

class ErrorBoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Что-то пошло не так.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>Дополнительная информация: {this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Пример использования ErrorBoundary</h1>
        <ErrorBoundaryExample>
          {/* Твой компонент с возможной ошибкой */}
          <ComponentWithError />
        </ErrorBoundaryExample>
      </div>
    );
  }
}

const ComponentWithError = () => {
  const [throwError, setThrowError] = useState(false)

  const handleClick = () => setThrowError(presState => !presState.throwError)

  if (throwError) {
    // Имитация ошибки
    throw new Error('Это ошибка в компоненте ComponentWithError')
  }

  return (
    <div>
      <h3>Компонент с возможной ошибкой</h3>
      <button onClick={() => handleClick()}>Генерировать ошибку</button>
    </div>
  )
}

export default App;`
return(
    <div>
      <button onClick={handleClick}>Перейти к странице с примерами функциональный</button>
        <pre>
            <code>
                {book}
            </code>
        </pre>
        
    </div>
)
}

export default Rout