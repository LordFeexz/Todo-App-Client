import "../styles/notFound.css";

export default function NotFound() {
  return (
    <div>
      <div className="number">404</div>
      <div className="text">
        <span>Oooppss....</span>
        <br></br>Page Not Found
      </div>
      <br></br>
      <a className="me" href="/">
        Home
      </a>
    </div>
  );
}
