const imageFragment = /* GraphQL */ `
  fragment ImageFields on Image {
    url
    altText
    width
    height
  }
`;

export const productFragment = /* GraphQL */ `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    productType
    tags
    availableForSale
    featuredImage {
      ...ImageFields
    }
    images(first: 10) {
      edges {
        node {
          ...ImageFields
        }
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    options {
      name
      values
    }
    variants(first: 50) {
      edges {
        node {
          id
          title
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
  ${imageFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($first: Int!, $sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(first: $first, sortKey: $sortKey, reverse: $reverse, query: $query) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...ProductFields
    }
  }
  ${productFragment}
`;

export const getCollectionsQuery = /* GraphQL */ `
  query getCollections {
    collections(first: 50) {
      edges {
        node {
          id
          handle
          title
          description
          image {
            ...ImageFields
          }
        }
      }
    }
  }
  ${imageFragment}
`;

export const getCartQuantityQuery = /* GraphQL */ `
  query getCartQuantity($id: ID!) {
    cart(id: $id) {
      totalQuantity
    }
  }
`;
