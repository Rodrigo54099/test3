import { Link } from "react-router-dom"
import logo from "../../assets/codepath.svg"
import person from "../../assets/person.svg"
import "./Navbar.css"

export default function Navbar({
  user
}) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="codepath logo" />
          </Link>
        </div>
      
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#About">Activity</Link>
          </li>
          <li>
            <Link to="/#Contact">Exercise</Link>
          </li>
          <li>
            <Link to="/#Contact">Nutrition</Link>
          </li>
          <li>
            <Link to="/#Contact">Sleep</Link>
          </li>
        </ul>
    
        <div className="auth">
              {user?.email ? (
                <Link to="/orders">
                  <img src={person} alt="avatar" />
                  {user.email}
                </Link>
              ) : (
                <Link to="/login">
                  <img src={person} alt="avatar" />
                  Login
                </Link>
              )}
        </div>

        <div className="signup">
              <Link to="/signup">
                Sign Up
              </Link>
            </div>

      </div>
    </nav>
  )
}