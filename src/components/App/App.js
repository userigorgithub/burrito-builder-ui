import React, { Component } from 'react';
import './App.css';
import {getOrders, postOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => this.setState({ orders: data.orders }))
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (newOrder) => {
    postOrders(newOrder)
      .then(data => this.setState({ orders: [...this.state.orders, data] }))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addingNewOrder={this.addOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}

export default App;
