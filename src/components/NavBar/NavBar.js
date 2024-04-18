import './navBar.css'
export const NavBar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'></div>
        <ul className="nav-menu">
            <li>Acceuil</li>
            <li>Services</li>
            <li>Industries</li>
            <li>Contact</li>
            <button className='nav-contact'>
                <b>Register</b>
            </button>
        </ul>
        <div className='nav-logo2'>
          <b>New logo</b>
        </div>
    </div>
  )
}

export default NavBar;