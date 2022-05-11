import './App.css'

const App = () => {

  const [serach,setSearch] = useSta

  const HandleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="app">
      <h4>Search a cryptocurrency</h4>
      <form action="">
        <input onChange={HandleChange} className='search-input' type="text" placeholder="Search..." />
      </form>
    </div>
  )
}
export default App