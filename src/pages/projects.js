import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../styles/projects.scss"

const Projects = ({data}) => {
    console.log(data)
    const projects = data.project.edges
    const imageTags = []
    data.tech.edges.map((edge, i) => {
        console.log(edge.node.frontmatter.tag)
        imageTags.push([edge.node.frontmatter.tag, edge])
    })
    console.log(imageTags)
    return (
        <Layout>
            <div className="projects">
                <div className="projects-list">
                    <h1 className="projects-list-title">Projects</h1>
                    <hr/>
                {
                    projects && projects.map((project, i) => {
                        return (
                            <div className="projects-list-project">
                                <div className="projects-list-project-img">
                                    <Img fluid={project.node.frontmatter.image.childImageSharp.fluid} />
                                </div>
                                <h2>{project.node.frontmatter.title}</h2>
                                <div className="projects-list-project-tech">
                                    {
                                        project.node.frontmatter.tags && project.node.frontmatter.tags.map((tag, i) => {
                                            let imgurl
                                            imageTags.forEach((item, i) => {
                                                if (item[0] === tag) {
                                                    imgurl = item[1].node.frontmatter.image.publicURL
                                                }
                                            })
                                            return (
                                                <img className="projects-list-project-tech-tagimg" src={imgurl} alt=""/>
                                            )
                                        })
                                    }
                                </div>
                                <div dangerouslySetInnerHTML={{__html:project.node.html}} />
                            </div>
                        )
                    })
                }
                </div>
                

            </div>
        </Layout>
    )
}

export default Projects

export const pageQuery = graphql`
query projectsQuery {
  site {
    siteMetadata {
      title
    }
  }
    gatsby: file(relativePath: {eq: "gatsby.svg"}) {
       publicURL
    }
    project: allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}, filter: {fileAbsolutePath: {regex: "/project/"}}) {
        totalCount
        edges {
            node {
                html 
                frontmatter {
                    title 
                    tags
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
    tech: allMarkdownRemark(sort: {fields: frontmatter___id, order: ASC}, filter: {fileAbsolutePath: {regex: "/tech/"}}) {
        totalCount
        edges {
            node {
                html 
                frontmatter {
                    title 
                    tag
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
}
` 