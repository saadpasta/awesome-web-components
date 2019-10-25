import React from 'react';
import 'Loader.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="loader-wrapper"><div className="loader"></div></div>
    );
  }
}

export default Loading;