import { useState, useEffect } from "react";

export default () => {

const [m, setM] = useState(11);

//let m = 11;
const ChangeNumber = () => {
    setM(23); 
} 

useEffect(() =>{
alert('Ajà Milo!!!')
}, [m])
  return (
         <div>
              {m}
              <button onClick={() => ChangeNumber()}>Click Me</button>
         </div>
  );
};
