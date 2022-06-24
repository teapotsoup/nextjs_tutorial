// 복붙 하기 싫다면 _app.js를 써보자
import NavBar from "../components/Navbar";
import "../styles/globals.css" 
// pages 파일에서 임포트가 불가한 globals.css파일도 가져올 수 있다

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <span>{"I'm span tag from _app.js"}</span>
      <style jsx global>
        {`
          a {
            color: grey;
          }
        `}
      </style>
    </>
  );
}
