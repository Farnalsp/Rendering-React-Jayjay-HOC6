import React, { useEffect } from 'react';

function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log('Component has mounted');

      return () => {
        console.log('Component will unmount');
      };
    }, []); 

    return <WrappedComponent {...props} />;
  };
}

// Example component to demonstrate the HOC
function MyComponent() {
  return <div>Belajar HOC!</div>;
}

// Wrap MyComponent with the logger HOC
const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;