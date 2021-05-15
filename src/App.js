import logo from './logo.svg';
import './App.css';
import CakeComponent from './components/CakeComponent';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeComponentWithHook from './components/CakeComponentWithHook';
import IceCreamComponentWithHook from './components/IceCreamComponentWithHook';
import UsershooksComponent from './components/UsershooksComponent';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path='/cake' component={CakeComponent} />
            {/* <Redirect to='/amazing-careers' />  to redirect, as homepage */ } 
          </Switch>
          {/* <CakeComponent /> */}
          <CakeComponentWithHook /><hr />
          <IceCreamComponentWithHook /><hr />
          <UsershooksComponent />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
