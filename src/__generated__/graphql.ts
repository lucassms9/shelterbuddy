/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URL: any;
};

export type Animal = Node & {
  __typename?: 'Animal';
  animalId: Scalars['Int'];
  animalType: AnimalType;
  breed: Breed;
  color?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['URL']>;
  sex?: Maybe<Sex>;
};

export type AnimalFilterInput = {
  and?: InputMaybe<Array<AnimalFilterInput>>;
  animalType?: InputMaybe<AnimalTypeFilterInput>;
  breed?: InputMaybe<BreedFilterInput>;
  color?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<IntOperationFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AnimalFilterInput>>;
  photoUrl?: InputMaybe<UrlOperationFilterInput>;
  sex?: InputMaybe<SexFilterInput>;
};

export type AnimalSortInput = {
  animalType?: InputMaybe<AnimalTypeSortInput>;
  breed?: InputMaybe<BreedSortInput>;
  color?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  location?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  photoUrl?: InputMaybe<UriSortInput>;
  sex?: InputMaybe<SexSortInput>;
};

export type AnimalType = {
  __typename?: 'AnimalType';
  animalTypeId: Scalars['Int'];
  name: Scalars['String'];
};

export type AnimalTypeFilterInput = {
  and?: InputMaybe<Array<AnimalTypeFilterInput>>;
  animalTypeId?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AnimalTypeFilterInput>>;
};

export type AnimalTypeSortInput = {
  animalTypeId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type AnimalsConnection = {
  __typename?: 'AnimalsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AnimalsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Animal>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type AnimalsEdge = {
  __typename?: 'AnimalsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Animal;
};

export type Breed = {
  __typename?: 'Breed';
  breedId: Scalars['Int'];
  name: Scalars['String'];
};

export type BreedFilterInput = {
  and?: InputMaybe<Array<BreedFilterInput>>;
  breedId?: InputMaybe<IntOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<BreedFilterInput>>;
};

export type BreedSortInput = {
  breedId?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  animals?: Maybe<AnimalsConnection>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Lookup nodes by a list of IDs. */
  nodes: Array<Maybe<Node>>;
};


export type QueryAnimalsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<AnimalSortInput>>;
  where?: InputMaybe<AnimalFilterInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']>;
};

export type Sex = {
  __typename?: 'Sex';
  name: Scalars['String'];
  sexId: Scalars['Int'];
};

export type SexFilterInput = {
  and?: InputMaybe<Array<SexFilterInput>>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<SexFilterInput>>;
  sexId?: InputMaybe<IntOperationFilterInput>;
};

export type SexSortInput = {
  name?: InputMaybe<SortEnumType>;
  sexId?: InputMaybe<SortEnumType>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UriSortInput = {
  absolutePath?: InputMaybe<SortEnumType>;
  absoluteUri?: InputMaybe<SortEnumType>;
  authority?: InputMaybe<SortEnumType>;
  dnsSafeHost?: InputMaybe<SortEnumType>;
  fragment?: InputMaybe<SortEnumType>;
  host?: InputMaybe<SortEnumType>;
  hostNameType?: InputMaybe<SortEnumType>;
  idnHost?: InputMaybe<SortEnumType>;
  isAbsoluteUri?: InputMaybe<SortEnumType>;
  isDefaultPort?: InputMaybe<SortEnumType>;
  isFile?: InputMaybe<SortEnumType>;
  isLoopback?: InputMaybe<SortEnumType>;
  isUnc?: InputMaybe<SortEnumType>;
  localPath?: InputMaybe<SortEnumType>;
  originalString?: InputMaybe<SortEnumType>;
  pathAndQuery?: InputMaybe<SortEnumType>;
  port?: InputMaybe<SortEnumType>;
  query?: InputMaybe<SortEnumType>;
  scheme?: InputMaybe<SortEnumType>;
  userEscaped?: InputMaybe<SortEnumType>;
  userInfo?: InputMaybe<SortEnumType>;
};

export type UrlOperationFilterInput = {
  eq?: InputMaybe<Scalars['URL']>;
  gt?: InputMaybe<Scalars['URL']>;
  gte?: InputMaybe<Scalars['URL']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['URL']>>>;
  lt?: InputMaybe<Scalars['URL']>;
  lte?: InputMaybe<Scalars['URL']>;
  neq?: InputMaybe<Scalars['URL']>;
  ngt?: InputMaybe<Scalars['URL']>;
  ngte?: InputMaybe<Scalars['URL']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['URL']>>>;
  nlt?: InputMaybe<Scalars['URL']>;
  nlte?: InputMaybe<Scalars['URL']>;
};
