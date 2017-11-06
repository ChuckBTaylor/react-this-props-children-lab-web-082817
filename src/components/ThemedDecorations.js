// Code ThemedDecoration Component Here
import React from 'react';

const ThemedDecoration = (props) => {
  console.log(props);
  const childrenWithExtraProp = React.Children.map(props.children, child => {
    return React.cloneElement(child, {className: props.theme})
  })
  return (
  <div>
    {childrenWithExtraProp}
  </div>
  )
}

ThemedDecoration.defaultProps = {

}

export default ThemedDecoration
