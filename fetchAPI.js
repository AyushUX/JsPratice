import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([])

  const fetchdata = async()=>{
    const Response = await fetch('')
    const resData = await Response.json()
    setData(resData)
  }
  useEffect(()=>{fetchdata()}, [])

} 
export default App;



// Example of a GET request in REST API
// const getExample = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // response.ok checks if the request was successful (status codes 200–299).
//     // If the response is not OK (like a 404 error), it throws an error that will be caught in the catch block.
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//   }
// };

// getExample();

