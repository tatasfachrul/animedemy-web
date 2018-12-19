import React from 'react';
import reactDOM from 'react-dom';

class App extends React {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {

    return (
      <div className="root-container">
 
      </div>
    );
  }
}

reactDOM.render(
  <App />, document.getElementById("root"));

export default App;
