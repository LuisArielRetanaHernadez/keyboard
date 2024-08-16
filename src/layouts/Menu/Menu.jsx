import { Link } from "react-router-dom"

import { Outlet } from "react-router-dom"

import './Menu.style.css'
import Logo from "../../components/Logo/Logo"

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <div className="menu__logo">
          <Logo />
        </div>
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to='/login' className="menu__link">Login</Link>
            </li>
            <li className="menu__item">
              <Link to='/register' className="menu__link">Register</Link>
            </li>
            <li className="menu__item">
              <button className="menu__link">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  )
}

export default Menu