import React from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import styles from "./layout.module.css"
export function Layout(){
    return (<div className={styles.wrapper}>
        <Header></Header>
        <Outlet></Outlet>
        <main>something</main>
        <Footer></Footer>
    </div>)
}