import React from "react";
import NavBar from "./Navbar";


// children이란 React.js가 제공하는 prop으로 한 컴포넌트를 다른 컴포넌트에
// 삽입시 사용한다.
export default function Layout({children}){
    return<>
        <NavBar/>
        <div>{children}</div>
    </>
}