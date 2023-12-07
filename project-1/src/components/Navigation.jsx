const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" width={150} />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Shop</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
