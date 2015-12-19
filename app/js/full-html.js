import React from 'react';
import Html from './views/html';

const standaloneResume = ({resume}) => {
  return (
    <html style={{'fontFamily': 'sans-serif', 'WebkitTextSizeAdjust': '100%', 'MSTextSizeAdjust': '100%', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontSize': '62.5%', 'WebkittapHighlightColor': 'rgba(0, 0, 0, 0)', 'margin': '20px'}}>
      <head style={{'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box'}}>
      </head>
      <body style={{'margin': '20px', 'WebkitBoxSizing': 'border-box', 'MozBoxSizing': 'border-box', 'boxSizing': 'border-box', 'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif', 'fontSize': '14px', 'lineHeight': '1.42857', 'color': '#333333', 'backgroundColor': 'white'}}>
        <Html resume={resume} />
      </body>
    </html>
  );
};

export default standaloneResume;