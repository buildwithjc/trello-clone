import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1 className="font-bold text-2xl">Home</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br />

      <Link to="/board/1">
        <button>Board 1</button>
      </Link>
    </>
  );
}

export default HomePage;