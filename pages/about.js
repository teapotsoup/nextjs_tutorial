import NavBar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <h2>About us</h2>
        <div className="customDiv">Say something</div>
      {/* styles jsx */}
      <style jsx >{`
        h2{
           color:tomato
        }
        .customDiv{
            color:grey
        }
      `}</style>
    </>
  );
}
