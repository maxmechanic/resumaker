import React from 'react';
import { map, isString } from 'lodash';

const ResumeTableRow = (attributes, item, id = 0) => (
  <tr key={id}>
    {
      attributes.map(attr => <td key={attr + id}>{item[attr]}</td>)
    }
  </tr>
);

const ResumeTable = ({title, attributes, items: rawItems = {}}) => {
  const items = isString(rawItems) ? [{[title]: rawItems}] : rawItems;

  return (
    <table className="table">
      <thead>
        <tr>
          {attributes.map(attribute => <th key={attribute}>{attribute}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          map(items, (item, id) => ResumeTableRow(attributes, item, id))
        }
      </tbody>
    </table>
  );


};

export default ResumeTable;