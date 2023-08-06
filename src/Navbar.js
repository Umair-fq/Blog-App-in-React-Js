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
            <a href="/home">Home</a>
            <a href="/create">New Blog</a>
        </nav>
        {/* <button className="btn" onClick={(event) => {foo("Umair", event)} }>Click me</button>
        <button className="btn" onClick={handleClick}>Just Click me</button> */}
        </>
      );
}
 
export default Navbar
