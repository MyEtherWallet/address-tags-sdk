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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Arbitrator = {
  __typename?: 'Arbitrator';
  /** The address of the arbitrator */
  id: Scalars['ID'];
};

export type Arbitrator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum Arbitrator_OrderBy {
  Id = 'id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Item = {
  __typename?: 'Item';
  /** The data describing the item. */
  data: Scalars['Bytes'];
  /** Whether the item is currently disputed. */
  disputed: Scalars['Boolean'];
  /** The id of the item in the subgraph entity. Format: <itemID>@<listaddress_lowercase> */
  id: Scalars['ID'];
  /** The ID of the item in the registry. Also the keccak256 hash of the data. */
  itemID: Scalars['Bytes'];
  /** The account that challenged the latest request, if any. */
  latestChallenger: Scalars['Bytes'];
  /** The time the latest request was resolved. */
  latestRequestResolutionTime: Scalars['BigInt'];
  /** Time when the latest request was made. */
  latestRequestSubmissionTime: Scalars['BigInt'];
  /** The account that made the latest request to the item. */
  latestRequester: Scalars['Bytes'];
  /** The total number of requests for this item. */
  numberOfRequests: Scalars['BigInt'];
  /** The registry where this item was submitted. */
  registry: Registry;
  /** The address of the registry this item was submitted. Redundant with registry field to allow use in conditionals. */
  registryAddress: Scalars['Bytes'];
  /** List of status change requests made for the item in the form requests[requestID]. */
  requests: Array<Request>;
  /** The current status of the item. */
  status: Status;
};


export type ItemRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Request_Filter>;
};

export type ItemProp = {
  __typename?: 'ItemProp';
  description: Scalars['String'];
  id: Scalars['ID'];
  isIdentifier: Scalars['Boolean'];
  item: LItem;
  label: Scalars['String'];
  type: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type ItemProp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isIdentifier?: InputMaybe<Scalars['Boolean']>;
  isIdentifier_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isIdentifier_not?: InputMaybe<Scalars['Boolean']>;
  isIdentifier_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  item?: InputMaybe<Scalars['String']>;
  item_?: InputMaybe<LItem_Filter>;
  item_contains?: InputMaybe<Scalars['String']>;
  item_contains_nocase?: InputMaybe<Scalars['String']>;
  item_ends_with?: InputMaybe<Scalars['String']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_gt?: InputMaybe<Scalars['String']>;
  item_gte?: InputMaybe<Scalars['String']>;
  item_in?: InputMaybe<Array<Scalars['String']>>;
  item_lt?: InputMaybe<Scalars['String']>;
  item_lte?: InputMaybe<Scalars['String']>;
  item_not?: InputMaybe<Scalars['String']>;
  item_not_contains?: InputMaybe<Scalars['String']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']>;
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_not_in?: InputMaybe<Array<Scalars['String']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  item_starts_with?: InputMaybe<Scalars['String']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  label_contains?: InputMaybe<Scalars['String']>;
  label_contains_nocase?: InputMaybe<Scalars['String']>;
  label_ends_with?: InputMaybe<Scalars['String']>;
  label_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_gt?: InputMaybe<Scalars['String']>;
  label_gte?: InputMaybe<Scalars['String']>;
  label_in?: InputMaybe<Array<Scalars['String']>>;
  label_lt?: InputMaybe<Scalars['String']>;
  label_lte?: InputMaybe<Scalars['String']>;
  label_not?: InputMaybe<Scalars['String']>;
  label_not_contains?: InputMaybe<Scalars['String']>;
  label_not_contains_nocase?: InputMaybe<Scalars['String']>;
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  label_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  label_not_in?: InputMaybe<Array<Scalars['String']>>;
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  label_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  label_starts_with?: InputMaybe<Scalars['String']>;
  label_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_contains_nocase?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ItemProp_OrderBy {
  Description = 'description',
  Id = 'id',
  IsIdentifier = 'isIdentifier',
  Item = 'item',
  Label = 'label',
  Type = 'type',
  Value = 'value'
}

export type Item_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  data?: InputMaybe<Scalars['Bytes']>;
  data_contains?: InputMaybe<Scalars['Bytes']>;
  data_in?: InputMaybe<Array<Scalars['Bytes']>>;
  data_not?: InputMaybe<Scalars['Bytes']>;
  data_not_contains?: InputMaybe<Scalars['Bytes']>;
  data_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  disputed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  disputed_not?: InputMaybe<Scalars['Boolean']>;
  disputed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  itemID?: InputMaybe<Scalars['Bytes']>;
  itemID_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemID_not?: InputMaybe<Scalars['Bytes']>;
  itemID_not_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestChallenger?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_contains?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestChallenger_not?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_not_contains?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestRequestResolutionTime?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_gt?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_gte?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestResolutionTime_lt?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_lte?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_not?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestSubmissionTime?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_gt?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_gte?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestSubmissionTime_lt?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_lte?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_not?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequester?: InputMaybe<Scalars['Bytes']>;
  latestRequester_contains?: InputMaybe<Scalars['Bytes']>;
  latestRequester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestRequester_not?: InputMaybe<Scalars['Bytes']>;
  latestRequester_not_contains?: InputMaybe<Scalars['Bytes']>;
  latestRequester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  numberOfRequests?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRequests_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registry?: InputMaybe<Scalars['String']>;
  registryAddress?: InputMaybe<Scalars['Bytes']>;
  registryAddress_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registryAddress_not?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registry_?: InputMaybe<Registry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_ends_with?: InputMaybe<Scalars['String']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_gt?: InputMaybe<Scalars['String']>;
  registry_gte?: InputMaybe<Scalars['String']>;
  registry_in?: InputMaybe<Array<Scalars['String']>>;
  registry_lt?: InputMaybe<Scalars['String']>;
  registry_lte?: InputMaybe<Scalars['String']>;
  registry_not?: InputMaybe<Scalars['String']>;
  registry_not_contains?: InputMaybe<Scalars['String']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registry_starts_with?: InputMaybe<Scalars['String']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requests_?: InputMaybe<Request_Filter>;
  status?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_not?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
};

export enum Item_OrderBy {
  Data = 'data',
  Disputed = 'disputed',
  Id = 'id',
  ItemId = 'itemID',
  LatestChallenger = 'latestChallenger',
  LatestRequestResolutionTime = 'latestRequestResolutionTime',
  LatestRequestSubmissionTime = 'latestRequestSubmissionTime',
  LatestRequester = 'latestRequester',
  NumberOfRequests = 'numberOfRequests',
  Registry = 'registry',
  RegistryAddress = 'registryAddress',
  Requests = 'requests',
  Status = 'status'
}

export type LContribution = {
  __typename?: 'LContribution';
  /** The address that made the contribution. */
  contributor: Scalars['Bytes'];
  /** The contribution ID. */
  id: Scalars['ID'];
  /** The round the contribution was made to. */
  round: LRound;
  /** To which side the contribution was made. */
  side: Scalars['BigInt'];
  /** Whether there are any withdrawable contributions. */
  withdrawable: Scalars['Boolean'];
};

export type LContribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contributor?: InputMaybe<Scalars['Bytes']>;
  contributor_contains?: InputMaybe<Scalars['Bytes']>;
  contributor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contributor_not?: InputMaybe<Scalars['Bytes']>;
  contributor_not_contains?: InputMaybe<Scalars['Bytes']>;
  contributor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  round?: InputMaybe<Scalars['String']>;
  round_?: InputMaybe<LRound_Filter>;
  round_contains?: InputMaybe<Scalars['String']>;
  round_contains_nocase?: InputMaybe<Scalars['String']>;
  round_ends_with?: InputMaybe<Scalars['String']>;
  round_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_gt?: InputMaybe<Scalars['String']>;
  round_gte?: InputMaybe<Scalars['String']>;
  round_in?: InputMaybe<Array<Scalars['String']>>;
  round_lt?: InputMaybe<Scalars['String']>;
  round_lte?: InputMaybe<Scalars['String']>;
  round_not?: InputMaybe<Scalars['String']>;
  round_not_contains?: InputMaybe<Scalars['String']>;
  round_not_contains_nocase?: InputMaybe<Scalars['String']>;
  round_not_ends_with?: InputMaybe<Scalars['String']>;
  round_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  round_not_in?: InputMaybe<Array<Scalars['String']>>;
  round_not_starts_with?: InputMaybe<Scalars['String']>;
  round_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  round_starts_with?: InputMaybe<Scalars['String']>;
  round_starts_with_nocase?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['BigInt']>;
  side_gt?: InputMaybe<Scalars['BigInt']>;
  side_gte?: InputMaybe<Scalars['BigInt']>;
  side_in?: InputMaybe<Array<Scalars['BigInt']>>;
  side_lt?: InputMaybe<Scalars['BigInt']>;
  side_lte?: InputMaybe<Scalars['BigInt']>;
  side_not?: InputMaybe<Scalars['BigInt']>;
  side_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  withdrawable?: InputMaybe<Scalars['Boolean']>;
  withdrawable_in?: InputMaybe<Array<Scalars['Boolean']>>;
  withdrawable_not?: InputMaybe<Scalars['Boolean']>;
  withdrawable_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
};

export enum LContribution_OrderBy {
  Contributor = 'contributor',
  Id = 'id',
  Round = 'round',
  Side = 'side',
  Withdrawable = 'withdrawable'
}

export type LItem = {
  __typename?: 'LItem';
  /** The data describing the item. */
  data: Scalars['String'];
  /** Whether the item is currently disputed. */
  disputed: Scalars['Boolean'];
  /** The id of the item in the subgraph entity. Format: <itemID>@<listaddress_lowercase> */
  id: Scalars['ID'];
  /** The ID of the item in the registry. Also the keccak256 hash of the data. */
  itemID: Scalars['Bytes'];
  /** The item identifiers combined as a single string. */
  keywords?: Maybe<Scalars['String']>;
  /** The account that challenged the latest request, if any. */
  latestChallenger: Scalars['Bytes'];
  /** The time the latest request was resolved. */
  latestRequestResolutionTime: Scalars['BigInt'];
  /** Time when the latest request was made. */
  latestRequestSubmissionTime: Scalars['BigInt'];
  /** The account that made the latest request to the item. */
  latestRequester: Scalars['Bytes'];
  /** The total number of requests for this item. */
  numberOfRequests: Scalars['BigInt'];
  /** The parsed data describing the item. */
  props: Array<ItemProp>;
  /** The registry where this item was submitted. */
  registry: LRegistry;
  /** The address of the registry this item was submitted. Redundant with registry field to allow use in conditionals. */
  registryAddress: Scalars['Bytes'];
  /** List of status change requests made for the item in the form requests[requestID]. */
  requests: Array<LRequest>;
  /** The current status of the item. */
  status: Status;
};


export type LItemPropsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemProp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ItemProp_Filter>;
};


export type LItemRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LRequest_Filter>;
};

export type LItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  data?: InputMaybe<Scalars['String']>;
  data_contains?: InputMaybe<Scalars['String']>;
  data_contains_nocase?: InputMaybe<Scalars['String']>;
  data_ends_with?: InputMaybe<Scalars['String']>;
  data_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_gt?: InputMaybe<Scalars['String']>;
  data_gte?: InputMaybe<Scalars['String']>;
  data_in?: InputMaybe<Array<Scalars['String']>>;
  data_lt?: InputMaybe<Scalars['String']>;
  data_lte?: InputMaybe<Scalars['String']>;
  data_not?: InputMaybe<Scalars['String']>;
  data_not_contains?: InputMaybe<Scalars['String']>;
  data_not_contains_nocase?: InputMaybe<Scalars['String']>;
  data_not_ends_with?: InputMaybe<Scalars['String']>;
  data_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  data_not_in?: InputMaybe<Array<Scalars['String']>>;
  data_not_starts_with?: InputMaybe<Scalars['String']>;
  data_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  data_starts_with?: InputMaybe<Scalars['String']>;
  data_starts_with_nocase?: InputMaybe<Scalars['String']>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  disputed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  disputed_not?: InputMaybe<Scalars['Boolean']>;
  disputed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  itemID?: InputMaybe<Scalars['Bytes']>;
  itemID_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemID_not?: InputMaybe<Scalars['Bytes']>;
  itemID_not_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  keywords?: InputMaybe<Scalars['String']>;
  keywords_contains?: InputMaybe<Scalars['String']>;
  keywords_contains_nocase?: InputMaybe<Scalars['String']>;
  keywords_ends_with?: InputMaybe<Scalars['String']>;
  keywords_ends_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_gt?: InputMaybe<Scalars['String']>;
  keywords_gte?: InputMaybe<Scalars['String']>;
  keywords_in?: InputMaybe<Array<Scalars['String']>>;
  keywords_lt?: InputMaybe<Scalars['String']>;
  keywords_lte?: InputMaybe<Scalars['String']>;
  keywords_not?: InputMaybe<Scalars['String']>;
  keywords_not_contains?: InputMaybe<Scalars['String']>;
  keywords_not_contains_nocase?: InputMaybe<Scalars['String']>;
  keywords_not_ends_with?: InputMaybe<Scalars['String']>;
  keywords_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_not_in?: InputMaybe<Array<Scalars['String']>>;
  keywords_not_starts_with?: InputMaybe<Scalars['String']>;
  keywords_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  keywords_starts_with?: InputMaybe<Scalars['String']>;
  keywords_starts_with_nocase?: InputMaybe<Scalars['String']>;
  latestChallenger?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_contains?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestChallenger_not?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_not_contains?: InputMaybe<Scalars['Bytes']>;
  latestChallenger_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestRequestResolutionTime?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_gt?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_gte?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestResolutionTime_lt?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_lte?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_not?: InputMaybe<Scalars['BigInt']>;
  latestRequestResolutionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestSubmissionTime?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_gt?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_gte?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequestSubmissionTime_lt?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_lte?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_not?: InputMaybe<Scalars['BigInt']>;
  latestRequestSubmissionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  latestRequester?: InputMaybe<Scalars['Bytes']>;
  latestRequester_contains?: InputMaybe<Scalars['Bytes']>;
  latestRequester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  latestRequester_not?: InputMaybe<Scalars['Bytes']>;
  latestRequester_not_contains?: InputMaybe<Scalars['Bytes']>;
  latestRequester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  numberOfRequests?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRequests_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  props_?: InputMaybe<ItemProp_Filter>;
  registry?: InputMaybe<Scalars['String']>;
  registryAddress?: InputMaybe<Scalars['Bytes']>;
  registryAddress_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registryAddress_not?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registry_?: InputMaybe<LRegistry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_ends_with?: InputMaybe<Scalars['String']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_gt?: InputMaybe<Scalars['String']>;
  registry_gte?: InputMaybe<Scalars['String']>;
  registry_in?: InputMaybe<Array<Scalars['String']>>;
  registry_lt?: InputMaybe<Scalars['String']>;
  registry_lte?: InputMaybe<Scalars['String']>;
  registry_not?: InputMaybe<Scalars['String']>;
  registry_not_contains?: InputMaybe<Scalars['String']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registry_starts_with?: InputMaybe<Scalars['String']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requests_?: InputMaybe<LRequest_Filter>;
  status?: InputMaybe<Status>;
  status_in?: InputMaybe<Array<Status>>;
  status_not?: InputMaybe<Status>;
  status_not_in?: InputMaybe<Array<Status>>;
};

export enum LItem_OrderBy {
  Data = 'data',
  Disputed = 'disputed',
  Id = 'id',
  ItemId = 'itemID',
  Keywords = 'keywords',
  LatestChallenger = 'latestChallenger',
  LatestRequestResolutionTime = 'latestRequestResolutionTime',
  LatestRequestSubmissionTime = 'latestRequestSubmissionTime',
  LatestRequester = 'latestRequester',
  NumberOfRequests = 'numberOfRequests',
  Props = 'props',
  Registry = 'registry',
  RegistryAddress = 'registryAddress',
  Requests = 'requests',
  Status = 'status'
}

export type LRegistry = {
  __typename?: 'LRegistry';
  /** The current removal meta evidence */
  clearingMetaEvidence: MetaEvidence;
  /** The registry address */
  id: Scalars['ID'];
  /** The items submitted to this list */
  items: Array<LItem>;
  /** The number of MetaEvidence event logs emitted. */
  metaEvidenceCount: Scalars['BigInt'];
  /** The total number of items in absent state. */
  numberOfAbsent: Scalars['BigInt'];
  /** The total number of items in the challenged removal state. */
  numberOfChallengedClearing: Scalars['BigInt'];
  /** The total number of items in the challenged registration state. */
  numberOfChallengedRegistrations: Scalars['BigInt'];
  numberOfClearingRequested: Scalars['BigInt'];
  /** The total number of items in registered state. */
  numberOfRegistered: Scalars['BigInt'];
  /** The total number of items in the registration requested state. */
  numberOfRegistrationRequested: Scalars['BigInt'];
  /** The current registration meta evidence */
  registrationMetaEvidence: MetaEvidence;
  /** The requests submitted to this list */
  requests: Array<LRequest>;
};


export type LRegistryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LItem_Filter>;
};


export type LRegistryRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LRequest_Filter>;
};

export type LRegistry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  clearingMetaEvidence?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  clearingMetaEvidence_contains?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_gt?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_gte?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  clearingMetaEvidence_lt?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_lte?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  clearingMetaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  items_?: InputMaybe<LItem_Filter>;
  metaEvidenceCount?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_gt?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_gte?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  metaEvidenceCount_lt?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_lte?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_not?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfAbsent?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfAbsent_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_not?: InputMaybe<Scalars['BigInt']>;
  numberOfAbsent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfChallengedClearing?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfChallengedClearing_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_not?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedClearing_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfChallengedRegistrations?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfChallengedRegistrations_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_not?: InputMaybe<Scalars['BigInt']>;
  numberOfChallengedRegistrations_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfClearingRequested?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfClearingRequested_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_not?: InputMaybe<Scalars['BigInt']>;
  numberOfClearingRequested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegistered?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegistered_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistered_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegistrationRequested?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRegistrationRequested_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRegistrationRequested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationMetaEvidence?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  registrationMetaEvidence_contains?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_gt?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_gte?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  registrationMetaEvidence_lt?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_lte?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrationMetaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requests_?: InputMaybe<LRequest_Filter>;
};

export enum LRegistry_OrderBy {
  ClearingMetaEvidence = 'clearingMetaEvidence',
  Id = 'id',
  Items = 'items',
  MetaEvidenceCount = 'metaEvidenceCount',
  NumberOfAbsent = 'numberOfAbsent',
  NumberOfChallengedClearing = 'numberOfChallengedClearing',
  NumberOfChallengedRegistrations = 'numberOfChallengedRegistrations',
  NumberOfClearingRequested = 'numberOfClearingRequested',
  NumberOfRegistered = 'numberOfRegistered',
  NumberOfRegistrationRequested = 'numberOfRegistrationRequested',
  RegistrationMetaEvidence = 'registrationMetaEvidence',
  Requests = 'requests'
}

export type LRequest = {
  __typename?: 'LRequest';
  /** The arbitrator trusted to solve disputes for this request. */
  arbitrator: Scalars['Bytes'];
  /** The extra data for the trusted arbitrator of this request. */
  arbitratorExtraData: Scalars['Bytes'];
  /** The address of the party that challenged the request */
  challenger: Scalars['Bytes'];
  /** The hash of the transaction that created this request. */
  creationTx: Scalars['Bytes'];
  /** ID of the dispute, if any. */
  disputeID: Scalars['BigInt'];
  /** The outcome of the dispute, if any. Note that unsuccessful appeal fundings can invert the arbitrator ruling (so this may differ from the ruling given by the arbitrator). */
  disputeOutcome: Ruling;
  /** True if a dispute was raised. */
  disputed: Scalars['Boolean'];
  /** The ID of the evidence group for this request. */
  evidenceGroupID: Scalars['BigInt'];
  /** The item ID (which is the keccak256 hash of its data). */
  id: Scalars['ID'];
  /** The item this request belongs to. */
  item: LItem;
  /** The URI to the meta evidence used for this request. */
  metaEvidence: MetaEvidence;
  /** The total number of rounds on this request. */
  numberOfRounds: Scalars['BigInt'];
  /** The registry where this request was submitted. */
  registry: LRegistry;
  /** The address of the registry this item was submitted. Redundant with registry field to allow use in conditionals. */
  registryAddress: Scalars['Bytes'];
  /** Whether it was requested to add or remove the item to/from the list. */
  requestType: Status;
  /** The address of the party that made a request */
  requester: Scalars['Bytes'];
  /** The time the request was resolved. */
  resolutionTime: Scalars['BigInt'];
  /** The hash of the transaction that solved this request. */
  resolutionTx?: Maybe<Scalars['Bytes']>;
  /** True if the request was executed and/or any raised disputes were resolved. */
  resolved: Scalars['Boolean'];
  /** Tracks each round of a dispute in the form rounds[roundID]. */
  rounds: Array<LRound>;
  /** Time when the request was made. Used to track when the challenge period ends. */
  submissionTime: Scalars['BigInt'];
};


export type LRequestRoundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LRound_Filter>;
};

export type LRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_not?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  challenger?: InputMaybe<Scalars['Bytes']>;
  challenger_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_in?: InputMaybe<Array<Scalars['Bytes']>>;
  challenger_not?: InputMaybe<Scalars['Bytes']>;
  challenger_not_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTx?: InputMaybe<Scalars['Bytes']>;
  creationTx_contains?: InputMaybe<Scalars['Bytes']>;
  creationTx_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTx_not?: InputMaybe<Scalars['Bytes']>;
  creationTx_not_contains?: InputMaybe<Scalars['Bytes']>;
  creationTx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeID?: InputMaybe<Scalars['BigInt']>;
  disputeID_gt?: InputMaybe<Scalars['BigInt']>;
  disputeID_gte?: InputMaybe<Scalars['BigInt']>;
  disputeID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeID_lt?: InputMaybe<Scalars['BigInt']>;
  disputeID_lte?: InputMaybe<Scalars['BigInt']>;
  disputeID_not?: InputMaybe<Scalars['BigInt']>;
  disputeID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeOutcome?: InputMaybe<Ruling>;
  disputeOutcome_in?: InputMaybe<Array<Ruling>>;
  disputeOutcome_not?: InputMaybe<Ruling>;
  disputeOutcome_not_in?: InputMaybe<Array<Ruling>>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  disputed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  disputed_not?: InputMaybe<Scalars['Boolean']>;
  disputed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  evidenceGroupID?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_gt?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_gte?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  evidenceGroupID_lt?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_lte?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_not?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  item?: InputMaybe<Scalars['String']>;
  item_?: InputMaybe<LItem_Filter>;
  item_contains?: InputMaybe<Scalars['String']>;
  item_contains_nocase?: InputMaybe<Scalars['String']>;
  item_ends_with?: InputMaybe<Scalars['String']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_gt?: InputMaybe<Scalars['String']>;
  item_gte?: InputMaybe<Scalars['String']>;
  item_in?: InputMaybe<Array<Scalars['String']>>;
  item_lt?: InputMaybe<Scalars['String']>;
  item_lte?: InputMaybe<Scalars['String']>;
  item_not?: InputMaybe<Scalars['String']>;
  item_not_contains?: InputMaybe<Scalars['String']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']>;
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_not_in?: InputMaybe<Array<Scalars['String']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  item_starts_with?: InputMaybe<Scalars['String']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence?: InputMaybe<Scalars['String']>;
  metaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  metaEvidence_contains?: InputMaybe<Scalars['String']>;
  metaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_gt?: InputMaybe<Scalars['String']>;
  metaEvidence_gte?: InputMaybe<Scalars['String']>;
  metaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidence_lt?: InputMaybe<Scalars['String']>;
  metaEvidence_lte?: InputMaybe<Scalars['String']>;
  metaEvidence_not?: InputMaybe<Scalars['String']>;
  metaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  metaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfRounds?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRounds_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registry?: InputMaybe<Scalars['String']>;
  registryAddress?: InputMaybe<Scalars['Bytes']>;
  registryAddress_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registryAddress_not?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registry_?: InputMaybe<LRegistry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_ends_with?: InputMaybe<Scalars['String']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_gt?: InputMaybe<Scalars['String']>;
  registry_gte?: InputMaybe<Scalars['String']>;
  registry_in?: InputMaybe<Array<Scalars['String']>>;
  registry_lt?: InputMaybe<Scalars['String']>;
  registry_lte?: InputMaybe<Scalars['String']>;
  registry_not?: InputMaybe<Scalars['String']>;
  registry_not_contains?: InputMaybe<Scalars['String']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registry_starts_with?: InputMaybe<Scalars['String']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestType?: InputMaybe<Status>;
  requestType_in?: InputMaybe<Array<Status>>;
  requestType_not?: InputMaybe<Status>;
  requestType_not_in?: InputMaybe<Array<Status>>;
  requester?: InputMaybe<Scalars['Bytes']>;
  requester_contains?: InputMaybe<Scalars['Bytes']>;
  requester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requester_not?: InputMaybe<Scalars['Bytes']>;
  requester_not_contains?: InputMaybe<Scalars['Bytes']>;
  requester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolutionTime?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolutionTime_lt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_lte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolutionTx?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_contains?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolutionTx_not?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  resolved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  resolved_not?: InputMaybe<Scalars['Boolean']>;
  resolved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rounds_?: InputMaybe<LRound_Filter>;
  submissionTime?: InputMaybe<Scalars['BigInt']>;
  submissionTime_gt?: InputMaybe<Scalars['BigInt']>;
  submissionTime_gte?: InputMaybe<Scalars['BigInt']>;
  submissionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  submissionTime_lt?: InputMaybe<Scalars['BigInt']>;
  submissionTime_lte?: InputMaybe<Scalars['BigInt']>;
  submissionTime_not?: InputMaybe<Scalars['BigInt']>;
  submissionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum LRequest_OrderBy {
  Arbitrator = 'arbitrator',
  ArbitratorExtraData = 'arbitratorExtraData',
  Challenger = 'challenger',
  CreationTx = 'creationTx',
  DisputeId = 'disputeID',
  DisputeOutcome = 'disputeOutcome',
  Disputed = 'disputed',
  EvidenceGroupId = 'evidenceGroupID',
  Id = 'id',
  Item = 'item',
  MetaEvidence = 'metaEvidence',
  NumberOfRounds = 'numberOfRounds',
  Registry = 'registry',
  RegistryAddress = 'registryAddress',
  RequestType = 'requestType',
  Requester = 'requester',
  ResolutionTime = 'resolutionTime',
  ResolutionTx = 'resolutionTx',
  Resolved = 'resolved',
  Rounds = 'rounds',
  SubmissionTime = 'submissionTime'
}

export type LRound = {
  __typename?: 'LRound';
  /** The total amount of appeal fees contributed to the challenger in this round. */
  amountPaidChallenger: Scalars['BigInt'];
  /** The total amount of appeal fees contributed to the requester in this round. */
  amountPaidRequester: Scalars['BigInt'];
  /** The time the appeal period ends, if in the appeal period. */
  appealPeriodEnd: Scalars['BigInt'];
  /** The time the appeal period starts, if in the appeal period. */
  appealPeriodStart: Scalars['BigInt'];
  /** Whether this round was appealed. */
  appealed: Scalars['Boolean'];
  /** The contributions made to this round. */
  contributions: Array<LContribution>;
  /** The moment the round was created. */
  creationTime: Scalars['BigInt'];
  /** Sum of reimbursable fees and stake rewards available to the parties that made contributions to the side that ultimately wins a dispute. */
  feeRewards: Scalars['BigInt'];
  /** Whether the challenger is fully funded. */
  hasPaidChallenger: Scalars['Boolean'];
  /** Whether the requester is fully funded. */
  hasPaidRequester: Scalars['Boolean'];
  id: Scalars['ID'];
  /** The number of contributions made to this round */
  numberOfContributions: Scalars['BigInt'];
  /** The request to which this round belongs. */
  request: LRequest;
  /** The ruling given by the arbitrator. */
  ruling: Ruling;
  /** The time the round received the ruling. */
  rulingTime: Scalars['BigInt'];
};


export type LRoundContributionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LContribution_Filter>;
};

export type LRound_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountPaidChallenger?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidChallenger_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_not?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidRequester?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidRequester_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_not?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodEnd?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_gt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_gte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodEnd_lt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_lte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_not?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodStart?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_gt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_gte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodStart_lt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_lte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_not?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealed?: InputMaybe<Scalars['Boolean']>;
  appealed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  appealed_not?: InputMaybe<Scalars['Boolean']>;
  appealed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  contributions_?: InputMaybe<LContribution_Filter>;
  creationTime?: InputMaybe<Scalars['BigInt']>;
  creationTime_gt?: InputMaybe<Scalars['BigInt']>;
  creationTime_gte?: InputMaybe<Scalars['BigInt']>;
  creationTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationTime_lt?: InputMaybe<Scalars['BigInt']>;
  creationTime_lte?: InputMaybe<Scalars['BigInt']>;
  creationTime_not?: InputMaybe<Scalars['BigInt']>;
  creationTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRewards?: InputMaybe<Scalars['BigInt']>;
  feeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  feeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  feeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  feeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  feeRewards_not?: InputMaybe<Scalars['BigInt']>;
  feeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hasPaidChallenger?: InputMaybe<Scalars['Boolean']>;
  hasPaidChallenger_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidChallenger_not?: InputMaybe<Scalars['Boolean']>;
  hasPaidChallenger_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidRequester?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidRequester_not?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfContributions?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfContributions_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_not?: InputMaybe<Scalars['BigInt']>;
  numberOfContributions_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  request?: InputMaybe<Scalars['String']>;
  request_?: InputMaybe<LRequest_Filter>;
  request_contains?: InputMaybe<Scalars['String']>;
  request_contains_nocase?: InputMaybe<Scalars['String']>;
  request_ends_with?: InputMaybe<Scalars['String']>;
  request_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_gt?: InputMaybe<Scalars['String']>;
  request_gte?: InputMaybe<Scalars['String']>;
  request_in?: InputMaybe<Array<Scalars['String']>>;
  request_lt?: InputMaybe<Scalars['String']>;
  request_lte?: InputMaybe<Scalars['String']>;
  request_not?: InputMaybe<Scalars['String']>;
  request_not_contains?: InputMaybe<Scalars['String']>;
  request_not_contains_nocase?: InputMaybe<Scalars['String']>;
  request_not_ends_with?: InputMaybe<Scalars['String']>;
  request_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_not_in?: InputMaybe<Array<Scalars['String']>>;
  request_not_starts_with?: InputMaybe<Scalars['String']>;
  request_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  request_starts_with?: InputMaybe<Scalars['String']>;
  request_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ruling?: InputMaybe<Ruling>;
  rulingTime?: InputMaybe<Scalars['BigInt']>;
  rulingTime_gt?: InputMaybe<Scalars['BigInt']>;
  rulingTime_gte?: InputMaybe<Scalars['BigInt']>;
  rulingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rulingTime_lt?: InputMaybe<Scalars['BigInt']>;
  rulingTime_lte?: InputMaybe<Scalars['BigInt']>;
  rulingTime_not?: InputMaybe<Scalars['BigInt']>;
  rulingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruling_in?: InputMaybe<Array<Ruling>>;
  ruling_not?: InputMaybe<Ruling>;
  ruling_not_in?: InputMaybe<Array<Ruling>>;
};

export enum LRound_OrderBy {
  AmountPaidChallenger = 'amountPaidChallenger',
  AmountPaidRequester = 'amountPaidRequester',
  AppealPeriodEnd = 'appealPeriodEnd',
  AppealPeriodStart = 'appealPeriodStart',
  Appealed = 'appealed',
  Contributions = 'contributions',
  CreationTime = 'creationTime',
  FeeRewards = 'feeRewards',
  HasPaidChallenger = 'hasPaidChallenger',
  HasPaidRequester = 'hasPaidRequester',
  Id = 'id',
  NumberOfContributions = 'numberOfContributions',
  Request = 'request',
  Ruling = 'ruling',
  RulingTime = 'rulingTime'
}

export type MetaEvidence = {
  __typename?: 'MetaEvidence';
  /** The URI of the meta evidence file. */
  URI: Scalars['String'];
  /** The meta evidence ID. */
  id: Scalars['ID'];
};

export type MetaEvidence_Filter = {
  URI?: InputMaybe<Scalars['String']>;
  URI_contains?: InputMaybe<Scalars['String']>;
  URI_contains_nocase?: InputMaybe<Scalars['String']>;
  URI_ends_with?: InputMaybe<Scalars['String']>;
  URI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  URI_gt?: InputMaybe<Scalars['String']>;
  URI_gte?: InputMaybe<Scalars['String']>;
  URI_in?: InputMaybe<Array<Scalars['String']>>;
  URI_lt?: InputMaybe<Scalars['String']>;
  URI_lte?: InputMaybe<Scalars['String']>;
  URI_not?: InputMaybe<Scalars['String']>;
  URI_not_contains?: InputMaybe<Scalars['String']>;
  URI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  URI_not_ends_with?: InputMaybe<Scalars['String']>;
  URI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  URI_not_in?: InputMaybe<Array<Scalars['String']>>;
  URI_not_starts_with?: InputMaybe<Scalars['String']>;
  URI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  URI_starts_with?: InputMaybe<Scalars['String']>;
  URI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum MetaEvidence_OrderBy {
  Uri = 'URI',
  Id = 'id'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrator?: Maybe<Arbitrator>;
  arbitrators: Array<Arbitrator>;
  item?: Maybe<Item>;
  itemProp?: Maybe<ItemProp>;
  itemProps: Array<ItemProp>;
  itemSearch: Array<LItem>;
  items: Array<Item>;
  lcontribution?: Maybe<LContribution>;
  lcontributions: Array<LContribution>;
  litem?: Maybe<LItem>;
  litems: Array<LItem>;
  lregistries: Array<LRegistry>;
  lregistry?: Maybe<LRegistry>;
  lrequest?: Maybe<LRequest>;
  lrequests: Array<LRequest>;
  lround?: Maybe<LRound>;
  lrounds: Array<LRound>;
  metaEvidence?: Maybe<MetaEvidence>;
  metaEvidences: Array<MetaEvidence>;
  registries: Array<Registry>;
  registry?: Maybe<Registry>;
  request?: Maybe<Request>;
  requests: Array<Request>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryArbitratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryArbitratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Arbitrator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Arbitrator_Filter>;
};


export type QueryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemPropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemPropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemProp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemProp_Filter>;
};


export type QueryItemSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars['String'];
};


export type QueryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type QueryLcontributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLcontributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LContribution_Filter>;
};


export type QueryLitemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLitemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LItem_Filter>;
};


export type QueryLregistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRegistry_Filter>;
};


export type QueryLregistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLrequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLrequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRequest_Filter>;
};


export type QueryLroundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLroundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRound_Filter>;
};


export type QueryMetaEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMetaEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaEvidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaEvidence_Filter>;
};


export type QueryRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Registry_Filter>;
};


export type QueryRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Request_Filter>;
};


export type QueryRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Round_Filter>;
};

export type Registry = {
  __typename?: 'Registry';
  /** The current removal meta evidence */
  clearingMetaEvidence: MetaEvidence;
  /** The registry address */
  id: Scalars['ID'];
  /** The items submitted to this list */
  items: Array<Item>;
  /** The number of MetaEvidence event logs emitted. */
  metaEvidenceCount: Scalars['BigInt'];
  /** The number of items submitted to the list. */
  numberOfItems: Scalars['BigInt'];
  /** The current registration meta evidence */
  registrationMetaEvidence: MetaEvidence;
  /** The requests submitted to this list */
  requests: Array<Request>;
};


export type RegistryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Item_Filter>;
};


export type RegistryRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Request_Filter>;
};

export type Registry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  clearingMetaEvidence?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  clearingMetaEvidence_contains?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_gt?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_gte?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  clearingMetaEvidence_lt?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_lte?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  clearingMetaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  clearingMetaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  items_?: InputMaybe<Item_Filter>;
  metaEvidenceCount?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_gt?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_gte?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  metaEvidenceCount_lt?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_lte?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_not?: InputMaybe<Scalars['BigInt']>;
  metaEvidenceCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfItems?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfItems_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_not?: InputMaybe<Scalars['BigInt']>;
  numberOfItems_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationMetaEvidence?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  registrationMetaEvidence_contains?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_gt?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_gte?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  registrationMetaEvidence_lt?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_lte?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrationMetaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  registrationMetaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requests_?: InputMaybe<Request_Filter>;
};

export enum Registry_OrderBy {
  ClearingMetaEvidence = 'clearingMetaEvidence',
  Id = 'id',
  Items = 'items',
  MetaEvidenceCount = 'metaEvidenceCount',
  NumberOfItems = 'numberOfItems',
  RegistrationMetaEvidence = 'registrationMetaEvidence',
  Requests = 'requests'
}

export type Request = {
  __typename?: 'Request';
  /** The arbitrator trusted to solve disputes for this request. */
  arbitrator: Scalars['Bytes'];
  /** The extra data for the trusted arbitrator of this request. */
  arbitratorExtraData: Scalars['Bytes'];
  /** The address of the party that challenged the request */
  challenger: Scalars['Bytes'];
  /** ID of the dispute, if any. */
  disputeID: Scalars['BigInt'];
  /** The outcome of the dispute, if any. Note that unsuccessful appeal fundings can invert the arbitrator ruling (so this may differ from the ruling given by the arbitrator). */
  disputeOutcome: Ruling;
  /** True if a dispute was raised. */
  disputed: Scalars['Boolean'];
  /** The ID of the evidence group for this request. */
  evidenceGroupID: Scalars['BigInt'];
  /** The item ID (which is the keccak256 hash of its data). */
  id: Scalars['ID'];
  /** The item this request belongs to. */
  item: Item;
  /** The URI to the meta evidence used for this request. */
  metaEvidence: MetaEvidence;
  /** The total number of rounds on this request. */
  numberOfRounds: Scalars['BigInt'];
  /** The registry where this request was submitted. */
  registry: Registry;
  /** The address of the registry this item was submitted. Redundant with registry field to allow use in conditionals. */
  registryAddress: Scalars['Bytes'];
  /** Whether it was requested to add or remove the item to/from the list. */
  requestType: Status;
  /** The address of the party that made a request */
  requester: Scalars['Bytes'];
  /** The time the request was resolved. */
  resolutionTime: Scalars['BigInt'];
  /** True if the request was executed and/or any raised disputes were resolved. */
  resolved: Scalars['Boolean'];
  /** Tracks each round of a dispute in the form rounds[roundID]. */
  rounds: Array<Round>;
  /** Time when the request was made. Used to track when the challenge period ends. */
  submissionTime: Scalars['BigInt'];
};


export type RequestRoundsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Round_Filter>;
};

export type Request_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitratorExtraData_not?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitratorExtraData_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  challenger?: InputMaybe<Scalars['Bytes']>;
  challenger_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_in?: InputMaybe<Array<Scalars['Bytes']>>;
  challenger_not?: InputMaybe<Scalars['Bytes']>;
  challenger_not_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  disputeID?: InputMaybe<Scalars['BigInt']>;
  disputeID_gt?: InputMaybe<Scalars['BigInt']>;
  disputeID_gte?: InputMaybe<Scalars['BigInt']>;
  disputeID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeID_lt?: InputMaybe<Scalars['BigInt']>;
  disputeID_lte?: InputMaybe<Scalars['BigInt']>;
  disputeID_not?: InputMaybe<Scalars['BigInt']>;
  disputeID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeOutcome?: InputMaybe<Ruling>;
  disputeOutcome_in?: InputMaybe<Array<Ruling>>;
  disputeOutcome_not?: InputMaybe<Ruling>;
  disputeOutcome_not_in?: InputMaybe<Array<Ruling>>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  disputed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  disputed_not?: InputMaybe<Scalars['Boolean']>;
  disputed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  evidenceGroupID?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_gt?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_gte?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  evidenceGroupID_lt?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_lte?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_not?: InputMaybe<Scalars['BigInt']>;
  evidenceGroupID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  item?: InputMaybe<Scalars['String']>;
  item_?: InputMaybe<Item_Filter>;
  item_contains?: InputMaybe<Scalars['String']>;
  item_contains_nocase?: InputMaybe<Scalars['String']>;
  item_ends_with?: InputMaybe<Scalars['String']>;
  item_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_gt?: InputMaybe<Scalars['String']>;
  item_gte?: InputMaybe<Scalars['String']>;
  item_in?: InputMaybe<Array<Scalars['String']>>;
  item_lt?: InputMaybe<Scalars['String']>;
  item_lte?: InputMaybe<Scalars['String']>;
  item_not?: InputMaybe<Scalars['String']>;
  item_not_contains?: InputMaybe<Scalars['String']>;
  item_not_contains_nocase?: InputMaybe<Scalars['String']>;
  item_not_ends_with?: InputMaybe<Scalars['String']>;
  item_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  item_not_in?: InputMaybe<Array<Scalars['String']>>;
  item_not_starts_with?: InputMaybe<Scalars['String']>;
  item_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  item_starts_with?: InputMaybe<Scalars['String']>;
  item_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence?: InputMaybe<Scalars['String']>;
  metaEvidence_?: InputMaybe<MetaEvidence_Filter>;
  metaEvidence_contains?: InputMaybe<Scalars['String']>;
  metaEvidence_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidence_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_gt?: InputMaybe<Scalars['String']>;
  metaEvidence_gte?: InputMaybe<Scalars['String']>;
  metaEvidence_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidence_lt?: InputMaybe<Scalars['String']>;
  metaEvidence_lte?: InputMaybe<Scalars['String']>;
  metaEvidence_not?: InputMaybe<Scalars['String']>;
  metaEvidence_not_contains?: InputMaybe<Scalars['String']>;
  metaEvidence_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_not_ends_with?: InputMaybe<Scalars['String']>;
  metaEvidence_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_not_in?: InputMaybe<Array<Scalars['String']>>;
  metaEvidence_not_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidence_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metaEvidence_starts_with?: InputMaybe<Scalars['String']>;
  metaEvidence_starts_with_nocase?: InputMaybe<Scalars['String']>;
  numberOfRounds?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRounds_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRounds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registry?: InputMaybe<Scalars['String']>;
  registryAddress?: InputMaybe<Scalars['Bytes']>;
  registryAddress_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registryAddress_not?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  registryAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  registry_?: InputMaybe<Registry_Filter>;
  registry_contains?: InputMaybe<Scalars['String']>;
  registry_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_ends_with?: InputMaybe<Scalars['String']>;
  registry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_gt?: InputMaybe<Scalars['String']>;
  registry_gte?: InputMaybe<Scalars['String']>;
  registry_in?: InputMaybe<Array<Scalars['String']>>;
  registry_lt?: InputMaybe<Scalars['String']>;
  registry_lte?: InputMaybe<Scalars['String']>;
  registry_not?: InputMaybe<Scalars['String']>;
  registry_not_contains?: InputMaybe<Scalars['String']>;
  registry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registry_not_ends_with?: InputMaybe<Scalars['String']>;
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registry_not_in?: InputMaybe<Array<Scalars['String']>>;
  registry_not_starts_with?: InputMaybe<Scalars['String']>;
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registry_starts_with?: InputMaybe<Scalars['String']>;
  registry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  requestType?: InputMaybe<Status>;
  requestType_in?: InputMaybe<Array<Status>>;
  requestType_not?: InputMaybe<Status>;
  requestType_not_in?: InputMaybe<Array<Status>>;
  requester?: InputMaybe<Scalars['Bytes']>;
  requester_contains?: InputMaybe<Scalars['Bytes']>;
  requester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requester_not?: InputMaybe<Scalars['Bytes']>;
  requester_not_contains?: InputMaybe<Scalars['Bytes']>;
  requester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolutionTime?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolutionTime_lt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_lte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  resolved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  resolved_not?: InputMaybe<Scalars['Boolean']>;
  resolved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  rounds_?: InputMaybe<Round_Filter>;
  submissionTime?: InputMaybe<Scalars['BigInt']>;
  submissionTime_gt?: InputMaybe<Scalars['BigInt']>;
  submissionTime_gte?: InputMaybe<Scalars['BigInt']>;
  submissionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  submissionTime_lt?: InputMaybe<Scalars['BigInt']>;
  submissionTime_lte?: InputMaybe<Scalars['BigInt']>;
  submissionTime_not?: InputMaybe<Scalars['BigInt']>;
  submissionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Request_OrderBy {
  Arbitrator = 'arbitrator',
  ArbitratorExtraData = 'arbitratorExtraData',
  Challenger = 'challenger',
  DisputeId = 'disputeID',
  DisputeOutcome = 'disputeOutcome',
  Disputed = 'disputed',
  EvidenceGroupId = 'evidenceGroupID',
  Id = 'id',
  Item = 'item',
  MetaEvidence = 'metaEvidence',
  NumberOfRounds = 'numberOfRounds',
  Registry = 'registry',
  RegistryAddress = 'registryAddress',
  RequestType = 'requestType',
  Requester = 'requester',
  ResolutionTime = 'resolutionTime',
  Resolved = 'resolved',
  Rounds = 'rounds',
  SubmissionTime = 'submissionTime'
}

export type Round = {
  __typename?: 'Round';
  /** The total amount of appeal fees contributed to the challenger in this round. */
  amountPaidChallenger: Scalars['BigInt'];
  /** The total amount of appeal fees contributed to the requester in this round. */
  amountPaidRequester: Scalars['BigInt'];
  /** The time the appeal period ends, if in the appeal period. */
  appealPeriodEnd: Scalars['BigInt'];
  /** The time the appeal period starts, if in the appeal period. */
  appealPeriodStart: Scalars['BigInt'];
  /** The moment the round was created. */
  creationTime: Scalars['BigInt'];
  /** Sum of reimbursable fees and stake rewards available to the parties that made contributions to the side that ultimately wins a dispute. */
  feeRewards: Scalars['BigInt'];
  /** Whether the challenger is fully funded. */
  hasPaidChallenger: Scalars['Boolean'];
  /** Whether the requester is fully funded. */
  hasPaidRequester: Scalars['Boolean'];
  id: Scalars['ID'];
  /** The request to which this round belongs. */
  request: Request;
  /** The ruling given by the arbitrator. */
  ruling: Ruling;
  /** The time the round received the ruling. */
  rulingTime: Scalars['BigInt'];
};

export type Round_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountPaidChallenger?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidChallenger_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_not?: InputMaybe<Scalars['BigInt']>;
  amountPaidChallenger_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidRequester?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_gt?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_gte?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPaidRequester_lt?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_lte?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_not?: InputMaybe<Scalars['BigInt']>;
  amountPaidRequester_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodEnd?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_gt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_gte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodEnd_lt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_lte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_not?: InputMaybe<Scalars['BigInt']>;
  appealPeriodEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodStart?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_gt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_gte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_in?: InputMaybe<Array<Scalars['BigInt']>>;
  appealPeriodStart_lt?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_lte?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_not?: InputMaybe<Scalars['BigInt']>;
  appealPeriodStart_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationTime?: InputMaybe<Scalars['BigInt']>;
  creationTime_gt?: InputMaybe<Scalars['BigInt']>;
  creationTime_gte?: InputMaybe<Scalars['BigInt']>;
  creationTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creationTime_lt?: InputMaybe<Scalars['BigInt']>;
  creationTime_lte?: InputMaybe<Scalars['BigInt']>;
  creationTime_not?: InputMaybe<Scalars['BigInt']>;
  creationTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRewards?: InputMaybe<Scalars['BigInt']>;
  feeRewards_gt?: InputMaybe<Scalars['BigInt']>;
  feeRewards_gte?: InputMaybe<Scalars['BigInt']>;
  feeRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRewards_lt?: InputMaybe<Scalars['BigInt']>;
  feeRewards_lte?: InputMaybe<Scalars['BigInt']>;
  feeRewards_not?: InputMaybe<Scalars['BigInt']>;
  feeRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hasPaidChallenger?: InputMaybe<Scalars['Boolean']>;
  hasPaidChallenger_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidChallenger_not?: InputMaybe<Scalars['Boolean']>;
  hasPaidChallenger_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidRequester?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester_in?: InputMaybe<Array<Scalars['Boolean']>>;
  hasPaidRequester_not?: InputMaybe<Scalars['Boolean']>;
  hasPaidRequester_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  request?: InputMaybe<Scalars['String']>;
  request_?: InputMaybe<Request_Filter>;
  request_contains?: InputMaybe<Scalars['String']>;
  request_contains_nocase?: InputMaybe<Scalars['String']>;
  request_ends_with?: InputMaybe<Scalars['String']>;
  request_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_gt?: InputMaybe<Scalars['String']>;
  request_gte?: InputMaybe<Scalars['String']>;
  request_in?: InputMaybe<Array<Scalars['String']>>;
  request_lt?: InputMaybe<Scalars['String']>;
  request_lte?: InputMaybe<Scalars['String']>;
  request_not?: InputMaybe<Scalars['String']>;
  request_not_contains?: InputMaybe<Scalars['String']>;
  request_not_contains_nocase?: InputMaybe<Scalars['String']>;
  request_not_ends_with?: InputMaybe<Scalars['String']>;
  request_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_not_in?: InputMaybe<Array<Scalars['String']>>;
  request_not_starts_with?: InputMaybe<Scalars['String']>;
  request_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  request_starts_with?: InputMaybe<Scalars['String']>;
  request_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ruling?: InputMaybe<Ruling>;
  rulingTime?: InputMaybe<Scalars['BigInt']>;
  rulingTime_gt?: InputMaybe<Scalars['BigInt']>;
  rulingTime_gte?: InputMaybe<Scalars['BigInt']>;
  rulingTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  rulingTime_lt?: InputMaybe<Scalars['BigInt']>;
  rulingTime_lte?: InputMaybe<Scalars['BigInt']>;
  rulingTime_not?: InputMaybe<Scalars['BigInt']>;
  rulingTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ruling_in?: InputMaybe<Array<Ruling>>;
  ruling_not?: InputMaybe<Ruling>;
  ruling_not_in?: InputMaybe<Array<Ruling>>;
};

export enum Round_OrderBy {
  AmountPaidChallenger = 'amountPaidChallenger',
  AmountPaidRequester = 'amountPaidRequester',
  AppealPeriodEnd = 'appealPeriodEnd',
  AppealPeriodStart = 'appealPeriodStart',
  CreationTime = 'creationTime',
  FeeRewards = 'feeRewards',
  HasPaidChallenger = 'hasPaidChallenger',
  HasPaidRequester = 'hasPaidRequester',
  Id = 'id',
  Request = 'request',
  Ruling = 'ruling',
  RulingTime = 'rulingTime'
}

export enum Ruling {
  /** The arbitrator ruled in favor of the requester. */
  Accept = 'Accept',
  /** The arbitrator did not rule or refused to rule. */
  None = 'None',
  /** The arbitrator in favor of the challenger. */
  Reject = 'Reject'
}

export enum Status {
  /** The item is not registered on the TCR and there are no pending requests. */
  Absent = 'Absent',
  /** The item is registered on the TCR, but there is a pending removal request. These are sometimes also called removal requests. */
  ClearingRequested = 'ClearingRequested',
  /** The item is registered and there are no pending requests. */
  Registered = 'Registered',
  /** The item is not registered on the TCR, but there is a pending registration request. */
  RegistrationRequested = 'RegistrationRequested'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  arbitrator?: Maybe<Arbitrator>;
  arbitrators: Array<Arbitrator>;
  item?: Maybe<Item>;
  itemProp?: Maybe<ItemProp>;
  itemProps: Array<ItemProp>;
  items: Array<Item>;
  lcontribution?: Maybe<LContribution>;
  lcontributions: Array<LContribution>;
  litem?: Maybe<LItem>;
  litems: Array<LItem>;
  lregistries: Array<LRegistry>;
  lregistry?: Maybe<LRegistry>;
  lrequest?: Maybe<LRequest>;
  lrequests: Array<LRequest>;
  lround?: Maybe<LRound>;
  lrounds: Array<LRound>;
  metaEvidence?: Maybe<MetaEvidence>;
  metaEvidences: Array<MetaEvidence>;
  registries: Array<Registry>;
  registry?: Maybe<Registry>;
  request?: Maybe<Request>;
  requests: Array<Request>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionArbitratorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionArbitratorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Arbitrator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Arbitrator_Filter>;
};


export type SubscriptionItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemPropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemPropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ItemProp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ItemProp_Filter>;
};


export type SubscriptionItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};


export type SubscriptionLcontributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLcontributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LContribution_Filter>;
};


export type SubscriptionLitemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLitemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LItem_Filter>;
};


export type SubscriptionLregistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRegistry_Filter>;
};


export type SubscriptionLregistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLrequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLrequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRequest_Filter>;
};


export type SubscriptionLroundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLroundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LRound_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LRound_Filter>;
};


export type SubscriptionMetaEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMetaEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetaEvidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetaEvidence_Filter>;
};


export type SubscriptionRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Registry_Filter>;
};


export type SubscriptionRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Request_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Request_Filter>;
};


export type SubscriptionRoundArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRoundsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Round_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Round_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetAddressInfoQueryVariables = Exact<{
  address: Scalars['String'];
  registryAddress: Scalars['String'];
}>;


export type GetAddressInfoQuery = { __typename?: 'Query', litems: Array<{ __typename?: 'LItem', keywords?: string | null, data: string }> };
