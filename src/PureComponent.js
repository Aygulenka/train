import React, { PureComponent } from 'react';

class ChildComponent extends PureComponent {
  render() {
    const isEven = this.props.value % 5 === 0;

    // Рендерить только если value делится на 2 без остатка
    if (!isEven) {
        <p>я не рендерился</p>
      console.log('ChildComponent skipped render');
      return (<p>я не рендерился</p>); // или что-то другое, что не будет отображаться
    }

    console.log('ChildComponent render');
    return <div><p> я рендерился</p> {this.props.value}</div>;
  }
}

class PureExampleComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('ParentComponent(PureExampleComponent) render');
    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.handleClick}>Increment</button>
        <ChildComponent value={this.state.count} />
        <p>при каждом клике на кнопку увеличения ParentComponent будет перерисовываться (вывод в консоль 'ParentComponent render'), и ChildComponent будет перерисовываться только при изменении value и если value делится на 5 без остатка. Это демонстрирует автоматическую проверку изменений, предоставляемую PureComponent.</p>
      </div>
    );
  }
}

export default PureExampleComponent;
