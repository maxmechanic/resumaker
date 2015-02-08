import React from 'react';

let Json = React.createClass({
  render() {
    let json = this.props.cursor.value;
    return (
      <div>
        <pre>
          {JSON.stringify(json)}
        </pre>
      </div>
    );
  }
});

export default Json;