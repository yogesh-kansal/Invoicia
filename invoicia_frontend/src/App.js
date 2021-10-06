import { Component } from 'react';
import AuthContextProvider from './contexts/authContext';
import Routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="">
        <AuthContextProvider>
          <Routes/>
        </AuthContextProvider>
      </div>
    );

  }
}

export default App;
