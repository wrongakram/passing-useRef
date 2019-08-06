import React, {useRef, useEffect} from 'react';

import Child from './components/child'

function Parent() {
  const childRef = useRef(null);

  const handleChange = color => {
    console.log(color);
    childRef.current.style.color = color
  }

  useEffect(() => {
    console.log(childRef.current, 'Parent Component');
  })


  return (
    <Child
      forwardedRef={childRef}
      value="click me"
      handleChange={handleChange}
    />
  );
}

export default Parent;
