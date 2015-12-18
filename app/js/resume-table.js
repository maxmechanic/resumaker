import React, { Component } from 'react';
import { map, reduce, isString, isEmpty } from 'lodash';


function buildDelete({removeItem, editItem}, single, type, id, attributes) {
  if (single) {
    return <a onClick={() => editItem(type, {[attributes[0]]: ''})}>Clear</a>;
  } else {
    return <a onClick={() => removeItem(type, id)}>Delete</a>;
  }
}

class ResumeTableRow extends Component {
  constructor(context, props) {
    super(context, props);

    this.handleItemEdit = this.handleItemEdit.bind(this);
  }

  handleItemEdit() {
    const {attributes, actions, id, type} = this.props;

    const payload = reduce(attributes, (result, attr) => {
      result[attr] = this.refs[attr].value;
      return result;
    }, {id});

    actions.editItem(type, payload);

  }

  render() {
    const {attributes, item = {value: {}}, id = 0, type, actions, single} = this.props;
    return (
      <tr key={id}>
        {
          attributes.map(attr =>
            item.editing
              ? <td key={attr + id}><input type="text"  ref={attr} defaultValue={item.value[attr]} /></td>
              : <td key={attr + id}>{item.value[attr]}</td>
          ).concat([
            isEmpty(item) || item.editing
              ? null
              : <td className="text-right"><a onClick={() => actions.beginEditItem(type, id)}>Edit</a> | { buildDelete(actions, item.single, type, id, attributes) }</td>,
            item.editing
              ? <td className="text-right"><a onClick={this.handleItemEdit}>Done</a> | <a onClick={() => actions.endEditItem(type, id)}>Cancel</a></td>
              : null
          ])
        }
      </tr>
    );
  }
}

const ResumeTable = ({title, attributes, items: rawItems = {}, actions}) => {
  const items = isString(rawItems.value)
    ? [{editing: rawItems.editing, value: {[title]: rawItems.value}, single: true}]
    : rawItems;

  return (
    <table className="table">
      <thead>
        <tr>
          {attributes.map(attribute => <th key={attribute}>{attribute}</th>)}
        </tr>
      </thead>
      <tbody>
        {
          map(items, (item, id) => <ResumeTableRow attributes={attributes} item={item} id={id} type={title.toUpperCase()} actions={actions} />)
        }
      </tbody>
    </table>
  );


};

export default ResumeTable;