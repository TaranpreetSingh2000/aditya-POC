import { gql } from "@apollo/client";

const GET_DATA = gql`
  query {
    teasers {
      heading
      description
      buttontext
    }
  }
`;

const GET_CARD_DATA = gql`
  query {
    card {
      adityaCardComponent {
        cardTitle
        cardDescription
      }
    }
  }
`;

const GET_HEADING_DATA = gql`
  query {
    heading {
      Heading {
        headingboldtype
      }
    }
  }
`;

// const CREATE_NEWSLETTER_SUBSCRIPTION = gql`
//   mutation CreateNewsletterForm($data: NewsLetterFormInput!) {
//     createNewsLetterForm(data: $data) {
//       name
//       email
//       mobile
//     }
//   }
// `;

const STYLE_HEADING_DATA = gql`
  query Styleheading {
    styleheading {
      styleHeading {
        title
        hasBreakRow
        color
      }
    }
  }
`;
export {
  GET_HEADING_DATA,
  GET_DATA,
  GET_CARD_DATA,
  // CREATE_NEWSLETTER_SUBSCRIPTION,
  STYLE_HEADING_DATA,
};
