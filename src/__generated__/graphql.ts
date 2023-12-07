/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  getBookByTitle?: Maybe<Array<Maybe<Book>>>;
};


export type QueryGetBookByTitleArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type V2QueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type V2Query = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', title?: string | null, author?: string | null } | null> | null, getBookByTitle?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null } | null> | null };


export const V2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"v2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getBookByTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<V2Query, V2QueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  getBookByTitle?: Maybe<Array<Maybe<Book>>>;
};


export type QueryGetBookByTitleArgs = {
  title?: InputMaybe<Scalars['String']['input']>;
};

export type V2QueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type V2Query = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', title?: string | null, author?: string | null } | null> | null, getBookByTitle?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null } | null> | null };
