// import { useState } from "react";
// const PersonData = () => {
//     const [name, setName] = useState("Umair")
//     const changeName = () => {
//         setName("Umair Farooq")
//     }
//     return ( 
//         <>
//             <h1>Hello, we are going to change the name using useState hook</h1>
//             <p>name: {name}</p>
//             <button onClick={changeName}>Click button to change</button>
//         </>
// );
// }

// //now we will be using useState hook for object 

// const Car = () => {
//     const [car, setCar] = useState({
//         model: "2009", 
//         brand: "honda",
//         name: "civic",
//         color: "black"
//     })

//     const changeColor = () => {
//         return setCar({color: "white"})
//     }
//     return ( 
//         <>
//             <h1>My favorite car</h1>
//             <p>{car.name} in {car.color} color</p>
//             <p>but you can know my most favorite color of this car by clicking surprise button</p>
//             <button onClick={changeColor}>Surprise Button</button>
//         </>
//      );
// }
 

// export {PersonData, Car}