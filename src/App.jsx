import { useRef } from "react";


const App = () => {
  let firstName = useRef();
  let lastName = useRef();
  
  const change = () => {
    let fName = firstName.current.value;
    let lName = lastName.current.value;

    alert(`Bonjour ${fName} ${lName}`);
  }
  return (
    <div>
      {/* <h1 ref={myHeadLine}></h1> */}
      {/* <img ref={myImage} src="https://placehold.co/600x400" alt="image" /> */}
      <input ref={firstName} type="text" placeholder="First Name"/><br />
      <input ref={lastName} type="text" placeholder="Last Name"/><br />
      <button onClick={change}>Click on me for change</button>
    </div>
  )
}

export default App;
