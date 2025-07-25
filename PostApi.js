import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    let dataSet = {
      name: name,
      mobileNumber: number, 
      emailId: email,
      content: content,
      categoryId: "2",
      createdBy: 19,
    };
    try {
      const response= await fetch("http://rockstonemart.co.in/api/Inquiry/postInquiry",
      {
        method:"POST",
        headers:{
          accept: 'application/json', 
          'content-type':'application/json'
        },
        body: JSON.stringify(dataSet)
      }
      )
      const resData= await response.json()
    } catch (error) {
      console.log(error);
    }

  const fetchData = async () => {
    const response = await fetch(
      "http://rockstonemart.co.in/api/Inquiry/getAllInquiry"
    );
    const resData = await response.json();
    setData(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  const filterData = data.filter((item) => item.id > 3);
  console.log(filterData);

  return (
    <div>
      <form onSubmit={handlePost}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <br />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Mobile No"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Id"
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     {filterData.map((item) => {
  //       return (
  //         <div>
  //           <p>{item.id}</p>
  //           <p>{item.name}</p>
  //           <p>{item.mobileNumber}</p>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
}
export default App;
