import React from 'react';

const BoardItem = (props) => {
  var resutl = ['x', 'o']
  return <li className="BoardItem" {...props}> { props.value !== - 1 ? resutl[props.value] : ' ' }</li>;
}

export default BoardItem;