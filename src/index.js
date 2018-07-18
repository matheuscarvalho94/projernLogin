import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import MainNavigator from './navigation/routes';
import './config/ReactotronConfig';

import store from './store';
export let navigatorRef;


class App extends Component {

  constructor(props) {
    super(props);

  }
  componentDidMount() {
    navigatorRef = this.navigatorRef;
  }
  render() {
    return (<Provider store={store}>
      <MainNavigator ref={nav => { this.navigatorRef = nav; } }/>
    </Provider>)
  }
}

export default App;
