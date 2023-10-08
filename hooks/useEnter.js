const { useEffect, useState } = require("react");


const useEnter = (callback) => {

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        // 👇️ your logic here
        if(callback) callback();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [callback]);

}

export default useEnter;