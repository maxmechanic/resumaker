import React from 'react';

const ResumeTable = ({section, items = []}) => {
  const [title, attributes] = section;

  return (
    <table className="table">
      <thead>
        <tr>
          {attributes.map(attribute => <th key={attribute}>{attribute}</th>)}
        </tr>
      </thead>
    </table>
  );


};

export default ResumeTable;