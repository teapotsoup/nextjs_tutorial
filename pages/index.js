import { useState } from "react";
import styles from "../styles/Home.module.css";

import NavBar from "../components/Navbar";
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2 className="active">Hello!</h2>
    </div>
  );
}
