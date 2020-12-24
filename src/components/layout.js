import React, { useState } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/components/layout.scss"

const Layout = ({children}) => {

    const [sidebarClass, setSidebarClass] = useState("sidebar")

    const handleSlide = () => {
      setSidebarClass('sidebar-show')
    }
    const handleClose = (e) => {
      //e.preventDefault()
      setSidebarClass('sidebar-hide')
    }

    return (
        <div className="layout">
            <Header title="portfolio" isOpen={handleSlide} />
            <div className="layout-main">{children}</div>
            <div className={sidebarClass}>
                <Link to="/#profile"><h3 className="sidebar-link" onClick={handleClose}>about & contact</h3></Link>
                <Link to="/#tech"><h3 className="sidebar-link" onClick={handleClose}>tech & projects</h3></Link>
                <Link to="/"><h3 className="sidebar-link"onClick={handleClose}>home</h3></Link>
                <button className="sidebar-btn" onClick={handleClose}>CLOSE</button>
              </div>
              <Footer />
        </div>
    )
}

export default Layout