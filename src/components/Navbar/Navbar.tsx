import './navbar.scss'

function Navbar() {

  const name = 'User Name';

  return (
    <div className="navbar-main">
      <div className="logo">
        <img src="icons/logo.svg" alt="logo" />
        <span>
          {name}
        </span>
      </div>
      <div className="icons">
        <img src="icons/element.svg" alt="logo" />
        <img src="icons/note.svg" alt="logo" />
        <img src="icons/profile.svg" alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
