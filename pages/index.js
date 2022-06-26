import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);//사진을 눌러도 라우터 함수를 통해 엔드포인트로 이동가능
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {/* 각 페이지의 헤드 태그 내 타이틀이다. */}
      {results?.map((movie) => (
        <div
          onClick={() => onClick(movie.id, movie.original_title)}
          className="movie"
          key={movie.id}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>

          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//해당 함수 이름은 고정이다. 백엔드 서버에서 실행되는 함수.
//React.js의 CSR에서 SSR로 바꿔주는 함수.
//CSR 절차
//1. 먼저 데이터가 없는 페이지를 즉시 표시합니다.
//2. 페이지의 일부는 Static Generation을 사용해 pre-render할 수 있습니다.
//3. 없는 데이터를 위해 loading 상태를 표시할 수 있습니다.
//4. 그런 다음 클라이언트 측에서 데이터를 가져와 준비가 되면 표시합니다.

//준비과정을 보여주지 않고 HTML이 완전한 상태로 준비됐을때 띄워주는 것이 SSR
//준비 안되면 로딩 상태 화면이 아닌 그냥 흰화면.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results, //이걸 props로써 페이지에 전달
    },
  };
}
