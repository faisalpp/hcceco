import React from 'react'
import { Helmet } from 'react-helmet-async'

const HeadMeta = ({title}) => {
  return (
    <Helmet>
     <meta charSet="UTF-8" />
     <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="preconnect" href="https://fonts.googleapis.com"/>
     <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"></link>
     <title>{title}</title>
    </Helmet>
  )
}

export default HeadMeta