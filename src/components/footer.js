import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../styles/components/footer.scss"

const Footer = () => {
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
        <div className="footer">
            <hr/>
            <p>&copy; {new Date().getFullYear()}, {author} </p>
        </div>
    )
}

export default Footer