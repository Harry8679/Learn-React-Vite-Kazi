import { useRef } from "react";


const App = () => {
  let myImage = useRef();
  
  const change = () => {
    myImage.current.src= "https://placehold.co/600x400/000/FFF";
    myImage.current.setAttribute('height', '300px');
    myImage.current.setAttribute('width', '300px');
  }
  return (
    <div>
      {/* <h1 ref={myHeadLine}></h1> */}
      <img ref={myImage} src="https://placehold.co/600x400" alt="image" />
      <button onClick={change}>Click on me for change</button>
    </div>
  )
}

export default App;
