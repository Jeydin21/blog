import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid red',
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };

  const itemStyle = {
    display: 'inline',
    color: 'white',
  };

  const titleStyle = {
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={titleStyle}><h1>Jeydin21's Blog</h1></Link>
      <nav>
        <ul style={navStyle}>
          <h2><li style={itemStyle}><Link to="/projects">Projects</Link></li></h2>
          <h2><li style={itemStyle}><Link to="/contact">Contact</Link></li></h2>
        </ul>
      </nav>
    </header>
  );
};

export default Header;