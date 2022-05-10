import "./App.css";
import logo from "./logo.jpg";
import OpenAI from "./OpenAI";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid rounded" alt="logo" />
        </header>
        <main>
          <OpenAI />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="www.linkedin.com/in/marah-deven-rice"
              target="_blank"
              rel="noreferrer"
            >
              Marah Rice
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/MarahDeven/shopify-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}
