/*
  Markdown implementation:
  https://www.gatsbyjs.org/docs/adding-a-list-of-markdown-blog-posts/
*/

/* eslint-disable */

import React from 'react'
import PostLink from '../components/post-link'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // console.log(`edges: ${JSON.stringify(edges, null, 2)}`)

  const Posts = edges
    // Filter Blog posts. Posts have dates. Research pages don't.
    .filter(edge => !!edge.node.frontmatter.date && edge.node.frontmatter.path.includes('proposal'))
    .map(edge => (
      <li key={edge.node.id}>
        <PostLink key={edge.node.id} post={edge.node} />
      </li>
    ))

  return (
    <Layout>
      <Helmet>
        <title>Proposals</title>
        <meta name="Proposals" content="Proposals" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>PSF Proposals</h1>
            </header>

            <p>
              This page displays all proposals, sorted by date. Proposals are
              indended to be voted on by casting air-dropped voting tokens
              to the correct 'Yes' or 'No' address.
            </p>

            <ul>{Posts}</ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
