import "./App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import ConnectWithMe from "./Components/ConnectWithMe/ConnectWithMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  const yourName = "Luis Luna";
  const email = "luismluna87@gmail.com";
  const linkedinURL = "https://www.linkedin.com/in/luismluna/";
  const githubURL = "https://github.com/luisluna-arg/";

  return (
    <div className="site">
      <Navigation brand={"Luis Luna"} />

      <Header name={yourName}></Header>

      <AboutMe></AboutMe>
      <ConnectWithMe
        githubURL={githubURL}
        linkedinURL={linkedinURL}
      ></ConnectWithMe>
      <Footer email={email}></Footer>
    </div>
  );
}

export default App;
