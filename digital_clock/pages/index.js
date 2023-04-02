import React, {useState} from 'react';

const index = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h1>{currentTime}</h1>
    </>
  )
}

export default index