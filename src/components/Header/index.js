import { appName } from "../../includes/variables";
import { GiFlowerPot } from "react-icons/gi";
import "./styles.scss";

export default function Header() {
  return (
    <header className="main">
      <GiFlowerPot />
      <h1>{appName}</h1>
    </header>
  );
}
