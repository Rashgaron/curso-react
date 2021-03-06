import React, { Fragment } from 'react'
import Header from './Header'
import { Global, css } from '@emotion/core'
import Head from 'next/head'
const Layout = props => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
            *,
            *:before,
            *:after {
              box-sizing: inherit;
            }
            body {
              font-size: 1.6rem;
              line-height: 1.5;
              font-family: 'PT Sans', sans-seriff;
            }
            h1,
            h2,
            h3 {
              margin: 0 0 2rem 0;
              line-height: 1.5;
            }
            h1,
            h2 {
              font-family: 'Roboto Slab', serif;
              font-weight: 700;
            }
            h3 {
              font-family: 'PT Sans', sans-seriff;
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            a {
              text-decoration: none;
            }
          }
        `}
      />
      <Head>
        <html lang='es'></html>
        <title>Product Hunt Firebase y Next</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css'
          integrity='sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg=='
          crossorigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <link href="/static/css/app.css" rel='stylesheet'></link>
      </Head>
      <Header></Header>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
