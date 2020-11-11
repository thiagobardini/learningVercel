import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      <br></br>
      
      <img src="https://4.bp.blogspot.com/-RTtVjb3Ydyc/V0RdD2apc6I/AAAAAAAAACw/ehqNMf7tVlk1oqO5de668X2DsHaC-ClyQCLcB/s1600/react_best_practices-1453211146748.jpg"></img>
    </div>
  )
}

function Contador() {
  const [contador,setContador] = useState(1); 

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

function Pagina() {
  return <Contador />
}

export default Home