import "../styles/notFound.css";

export default function NotFound() {
  return (
    <div>
      <div className="number nf">404</div>
      <div className="text-nf nf">
        <span>Oooppss....</span>
        <br></br>Page Not Found
      </div>
      <br></br>
      <a className="me nf" href="/">
        Home
      </a>
    </div>
  );
}
