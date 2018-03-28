module.exports = {
  siteMetadata: {
    title: 'InterviewJS',
  },
  plugins: [
    // 'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-1615344-7",
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://f50488fff0ce4c3dbadedead5a5b808b@sentry.io/481709',
      },
    },
  ],
};
