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
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

/**
 * Currently handles only authenticated users.
 *
 * No need for any arguments, just attach everything in the user's cart to the user model.
 */
export type AddDataAfterPurchaseToUserAfterCheckout = {
  __typename?: 'AddDataAfterPurchaseToUserAfterCheckout';
  purchaseSuccess: Scalars['Boolean'];
};

/** Currently handles only authenticated users.  */
export type AddOrRemoveCartItem = {
  __typename?: 'AddOrRemoveCartItem';
  productsInCart?: Maybe<Array<Maybe<ProductType>>>;
};

export type AllProductsDataType = {
  __typename?: 'AllProductsDataType';
  products: Array<Maybe<ProductType>>;
  isFirst: Scalars['Boolean'];
  isLast: Scalars['Boolean'];
  pagePosition: PagePositionType;
};

export type CartCompletionMutation = {
  __typename?: 'CartCompletionMutation';
  cart?: Maybe<CartType>;
};

export type CartType = {
  __typename?: 'CartType';
  id: Scalars['ID'];
  transactionId?: Maybe<Scalars['String']>;
  dateCreated: Scalars['DateTime'];
  complete: Scalars['Boolean'];
  itemsInCart: Array<ProductType>;
};

export type ComposerType = {
  __typename?: 'ComposerType';
  id: Scalars['ID'];
  name: Scalars['String'];
  compositions: Array<CompositionType>;
};

export type CompositionType = {
  __typename?: 'CompositionType';
  id: Scalars['ID'];
  name: Scalars['String'];
  composers: Array<ComposerType>;
  links?: Maybe<DataAfterPurchaseType>;
  product?: Maybe<ProductType>;
};

export type CreateOrGetEmptyCartMutation = {
  __typename?: 'CreateOrGetEmptyCartMutation';
  cart: CartType;
};

export type DataAfterPurchaseType = {
  __typename?: 'DataAfterPurchaseType';
  id: Scalars['ID'];
  midiLink?: Maybe<Scalars['String']>;
  wavLink?: Maybe<Scalars['String']>;
  flacLink?: Maybe<Scalars['String']>;
  pdfLink?: Maybe<Scalars['String']>;
  composition?: Maybe<CompositionType>;
};





export type MeExtendedType = {
  __typename?: 'MeExtendedType';
  user: UserNode;
  cart: CartType;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCartCompletion?: Maybe<CartCompletionMutation>;
  getOrCreateAndGetCart?: Maybe<CreateOrGetEmptyCartMutation>;
  /** Currently handles only authenticated users.  */
  addOrRemoveCartItem?: Maybe<AddOrRemoveCartItem>;
  /**
   * Currently handles only authenticated users.
   *
   * No need for any arguments, just attach everything in the user's cart to the user model.
   */
  addDataAfterPurchaseToUserAfterCheckout?: Maybe<AddDataAfterPurchaseToUserAfterCheckout>;
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
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
};


export type MutationUpdateCartCompletionArgs = {
  completion?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationAddOrRemoveCartItemArgs = {
  operation: Scalars['String'];
  productId: Scalars['Int'];
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


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
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

export type PagePositionType = {
  __typename?: 'PagePositionType';
  page: Scalars['Int'];
  of: Scalars['Int'];
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID'];
  priceUsd: Scalars['Decimal'];
  imageLink: Scalars['String'];
  composition?: Maybe<CompositionType>;
  cart?: Maybe<CartType>;
};

export type Query = {
  __typename?: 'Query';
  allCartsInfo?: Maybe<Array<Maybe<CartType>>>;
  cartOfUser?: Maybe<CartType>;
  allDataAfterPurchase?: Maybe<Array<Maybe<DataAfterPurchaseType>>>;
  allCompositionsInfo?: Maybe<Array<Maybe<CompositionType>>>;
  allProductsInfo?: Maybe<AllProductsDataType>;
  allComposersInfo?: Maybe<Array<Maybe<ComposerType>>>;
  meExtended?: Maybe<MeExtendedType>;
  me?: Maybe<UserNode>;
  user?: Maybe<UserNode>;
  users?: Maybe<UserNodeConnection>;
};


export type QueryCartOfUserArgs = {
  username?: Maybe<Scalars['String']>;
};


export type QueryAllProductsInfoArgs = {
  search?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
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

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  token?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['GenericScalar']>;
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
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
  cart?: Maybe<CartType>;
  purchasedItems: Array<DataAfterPurchaseType>;
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

export type CartInfoFragment = (
  { __typename?: 'CartType' }
  & Pick<CartType, 'id' | 'transactionId' | 'dateCreated' | 'complete'>
  & { itemsInCart: Array<(
    { __typename?: 'ProductType' }
    & ProductInfoFragment
  )> }
);

export type ProductInfoFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'priceUsd' | 'id' | 'imageLink'>
  & { composition?: Maybe<(
    { __typename?: 'CompositionType' }
    & Pick<CompositionType, 'name'>
    & { links?: Maybe<(
      { __typename?: 'DataAfterPurchaseType' }
      & Pick<DataAfterPurchaseType, 'midiLink' | 'wavLink' | 'flacLink' | 'pdfLink'>
    )>, composers: Array<(
      { __typename?: 'ComposerType' }
      & Pick<ComposerType, 'name'>
    )> }
  )> }
);

export type UserInfoFragment = (
  { __typename?: 'UserNode' }
  & Pick<UserNode, 'id' | 'lastLogin' | 'username' | 'email' | 'isStudent' | 'verified'>
);

export type AddOrRemoveCartItemMutationVariables = Exact<{
  operation: Scalars['String'];
  productId: Scalars['Int'];
}>;


export type AddOrRemoveCartItemMutation = (
  { __typename?: 'Mutation' }
  & { addOrRemoveCartItem?: Maybe<(
    { __typename?: 'AddOrRemoveCartItem' }
    & { productsInCart?: Maybe<Array<Maybe<(
      { __typename?: 'ProductType' }
      & ProductInfoFragment
    )>>> }
  )> }
);

export type GetOrCreateAndGetCartMutationVariables = Exact<{ [key: string]: never; }>;


export type GetOrCreateAndGetCartMutation = (
  { __typename?: 'Mutation' }
  & { getOrCreateAndGetCart?: Maybe<(
    { __typename?: 'CreateOrGetEmptyCartMutation' }
    & { cart: (
      { __typename?: 'CartType' }
      & CartInfoFragment
    ) }
  )> }
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

export type AllProductsInfoQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type AllProductsInfoQuery = (
  { __typename?: 'Query' }
  & { allProductsInfo?: Maybe<(
    { __typename?: 'AllProductsDataType' }
    & Pick<AllProductsDataType, 'isLast' | 'isFirst'>
    & { products: Array<Maybe<(
      { __typename?: 'ProductType' }
      & ProductInfoFragment
    )>>, pagePosition: (
      { __typename?: 'PagePositionType' }
      & Pick<PagePositionType, 'page' | 'of'>
    ) }
  )> }
);

export type MeExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type MeExtendedQuery = (
  { __typename?: 'Query' }
  & { meExtended?: Maybe<(
    { __typename?: 'MeExtendedType' }
    & { user: (
      { __typename?: 'UserNode' }
      & UserInfoFragment
    ), cart: (
      { __typename?: 'CartType' }
      & CartInfoFragment
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserNode' }
    & Pick<UserNode, 'id'>
  )> }
);

export const ProductInfoFragmentDoc = gql`
    fragment ProductInfo on ProductType {
  priceUsd
  id
  imageLink
  composition {
    name
    links {
      midiLink
      wavLink
      flacLink
      pdfLink
    }
    composers {
      name
    }
  }
}
    `;
export const CartInfoFragmentDoc = gql`
    fragment CartInfo on CartType {
  id
  transactionId
  dateCreated
  complete
  itemsInCart {
    ...ProductInfo
  }
}
    ${ProductInfoFragmentDoc}`;
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
export const AddOrRemoveCartItemDocument = gql`
    mutation addOrRemoveCartItem($operation: String!, $productId: Int!) {
  addOrRemoveCartItem(operation: $operation, productId: $productId) {
    productsInCart {
      ...ProductInfo
    }
  }
}
    ${ProductInfoFragmentDoc}`;
export type AddOrRemoveCartItemMutationFn = Apollo.MutationFunction<AddOrRemoveCartItemMutation, AddOrRemoveCartItemMutationVariables>;

/**
 * __useAddOrRemoveCartItemMutation__
 *
 * To run a mutation, you first call `useAddOrRemoveCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrRemoveCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrRemoveCartItemMutation, { data, loading, error }] = useAddOrRemoveCartItemMutation({
 *   variables: {
 *      operation: // value for 'operation'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useAddOrRemoveCartItemMutation(baseOptions?: Apollo.MutationHookOptions<AddOrRemoveCartItemMutation, AddOrRemoveCartItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddOrRemoveCartItemMutation, AddOrRemoveCartItemMutationVariables>(AddOrRemoveCartItemDocument, options);
      }
export type AddOrRemoveCartItemMutationHookResult = ReturnType<typeof useAddOrRemoveCartItemMutation>;
export type AddOrRemoveCartItemMutationResult = Apollo.MutationResult<AddOrRemoveCartItemMutation>;
export type AddOrRemoveCartItemMutationOptions = Apollo.BaseMutationOptions<AddOrRemoveCartItemMutation, AddOrRemoveCartItemMutationVariables>;
export const GetOrCreateAndGetCartDocument = gql`
    mutation GetOrCreateAndGetCart {
  getOrCreateAndGetCart {
    cart {
      ...CartInfo
    }
  }
}
    ${CartInfoFragmentDoc}`;
export type GetOrCreateAndGetCartMutationFn = Apollo.MutationFunction<GetOrCreateAndGetCartMutation, GetOrCreateAndGetCartMutationVariables>;

/**
 * __useGetOrCreateAndGetCartMutation__
 *
 * To run a mutation, you first call `useGetOrCreateAndGetCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetOrCreateAndGetCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getOrCreateAndGetCartMutation, { data, loading, error }] = useGetOrCreateAndGetCartMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetOrCreateAndGetCartMutation(baseOptions?: Apollo.MutationHookOptions<GetOrCreateAndGetCartMutation, GetOrCreateAndGetCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetOrCreateAndGetCartMutation, GetOrCreateAndGetCartMutationVariables>(GetOrCreateAndGetCartDocument, options);
      }
export type GetOrCreateAndGetCartMutationHookResult = ReturnType<typeof useGetOrCreateAndGetCartMutation>;
export type GetOrCreateAndGetCartMutationResult = Apollo.MutationResult<GetOrCreateAndGetCartMutation>;
export type GetOrCreateAndGetCartMutationOptions = Apollo.BaseMutationOptions<GetOrCreateAndGetCartMutation, GetOrCreateAndGetCartMutationVariables>;
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
    query AllProductsInfo($search: String, $page: Int, $limit: Int) {
  allProductsInfo(search: $search, page: $page, limit: $limit) {
    products {
      ...ProductInfo
    }
    isLast
    isFirst
    pagePosition {
      page
      of
    }
  }
}
    ${ProductInfoFragmentDoc}`;

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
 *      search: // value for 'search'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
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
export const MeExtendedDocument = gql`
    query MeExtended {
  meExtended {
    user {
      ...UserInfo
    }
    cart {
      ...CartInfo
    }
  }
}
    ${UserInfoFragmentDoc}
${CartInfoFragmentDoc}`;

/**
 * __useMeExtendedQuery__
 *
 * To run a query within a React component, call `useMeExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeExtendedQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeExtendedQuery(baseOptions?: Apollo.QueryHookOptions<MeExtendedQuery, MeExtendedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeExtendedQuery, MeExtendedQueryVariables>(MeExtendedDocument, options);
      }
export function useMeExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeExtendedQuery, MeExtendedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeExtendedQuery, MeExtendedQueryVariables>(MeExtendedDocument, options);
        }
export type MeExtendedQueryHookResult = ReturnType<typeof useMeExtendedQuery>;
export type MeExtendedLazyQueryHookResult = ReturnType<typeof useMeExtendedLazyQuery>;
export type MeExtendedQueryResult = Apollo.QueryResult<MeExtendedQuery, MeExtendedQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
  }
}
    `;

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