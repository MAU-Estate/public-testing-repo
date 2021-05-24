import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const IndexPage = ({ location, data: { sanityBio: pageData } }) => {
  return <Layout location={location}>{pageData.title}</Layout>;
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    sanityBio {
      seo {
        title
      }
      title
    }
  }
`;
