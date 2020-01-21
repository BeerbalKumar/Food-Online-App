import React from 'react';
import BasicRouter from './config/router/router'
import {Provider} from 'react-redux'
import store from './Store'

class App extends React.Component{
  render(){
    return(
      <div>
        <Provider store={store}>
        <BasicRouter/>
        </Provider>
      </div>
    )
  }
}

export default App;
