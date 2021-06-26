import React from "react";
import "../styles/styles.scss"
import Header from '../components/header'

const Layout = ({ pageTitle, children }) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <Header />
            {children}
        </main>
    )
}

export default Layout;