Pertanyaan 6
Kode disamping adalah potongan kode HOC menggunakan function component, kalian diminta untuk menampilkan console “Component has mounted” saat pertama kali di mount dan  “Component will umount!” saat component akan di unmount.

import React, {useEffect} from 'react';
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      // isi disini
    }, []);
    return <WrappedComponent {...props} />;
  };
}

function MyComponent() {
  return <div>Belajar HOC!</div>;
}
export default withLogger(MyComponent);
