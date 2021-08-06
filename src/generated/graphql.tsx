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
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
};

export type DataAfterPurchaseType = {
  __typename?: 'DataAfterPurchaseType';
  midiLink?: Maybe<Scalars['String']>;
  wavLink?: Maybe<Scalars['String']>;
  flacLink?: Maybe<Scalars['String']>;
  pdfLink?: Maybe<Scalars['String']>;
};




export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  isStudent: Scalars['Boolean'];
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationUpdateAccountArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  token?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  name: Scalars['String'];
  priceUsd: Scalars['Decimal'];
  imageLink: Scalars['String'];
  authenticatedData?: Maybe<DataAfterPurchaseType>;
  free: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserNode>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
  allProductsInfo?: Maybe<Array<Maybe<ProductType>>>;
  productByName?: Maybe<ProductType>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
};


export type QueryProductByNameArgs = {
  name: Scalars['String'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  token?: Maybe<Scalars['String']>;
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  email: Scalars['String'];
  isStudent: Scalars['Boolean'];
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type UserInfoFragment = (
  { __typename?: 'UserNode' }
  & Pick<UserNode, 'id' | 'lastLogin' | 'username' | 'email' | 'isStudent' | 'verified'>
);

export type TokenAuthMutationVariables = Exact<{
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}>;


export type TokenAuthMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'success' | 'errors'>
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & UserInfoFragment
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
  isStudent: Scalars['Boolean'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'Register' }
    & Pick<Register, 'success' | 'errors' | 'token'>
  )> }
);

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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserNode' }
    & UserInfoFragment
  )> }
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

export const UserInfoFragmentDoc = gql`
    fragment UserInfo on UserNode {
  id
  lastLogin
  username
  email
  isStudent
  verified
}
    `;
export const TokenAuthDocument = gql`
    mutation TokenAuth($password: String!, $email: String, $username: String) {
  tokenAuth(password: $password, username: $username, email: $email) {
    token
    success
    errors
    user {
      ...UserInfo
    }
  }
}
    ${UserInfoFragmentDoc}`;
export type TokenAuthMutationFn = Apollo.MutationFunction<TokenAuthMutation, TokenAuthMutationVariables>;

/**
 * __useTokenAuthMutation__
 *
 * To run a mutation, you first call `useTokenAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTokenAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tokenAuthMutation, { data, loading, error }] = useTokenAuthMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useTokenAuthMutation(baseOptions?: Apollo.MutationHookOptions<TokenAuthMutation, TokenAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TokenAuthMutation, TokenAuthMutationVariables>(TokenAuthDocument, options);
      }
export type TokenAuthMutationHookResult = ReturnType<typeof useTokenAuthMutation>;
export type TokenAuthMutationResult = Apollo.MutationResult<TokenAuthMutation>;
export type TokenAuthMutationOptions = Apollo.BaseMutationOptions<TokenAuthMutation, TokenAuthMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!, $isStudent: Boolean!) {
  register(
    email: $email
    username: $username
    password1: $password1
    password2: $password2
    isStudent: $isStudent
  ) {
    success
    errors
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password1: // value for 'password1'
 *      password2: // value for 'password2'
 *      isStudent: // value for 'isStudent'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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
export const MeDocument = gql`
    query Me {
  me {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
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