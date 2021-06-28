import giant_codepath from "../../assets/giant_codepath.svg"
import "./About.css"

export default function About() {
  return (
    <div className="About" id="About">
      <div className="content">
        <div className="summary">
          <div className="text">
            <h1>
              LifeTracker
            </h1>
            <p>Helping you take back control of your world.</p>
            <p>One step at a time.</p>
          </div>
          <div className="media">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="codepath large" />
          </div>
        </div>
      </div>
    </div>
  )
}
