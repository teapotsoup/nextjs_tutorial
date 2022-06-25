// 복붙 하기 싫다면 _app.js를 써보자
import Layout from "../components/Layout";
import "../styles/globals.css";
// pages 파일에서 임포트가 불가한 globals.css파일도 가져올 수 있다

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} /> 
        {/* 페이지프롭스에 getServerSideProps함수의 반환값 전달 */}
      </Layout>
    </>
  );
}
