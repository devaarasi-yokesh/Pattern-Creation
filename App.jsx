import { useState } from 'react'
import './App.css'


function Rectangle(props){
  
  const coll = document.getElementsByTagName("div");
  console.log(coll[28])
  function colors(){
    for(let i =2;i<15;i++){
      coll[i].style.backgroundColor = "green";
      coll[i].style.transition = "backgroundColor 2s ease-out";
    }
    let j = 15;
    while(j < 119){
      console.log(j)
      coll[j].style.backgroundColor = "green";
      j += 13;
    }
    
    j = 27;
    while(j < 120){
      console.log(j)
      coll[j].style.backgroundColor = "green";
      j += 13;
    }
   j = 106;
   while(j < 118){
    console.log(j,"final")
    coll[j].style.backgroundColor = "green";
    j += 1;
  }
for(i =2;i<118;i++){
  coll[i].style.transition = "backgroundColor 2s ease";
}
  
  }
  
return(
  <>
 <div style={{margin:"0px",padding:"0px",display:"grid",gridTemplateColumns:"repeat(13,150px)",gap:"2px"}}>
  {Array(117).fill(<div style={{width:"150px",height:"98px",border:"2px solid grey"}} onClick={colors}></div>)}
  </div>
  </>
)
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rectangle />
    </>
  )
}

export default App
