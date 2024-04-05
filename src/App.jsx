import { useRef } from "react";


const App = () => {
  let myHead = useRef();
  
  const change = () => {
    myHead.current.classList.remove('text-success');
    myHead.current.classList.add('text-danger');
  }
  return (
    <div>
      <h1 ref={myHead} className="text-success">This is head Line</h1>
      <button onClick={change}>Click on me for change</button>
    </div>
  )
}

export default App;
