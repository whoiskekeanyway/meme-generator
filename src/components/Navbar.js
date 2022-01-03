import dice from "./dice-sharp.svg";

export default function Navbar() {
  return (
    <nav className='navigation'>
      <>
        <a href='react.com' className='logo'>
          <img className='logo-image' src={dice} alt='logo' />{" "}
        </a>
        <h2 className='nav-title'>Meme Generator</h2>
      </>
    </nav>
  );
}
