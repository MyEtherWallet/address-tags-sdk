"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._SubgraphErrorPolicy_ = exports.Status = exports.Ruling = exports.Round_OrderBy = exports.Request_OrderBy = exports.Registry_OrderBy = exports.OrderDirection = exports.MetaEvidence_OrderBy = exports.LRound_OrderBy = exports.LRequest_OrderBy = exports.LRegistry_OrderBy = exports.LItem_OrderBy = exports.LContribution_OrderBy = exports.Item_OrderBy = exports.ItemProp_OrderBy = exports.Arbitrator_OrderBy = void 0;
var Arbitrator_OrderBy;
(function (Arbitrator_OrderBy) {
    Arbitrator_OrderBy["Id"] = "id";
})(Arbitrator_OrderBy = exports.Arbitrator_OrderBy || (exports.Arbitrator_OrderBy = {}));
var ItemProp_OrderBy;
(function (ItemProp_OrderBy) {
    ItemProp_OrderBy["Description"] = "description";
    ItemProp_OrderBy["Id"] = "id";
    ItemProp_OrderBy["IsIdentifier"] = "isIdentifier";
    ItemProp_OrderBy["Item"] = "item";
    ItemProp_OrderBy["Label"] = "label";
    ItemProp_OrderBy["Type"] = "type";
    ItemProp_OrderBy["Value"] = "value";
})(ItemProp_OrderBy = exports.ItemProp_OrderBy || (exports.ItemProp_OrderBy = {}));
var Item_OrderBy;
(function (Item_OrderBy) {
    Item_OrderBy["Data"] = "data";
    Item_OrderBy["Disputed"] = "disputed";
    Item_OrderBy["Id"] = "id";
    Item_OrderBy["ItemId"] = "itemID";
    Item_OrderBy["LatestChallenger"] = "latestChallenger";
    Item_OrderBy["LatestRequestResolutionTime"] = "latestRequestResolutionTime";
    Item_OrderBy["LatestRequestSubmissionTime"] = "latestRequestSubmissionTime";
    Item_OrderBy["LatestRequester"] = "latestRequester";
    Item_OrderBy["NumberOfRequests"] = "numberOfRequests";
    Item_OrderBy["Registry"] = "registry";
    Item_OrderBy["RegistryAddress"] = "registryAddress";
    Item_OrderBy["Requests"] = "requests";
    Item_OrderBy["Status"] = "status";
})(Item_OrderBy = exports.Item_OrderBy || (exports.Item_OrderBy = {}));
var LContribution_OrderBy;
(function (LContribution_OrderBy) {
    LContribution_OrderBy["Contributor"] = "contributor";
    LContribution_OrderBy["Id"] = "id";
    LContribution_OrderBy["Round"] = "round";
    LContribution_OrderBy["Side"] = "side";
    LContribution_OrderBy["Withdrawable"] = "withdrawable";
})(LContribution_OrderBy = exports.LContribution_OrderBy || (exports.LContribution_OrderBy = {}));
var LItem_OrderBy;
(function (LItem_OrderBy) {
    LItem_OrderBy["Data"] = "data";
    LItem_OrderBy["Disputed"] = "disputed";
    LItem_OrderBy["Id"] = "id";
    LItem_OrderBy["ItemId"] = "itemID";
    LItem_OrderBy["Keywords"] = "keywords";
    LItem_OrderBy["LatestChallenger"] = "latestChallenger";
    LItem_OrderBy["LatestRequestResolutionTime"] = "latestRequestResolutionTime";
    LItem_OrderBy["LatestRequestSubmissionTime"] = "latestRequestSubmissionTime";
    LItem_OrderBy["LatestRequester"] = "latestRequester";
    LItem_OrderBy["NumberOfRequests"] = "numberOfRequests";
    LItem_OrderBy["Props"] = "props";
    LItem_OrderBy["Registry"] = "registry";
    LItem_OrderBy["RegistryAddress"] = "registryAddress";
    LItem_OrderBy["Requests"] = "requests";
    LItem_OrderBy["Status"] = "status";
})(LItem_OrderBy = exports.LItem_OrderBy || (exports.LItem_OrderBy = {}));
var LRegistry_OrderBy;
(function (LRegistry_OrderBy) {
    LRegistry_OrderBy["ClearingMetaEvidence"] = "clearingMetaEvidence";
    LRegistry_OrderBy["Id"] = "id";
    LRegistry_OrderBy["Items"] = "items";
    LRegistry_OrderBy["MetaEvidenceCount"] = "metaEvidenceCount";
    LRegistry_OrderBy["NumberOfAbsent"] = "numberOfAbsent";
    LRegistry_OrderBy["NumberOfChallengedClearing"] = "numberOfChallengedClearing";
    LRegistry_OrderBy["NumberOfChallengedRegistrations"] = "numberOfChallengedRegistrations";
    LRegistry_OrderBy["NumberOfClearingRequested"] = "numberOfClearingRequested";
    LRegistry_OrderBy["NumberOfRegistered"] = "numberOfRegistered";
    LRegistry_OrderBy["NumberOfRegistrationRequested"] = "numberOfRegistrationRequested";
    LRegistry_OrderBy["RegistrationMetaEvidence"] = "registrationMetaEvidence";
    LRegistry_OrderBy["Requests"] = "requests";
})(LRegistry_OrderBy = exports.LRegistry_OrderBy || (exports.LRegistry_OrderBy = {}));
var LRequest_OrderBy;
(function (LRequest_OrderBy) {
    LRequest_OrderBy["Arbitrator"] = "arbitrator";
    LRequest_OrderBy["ArbitratorExtraData"] = "arbitratorExtraData";
    LRequest_OrderBy["Challenger"] = "challenger";
    LRequest_OrderBy["CreationTx"] = "creationTx";
    LRequest_OrderBy["DisputeId"] = "disputeID";
    LRequest_OrderBy["DisputeOutcome"] = "disputeOutcome";
    LRequest_OrderBy["Disputed"] = "disputed";
    LRequest_OrderBy["EvidenceGroupId"] = "evidenceGroupID";
    LRequest_OrderBy["Id"] = "id";
    LRequest_OrderBy["Item"] = "item";
    LRequest_OrderBy["MetaEvidence"] = "metaEvidence";
    LRequest_OrderBy["NumberOfRounds"] = "numberOfRounds";
    LRequest_OrderBy["Registry"] = "registry";
    LRequest_OrderBy["RegistryAddress"] = "registryAddress";
    LRequest_OrderBy["RequestType"] = "requestType";
    LRequest_OrderBy["Requester"] = "requester";
    LRequest_OrderBy["ResolutionTime"] = "resolutionTime";
    LRequest_OrderBy["ResolutionTx"] = "resolutionTx";
    LRequest_OrderBy["Resolved"] = "resolved";
    LRequest_OrderBy["Rounds"] = "rounds";
    LRequest_OrderBy["SubmissionTime"] = "submissionTime";
})(LRequest_OrderBy = exports.LRequest_OrderBy || (exports.LRequest_OrderBy = {}));
var LRound_OrderBy;
(function (LRound_OrderBy) {
    LRound_OrderBy["AmountPaidChallenger"] = "amountPaidChallenger";
    LRound_OrderBy["AmountPaidRequester"] = "amountPaidRequester";
    LRound_OrderBy["AppealPeriodEnd"] = "appealPeriodEnd";
    LRound_OrderBy["AppealPeriodStart"] = "appealPeriodStart";
    LRound_OrderBy["Appealed"] = "appealed";
    LRound_OrderBy["Contributions"] = "contributions";
    LRound_OrderBy["CreationTime"] = "creationTime";
    LRound_OrderBy["FeeRewards"] = "feeRewards";
    LRound_OrderBy["HasPaidChallenger"] = "hasPaidChallenger";
    LRound_OrderBy["HasPaidRequester"] = "hasPaidRequester";
    LRound_OrderBy["Id"] = "id";
    LRound_OrderBy["NumberOfContributions"] = "numberOfContributions";
    LRound_OrderBy["Request"] = "request";
    LRound_OrderBy["Ruling"] = "ruling";
    LRound_OrderBy["RulingTime"] = "rulingTime";
})(LRound_OrderBy = exports.LRound_OrderBy || (exports.LRound_OrderBy = {}));
var MetaEvidence_OrderBy;
(function (MetaEvidence_OrderBy) {
    MetaEvidence_OrderBy["Uri"] = "URI";
    MetaEvidence_OrderBy["Id"] = "id";
})(MetaEvidence_OrderBy = exports.MetaEvidence_OrderBy || (exports.MetaEvidence_OrderBy = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var Registry_OrderBy;
(function (Registry_OrderBy) {
    Registry_OrderBy["ClearingMetaEvidence"] = "clearingMetaEvidence";
    Registry_OrderBy["Id"] = "id";
    Registry_OrderBy["Items"] = "items";
    Registry_OrderBy["MetaEvidenceCount"] = "metaEvidenceCount";
    Registry_OrderBy["NumberOfItems"] = "numberOfItems";
    Registry_OrderBy["RegistrationMetaEvidence"] = "registrationMetaEvidence";
    Registry_OrderBy["Requests"] = "requests";
})(Registry_OrderBy = exports.Registry_OrderBy || (exports.Registry_OrderBy = {}));
var Request_OrderBy;
(function (Request_OrderBy) {
    Request_OrderBy["Arbitrator"] = "arbitrator";
    Request_OrderBy["ArbitratorExtraData"] = "arbitratorExtraData";
    Request_OrderBy["Challenger"] = "challenger";
    Request_OrderBy["DisputeId"] = "disputeID";
    Request_OrderBy["DisputeOutcome"] = "disputeOutcome";
    Request_OrderBy["Disputed"] = "disputed";
    Request_OrderBy["EvidenceGroupId"] = "evidenceGroupID";
    Request_OrderBy["Id"] = "id";
    Request_OrderBy["Item"] = "item";
    Request_OrderBy["MetaEvidence"] = "metaEvidence";
    Request_OrderBy["NumberOfRounds"] = "numberOfRounds";
    Request_OrderBy["Registry"] = "registry";
    Request_OrderBy["RegistryAddress"] = "registryAddress";
    Request_OrderBy["RequestType"] = "requestType";
    Request_OrderBy["Requester"] = "requester";
    Request_OrderBy["ResolutionTime"] = "resolutionTime";
    Request_OrderBy["Resolved"] = "resolved";
    Request_OrderBy["Rounds"] = "rounds";
    Request_OrderBy["SubmissionTime"] = "submissionTime";
})(Request_OrderBy = exports.Request_OrderBy || (exports.Request_OrderBy = {}));
var Round_OrderBy;
(function (Round_OrderBy) {
    Round_OrderBy["AmountPaidChallenger"] = "amountPaidChallenger";
    Round_OrderBy["AmountPaidRequester"] = "amountPaidRequester";
    Round_OrderBy["AppealPeriodEnd"] = "appealPeriodEnd";
    Round_OrderBy["AppealPeriodStart"] = "appealPeriodStart";
    Round_OrderBy["CreationTime"] = "creationTime";
    Round_OrderBy["FeeRewards"] = "feeRewards";
    Round_OrderBy["HasPaidChallenger"] = "hasPaidChallenger";
    Round_OrderBy["HasPaidRequester"] = "hasPaidRequester";
    Round_OrderBy["Id"] = "id";
    Round_OrderBy["Request"] = "request";
    Round_OrderBy["Ruling"] = "ruling";
    Round_OrderBy["RulingTime"] = "rulingTime";
})(Round_OrderBy = exports.Round_OrderBy || (exports.Round_OrderBy = {}));
var Ruling;
(function (Ruling) {
    /** The arbitrator ruled in favor of the requester. */
    Ruling["Accept"] = "Accept";
    /** The arbitrator did not rule or refused to rule. */
    Ruling["None"] = "None";
    /** The arbitrator in favor of the challenger. */
    Ruling["Reject"] = "Reject";
})(Ruling = exports.Ruling || (exports.Ruling = {}));
var Status;
(function (Status) {
    /** The item is not registered on the TCR and there are no pending requests. */
    Status["Absent"] = "Absent";
    /** The item is registered on the TCR, but there is a pending removal request. These are sometimes also called removal requests. */
    Status["ClearingRequested"] = "ClearingRequested";
    /** The item is registered and there are no pending requests. */
    Status["Registered"] = "Registered";
    /** The item is not registered on the TCR, but there is a pending registration request. */
    Status["RegistrationRequested"] = "RegistrationRequested";
})(Status = exports.Status || (exports.Status = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
