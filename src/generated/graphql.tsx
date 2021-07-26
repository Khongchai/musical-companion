import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
};

export type DataAfterPurchaseType = {
  __typename?: 'DataAfterPurchaseType';
  midiLink: Scalars['String'];
  wavLink: Scalars['String'];
  flacLink: Scalars['String'];
};


export type ProductType = {
  __typename?: 'ProductType';
  name: Scalars['String'];
  priceUsd: Scalars['Decimal'];
  imageLink: Scalars['String'];
  authenticatedData?: Maybe<DataAfterPurchaseType>;
};

export type Query = {
  __typename?: 'Query';
  allProductsInfo?: Maybe<Array<Maybe<ProductType>>>;
  productByName?: Maybe<ProductType>;
};


export type QueryProductByNameArgs = {
  name: Scalars['String'];
};

export type AllProductsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsInfoQuery = (
  { __typename?: 'Query' }
  & { allProductsInfo?: Maybe<Array<Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'name' | 'priceUsd' | 'imageLink'>
    & { authenticatedData?: Maybe<(
      { __typename?: 'DataAfterPurchaseType' }
      & Pick<DataAfterPurchaseType, 'midiLink' | 'wavLink' | 'flacLink'>
    )> }
  )>>> }
);

export type ProductByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ProductByNameQuery = (
  { __typename?: 'Query' }
  & { productByName?: Maybe<(
    { __typename?: 'ProductType' }
    & Pick<ProductType, 'name' | 'priceUsd' | 'imageLink'>
    & { authenticatedData?: Maybe<(
      { __typename?: 'DataAfterPurchaseType' }
      & Pick<DataAfterPurchaseType, 'midiLink' | 'wavLink' | 'flacLink'>
    )> }
  )> }
);


export const AllProductsInfoDocument = gql`
    query AllProductsInfo {
  allProductsInfo {
    authenticatedData {
      midiLink
      wavLink
      flacLink
    }
    name
    priceUsd
    imageLink
  }
}
    `;

/**
 * __useAllProductsInfoQuery__
 *
 * To run a query within a React component, call `useAllProductsInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsInfoQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsInfoQuery, AllProductsInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsInfoQuery, AllProductsInfoQueryVariables>(AllProductsInfoDocument, options);
      }
export function useAllProductsInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsInfoQuery, AllProductsInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsInfoQuery, AllProductsInfoQueryVariables>(AllProductsInfoDocument, options);
        }
export type AllProductsInfoQueryHookResult = ReturnType<typeof useAllProductsInfoQuery>;
export type AllProductsInfoLazyQueryHookResult = ReturnType<typeof useAllProductsInfoLazyQuery>;
export type AllProductsInfoQueryResult = Apollo.QueryResult<AllProductsInfoQuery, AllProductsInfoQueryVariables>;
export const ProductByNameDocument = gql`
    query ProductByName($name: String!) {
  productByName(name: $name) {
    name
    priceUsd
    imageLink
    authenticatedData {
      midiLink
      wavLink
      flacLink
    }
  }
}
    `;

/**
 * __useProductByNameQuery__
 *
 * To run a query within a React component, call `useProductByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProductByNameQuery(baseOptions: Apollo.QueryHookOptions<ProductByNameQuery, ProductByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByNameQuery, ProductByNameQueryVariables>(ProductByNameDocument, options);
      }
export function useProductByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByNameQuery, ProductByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByNameQuery, ProductByNameQueryVariables>(ProductByNameDocument, options);
        }
export type ProductByNameQueryHookResult = ReturnType<typeof useProductByNameQuery>;
export type ProductByNameLazyQueryHookResult = ReturnType<typeof useProductByNameLazyQuery>;
export type ProductByNameQueryResult = Apollo.QueryResult<ProductByNameQuery, ProductByNameQueryVariables>;