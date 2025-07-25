import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState(""); // Added content state

  const handlePost = async (e) => {
    e.preventDefault();
    const dataSet = {
      name: name,
      mobileNumber: number,
      emailId: email,
      content: content,
      categoryId: "2",
      createdBy: 19,
    };
    try {
      const response = await fetch("http://rockstonemart.co.in/api/Inquiry/postInquiry", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(dataSet),
      });
      const resData = await response.json();
      console.log("Post response:", resData);

      // Optionally, refresh data after posting
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://rockstonemart.co.in/api/Inquiry/getAllInquiry");
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = data.filter((item) => item.id > 3);

  return (
    <div>
      <form onSubmit={handlePost}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <br />
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Mobile No"
          required
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Id"
          required
        />
        <br />
        {/* Added textarea for content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <hr />

      <div>
        {filterData.map((item) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Mobile Number: {item.mobileNumber}</p>
            <p>Email: {item.emailId}</p>
            <p>Content: {item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
