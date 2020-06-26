/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta }) {
  const { site, me, screenshot } = useStaticQuery(
    graphql`
      query Site {
        site {
          siteMetadata {
            title
            titleLong
            description
            authorTwitter
            locale
            url
          }
        }
        me: imageSharp(fixed: { originalName: { eq: "me.jpg" } }) {
          resize(height: 720) {
            width
            height
            src
          }
        }
        screenshot: imageSharp(
          fixed: { originalName: { eq: "screenshot.png" } }
        ) {
          resize(height: 720) {
            src
          }
        }
      }
    `,
  );
  const { siteMetadata } = site;
  const metaDescription = description || siteMetadata.description;
  const imageUrl = `${siteMetadata.url}${me.resize.src.slice(1)}`;
  const screenshotUrl = `${siteMetadata.url}${screenshot.resize.src.slice(1)}`;
  const jsonLdString = `{
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Nazar Vovk",
    "url": "https://nvovk.com/",
    "image": "${imageUrl}",
    "sameAs": [
      "https://twitter.com/nvovk_",
      "https://www.linkedin.com/in/nvovk/",
      "https://github.com/nazarvovk"
    ]  
  }`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={siteMetadata.titleLong}
      meta={[
        {
          name: `robots`,
          content: `index`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: siteMetadata.locale,
        },
        {
          property: `og:url`,
          content: siteMetadata.url,
        },
        {
          property: `og:site_name`,
          content: siteMetadata.titleLong,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },

        {
          name: `og:image`,
          content: imageUrl,
        },
        {
          name: `og:image:secure_url`,
          content: imageUrl,
        },
        {
          name: `og:image:width`,
          content: me.resize.width,
        },
        {
          name: `og:image:height`,
          content: me.resize.height,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.authorTwitter,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: screenshotUrl,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href="https://nvovk.com/"></link>
      <script type="application/ld+json">{jsonLdString}</script>
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
