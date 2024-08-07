import styles from "./layout.module.scss";
import {Outlet} from "react-router-dom";
import {Header} from "components/header/header.tsx";

export default function Layout() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.pageInner}>
                    <Header/>
                    <div className={styles.pageContent}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}

