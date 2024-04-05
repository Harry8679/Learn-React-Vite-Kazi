import { useRef } from "react";


const App = () => {
  let myHeadLine = useRef();
  
  const change = () => {
    myHeadLine.current.innerHTML= "<ul><li>Harry</li><li>MacCode</li></ul>";
  }
  return (
    <div>
      <h1 ref={myHeadLine}></h1>
      <button onClick={change}>Click on me for change</button>
    </div>
  )
}

export default App;
