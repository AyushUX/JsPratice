// 1. Error Handling using async/await with try...catch (most common in React)

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
}

// 2. Error Handling using .then().catch() (used in older or chained style)

const fetchData= async()=>{
    const response= await fetch("")
    .then((response)=>{
        if(!response.ok){
            throw new Error ('error: ${response.status}')
        }
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error.message);
        
    })
}

// 3. window.onerror & window.onunhandledrejection — Global Error Catchers (Browser)
// Catches unhandled runtime and Promise errors globally.

window.onerror = (msg, src, line, col, err) => {
  console.error("Global JS Error:", msg);
};

window.onunhandledrejection = (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
};
// ✅ Best for: Logging and monitoring app crashes in production.

