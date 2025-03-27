import client from "./client";
import {
  // CREATE_NEWSLETTER_SUBSCRIPTION,
  GET_CARD_DATA,
  GET_DATA,
  GET_HEADING_DATA,
  GET_TEASERS_DATA,
  STYLE_HEADING_DATA,
} from "./queries";

export default async function fetchData() {
  try {
    const [
      teasersResponse,
      cardResponse,
      headingResponse,
      styleResponse,
    ] = await Promise.all([
      client.query({
        query: GET_DATA,
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first",
      }),
      client.query({
        query: GET_CARD_DATA,
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first",
      }),
      client.query({
        query: GET_HEADING_DATA,
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first",
      }),
      client.query({
        query: STYLE_HEADING_DATA,
        fetchPolicy: "network-only",
        nextFetchPolicy: "cache-first",
      }),

      // client.mutate({
      //   mutation: CREATE_NEWSLETTER_SUBSCRIPTION,
      //   variables: {
      //     data: {
      //       name: formData.name,
      //       email: formData.email,
      //       mobile: formData.mobile,
      //     },
      //   },

      //   // variables: {
      //   //   data: {
      //   //     name: "test",
      //   //     email: "test@gmail.com",
      //   //     mobile: 9973456986,
      //   //   },
      //   // },
      //   fetchPolicy: "network-only",
      //   nextFetchPolicy: "cache-first",
      // }),
    ]);

    return {
      success: true,
      teasersData: teasersResponse.data.teasers || [],
      styleData: styleResponse.data.styleheading || [],
      cardData: cardResponse.data.card || {},
      headingData: headingResponse.data.heading || [],
      error: null,
    };
  } catch (error) {
    return {
      success: false,
      teasersData: [],
      cardData: {},
      error: {
        message: error.message || "Failed to fetch data from Strapi",
      },
    };
  }
}
