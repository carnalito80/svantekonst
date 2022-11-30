import * as React from "react"
import { Link } from "gatsby"
import { Container, Link as TLink } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import Header from "@lekoarts/gatsby-theme-emilia/src/components/header"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Seo from "@lekoarts/gatsby-theme-emilia/src/components/seo"

const NotFound = () => (
  <Layout>
    <Header />
    <Container>
      <Themed.p>
        Åh, nej!
        <br />
        Sidan du letar efter finns inte.{` `}
        <TLink as={Link} to="/">
          Dundra iväg till huvudsidan istället veja.
        </TLink>
      </Themed.p>
    </Container>
  </Layout>
)

export default NotFound

export const Head = () => <Seo title="404 - Not Found" />
