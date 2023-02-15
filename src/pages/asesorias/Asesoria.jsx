import { Link, NavLink } from "react-router-dom";
function Asesorias() {
  return (
    <>
      <h1>Asesorias</h1>
      <Link to='/'>home</Link>
      <NavLink style={{color:'red'}}>Home</NavLink>
    </>
  );
}

export default Asesorias; 