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