import React from 'react';

const BoardItem = (props) => {
  var resutl = ['o', 'x']
  return <li className="BoardItem" {...props}> { props.value !== - 1 ? resutl[props.value] : ' ' }</li>;
}

export default BoardItem;