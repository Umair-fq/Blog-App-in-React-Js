import { Link } from "react-router-dom";
//so in react when you have to pass an argument to a function, you have to call that function in anonymous function
const Navbar = () => {
    
    // const foo = (name, event) => {
    //     console.log(`hello ${name}, I am clicked and event: ${event.target}`)
    // }

    // const handleClick = (event) => {
    //     console.log("hello, I am simply clicked", event)
    // }

    return (
        <>
        <h1>Marie Blog App</h1>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
        {/* <button className="btn" onClick={(event) => {foo("Umair", event)} }>Click me</button>
        <button className="btn" onClick={handleClick}>Just Click me</button> */}
        </>
      );
}
 
export default Navbar
