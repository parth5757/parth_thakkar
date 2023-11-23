// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <header className="header">
      <NavLink className="w-10 h10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">
          PT
        </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) =>  isActive ? 'text-blue-500': 'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-sky-400	': ''}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar