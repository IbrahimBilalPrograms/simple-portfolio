import React from "react"
import {Link, graphql} from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import ImageTextCard from "../components/imageTextCard"
import Img from "gatsby-image"
import { GiScrollQuill, GiLaptop } from "react-icons/gi"
import {ImGithub} from "react-icons/im"
import {RiMailSendFill} from "react-icons/ri"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.scss"

const Index = ({data}) => {
    const professionalTech = data.tech.edges
    const projects = data.project.edges
    
    return (
        <Layout>
            <div className="index">
            <div class="index-screen1">
                <div class="index-screen1-text">
                    <ImageTextCard 
                        title="WILL JAY"
                        description="Developer & Educator"
                        background="transparent"
                        color="white" 
                        border="1px solid transparent"
                    />
                </div>
            </div>
            <div id="tech"></div>
            <br/>
            <br/>
            <br/>
            <section class="index-section">
                <div className="index-section-content">
                    <div className="index-section-content-tech">
                        <h1 className="index-section-content-heading">Tech I Work With</h1>
                        <div className="index-section-content-tech-icons">
                        {
                            professionalTech.length && 
                            professionalTech.map((tech, i) => {
                                return (
                                    <div key={i} className="index-section-content-tech-icons-icon">
                                        <img src={tech.node.frontmatter.image.publicURL} alt={tech.node.frontmatter.title}/>
                                        <small>{tech.node.frontmatter.title}</small>
                                    </div>  
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="index-section-content-work">
                        <h1 className="index-section-content-heading">Featured Project</h1>
                        <a href="https://www.gatsbyjs.com/starters/willjw3/gatsby-starter-developer-diary/" target="_blank" rel="noreferrer noopener">
                            <div className="index-section-content-work-project">
                                <Img fluid={projects[0].node.frontmatter.image.childImageSharp.fluid} />
                                <h2 style={{marginBottom: 0}}>{projects[0].node.frontmatter.title}</h2>
                                <p style={{fontStyle: "italic"}}>An official Gatsby Starter</p>
                            </div>
                        </a>    
                    </div>
                </div>
                <div className="index-section-links">
                    <div className="index-section-links-card">
                        <p style={{color: "#f1f1f1"}}><GiLaptop size={48}/></p>
                        <Link to="/projects"><h2>Projects</h2></Link> 
                    </div>
                    <div className="index-section-links-card">
                        <p style={{color: "#f1f1f1"}}><ImGithub size={48}/></p>
                        <a href="https://github.com/willjw3"><h2>GitHub</h2></a> 
                    </div>
                    <div className="index-section-links-card">
                        <p style={{color: "#f1f1f1"}}><GiScrollQuill size={48}/></p>
                       <a href="https://willward.netlify.app/"><h2>Blog</h2></a>
                    </div>
                </div>
            </section>
            <div id="profile"></div>
            <br/>
            <br/>
            <br/>
            <section class="index-section">
                <h1 className="index-section-about-title">About</h1>
                <div className="index-section-body">
                    <div className="index-section-body-about">
                        <div className="index-section-body-about-img">
                            <Img fluid={data.profilePic.childImageSharp.fluid} />
                        </div>
                        <div className="index-section-body-about-info">
                            <h2>Origin: California, USA</h2>
                            <h2>Current Location: Tokyo, Japan</h2>
                            <h2>Current Role: Web Developer</h2>
                            <h2>Education: Bachelor of Science - Physics</h2>
                            <hr/>
                            <p>Full-stack web developer since 2017, working primarily in the JavaScript ecosystem.</p>
                        </div>
                    </div>
                    <div className="index-section-body-contact">
                        <h1>Contact Me</h1>
                        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field" class="form-style-9">
                        <input type="hidden" name="form-name" value="contact" />
                            <ul>
                                <li>
                                    <input type="text" name="field1" class="field-style field-split align-left" placeholder="Name" />
                                    <input type="email" name="field2" class="field-style field-split align-right" placeholder="Email" />

                                </li>
                                <li>
                                    <input type="text" name="field3" class="field-style field-split align-left" placeholder="Phone" />
                                    <input type="url" name="field4" class="field-style field-split align-right" placeholder="Website" />
                                </li>
                                <li>
                                <input type="text" name="field3" class="field-style field-full align-none" placeholder="Subject" />
                                </li>
                                <li>
                                <textarea name="field5" class="field-style" placeholder="Message"></textarea>
                                </li>
                                <li>
                                <button type="submit"> <RiMailSendFill size={32}/></button>
                                </li>
                            </ul>
                        </form>
                    </div> 
                </div>
            </section>
        </div>
    </Layout>      
    )
}

export default Index

export const pageQuery = graphql`
query indexQuery {
  site {
    siteMetadata {
      title
    }
  }
    profilePic: file(relativePath: {eq: "bt.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    tech: allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}, filter: {fileAbsolutePath: {regex: "/tech/"}}) {
        totalCount
        edges {
            node {
                html 
                frontmatter {
                    title 
                    image {
                        publicURL
                    }
                    pagetype
                }
                fields {
                    slug
                }
            }
        }
    }
    project: allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}, filter: {fileAbsolutePath: {regex: "/project/"}}) {
        totalCount
        edges {
            node {
                html 
                frontmatter {
                    title 
                    image {
                        childImageSharp {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    pagetype
                }
                fields {
                    slug
                }
            }
        }
    } 
}
` 

