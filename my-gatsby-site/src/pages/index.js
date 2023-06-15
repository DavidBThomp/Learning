// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout'

// Static Image Plugin
import { StaticImage } from 'gatsby-plugin-image'

// When linking between pages on site
// import { Link } from 'gatsby'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage
        alt="Random code from varius coding languages"
        src="../images/codingScreen.jpg"
      />
    </Layout>
  )
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage;