import styles from "./app-layout.module.scss";
import {Outlet} from "react-router-dom";
import {WebsiteHeader} from "components/website-header/website-header.tsx";

export default function AppLayout() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.pageInner}>
                    <WebsiteHeader/>
                    <div className={styles.pageContent}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
}
