import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./jessie.png" alt="Jessie" />;
}

function Intro() {
  return (
    <div>
      <h1>Jessie Zhang</h1>
      <p>
        A software engineer. Excellent problem-solving skills coupled with a
        strong desire to learn and grow within a dynamic IT environment.
        Committed to contributing positively to the team and organization while
        continuously expanding skills and expertise.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="👶🏻" color="orangered" />
      <Skill skill="Web Design" emoji="💪" color="blue" />
      <Skill skill="Git and GitHub" emoji="💪" color="green" />
      <Skill skill="React" emoji="👍🏻" color="yellow" />
      <Skill skill="Python" emoji="👶🏻" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
