import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "../styles/components/header.scss"

const Header = ({title, isOpen}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata { 
                    author
                }
            }
        }
    `)
    const author = data.site.siteMetadata.author
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-content-logo">
                    <h1>{title}: {author}</h1>    
                </div>
                <div className="header-content-links">
                    <Link className="header-content-links-link" to="/#profile">about & contact</Link>
                    <Link className="header-content-links-link" to="/#tech">tech & projects</Link>
                    <Link className="header-content-links-link" to="/">home</Link>
                </div>
                <div className="header-burger">
                    <button className="header-burger-btn" onClick={isOpen}>MENU</button>
                </div>
            </div>
        </div>
    )
}

export default Header