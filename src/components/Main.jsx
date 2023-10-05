import React, { useEffect } from 'react';

import axios from 'axios';

const Main = () => {
    const getData = async () => {
    }
  useEffect(() => {
    axios.get('./api.json').then((res) => console.log(res))
  },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

export default Main;
