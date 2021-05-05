import React, { useState, useEffect } from 'react';

const BoardItem = (props) => 
  <li className="BoardItem"> {props.value ? "o" : "x" }</li>

export default BoardItem;