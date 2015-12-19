import React from 'react';

let Json = React.createClass({
  render() {
    const { resume } = this.props;
    return (
      <div>
        <pre>
          {JSON.stringify(resume)}
        </pre>
      </div>
    );
  }
});

export default Json;