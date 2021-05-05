import React from 'react';

var resutl = ['x', 'o'];
const BoardItem = (props) => <li className="BoardItem" {...props}> { props.value !== - 1 ? resutl[props.value] : ' ' }</li>;

export default BoardItem;