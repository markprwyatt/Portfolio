import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Project from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="hero">
        <h1>Hello, I'm <span class="my-name">Mark Wyatt...</span></h1>
        <h2>I'm a Front End Web Developer.</h2>
      </div>
    <About />
    <Project />

  </Layout>
)

export default IndexPage
