import { appName } from "../../includes/variables";
import { GiFlowerPot } from "react-icons/gi";
import MainMenu from "../MainMenu";
import "./styles.scss";

export default function Header() {
  return (
    <>
      <header className="main">
        <GiFlowerPot />
        <div>{appName}</div>
      </header>
      <MainMenu />
    </>
  );
}
