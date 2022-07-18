const Header = ({ name }) => {
  return (
    <header>
      <div className="container">
        <span>{name}</span>
      </div>
    </header>
  );
};

export default Header;
