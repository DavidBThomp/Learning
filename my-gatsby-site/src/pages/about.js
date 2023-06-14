// Step 1: Import React
import * as React from 'react'

// When linking between pages on site
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to='/'>Home</Link>
      <p>Hi there! I'm Brendan, the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

// Step 2.5: Add Head Info
export const Head = () =>   (<>
<title>About Me</title>
<meta name="description" content="Your description" />
</>)

// Step 3: Export your component
export default AboutPage