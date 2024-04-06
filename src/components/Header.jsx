import logo from "../images/marvel_logo.png";

const Header = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" />
      </div>
      <section>
        <button>login</button>
        <button>signup</button>
      </section>
    </>
  );
};

export default Header;
