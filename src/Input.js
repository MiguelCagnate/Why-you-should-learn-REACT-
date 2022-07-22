import { useState, useEffect } from "react";

export default () => {

const [m, setM] = useState(11);
const [txt, setTxt] = useState(' ');

useEffect(() =>{alert('Ajà Milo!!!')}, [m]);

const ChangeNumber = () => {setM(23);} 
const typingText = (e) => {
    setTxt(e.target.value);
}

  return (
         <div>
              {m}
              <button onClick={() => ChangeNumber()}>Click Me</button>
              <input type="text" onChange={e => typingText(e)}></input>
              {txt}
         </div>
  );
};
