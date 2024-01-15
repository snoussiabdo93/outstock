import Head from "next/head";

const SEO = ({ pageTitle,font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Olizana Olive Wood HandCrafts `}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content=" Olizana Olive Wood Best b2b company" />
      <meta name="robots" content="index, follow" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
             


      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;