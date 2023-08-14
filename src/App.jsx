import React, { useState, useEffect } from "react";
import Stay from "./components/Stay/Stay";
import SearchModal from "./components/SearchModal/SearchModal";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className=' lg: logo-inputs flex h-12 mt-8 ml-28 mx-28'>
        <SearchModal
        data={data} />
      </div>
      <div className=" lg:grid grid-cols-3 mx-24 my-8 gap-12">
        {data.map((card, index) => (
          <Stay card={card} />
        ))}
      </div>
    </>
  );
}

export default App;

