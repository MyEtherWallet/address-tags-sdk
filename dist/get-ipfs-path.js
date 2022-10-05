"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIPFSPath = void 0;
const graphql_request_1 = require("graphql-request");
const MAINNET_SUBGRAPH_CLIENT = new graphql_request_1.GraphQLClient("https://api.thegraph.com/subgraphs/name/kleros/curate");
const MAINNET_REGISTRY_ADDRESS = "0x6e31d83b0c696f7d57241d3dffd0f2b628d14c67";
const GNOSIS_SUBGRAPH_CLIENT = new graphql_request_1.GraphQLClient("https://api.thegraph.com/subgraphs/name/eccentricexit/curate-xdai-ii");
const GNOSIS_REGISTRY_ADDRESS = "0x76944a2678a0954a610096ee78e8ceb8d46d5922";
const QUERY = (0, graphql_request_1.gql) `
  query getAddressInfo($address: String!, $registryAddress: String!) {
    litems(
      where: {
        registry: $registryAddress
        status: Registered
        keywords_contains: $address
      }
    ) {
      keywords
      data
    }
  }
`;
const getIPFSPath = async (address) => {
    const ethereumSubgraphResult = await MAINNET_SUBGRAPH_CLIENT.request(QUERY, {
        address,
        registryAddress: MAINNET_REGISTRY_ADDRESS,
    }).then((result) => result);
    if (ethereumSubgraphResult.litems.length === 0) {
        const gnosisSubgraphResult = await GNOSIS_SUBGRAPH_CLIENT.request(QUERY, {
            address,
            registryAddress: GNOSIS_REGISTRY_ADDRESS,
        }).then((result) => result);
        if (gnosisSubgraphResult.litems.length === 0)
            throw "Item not found.";
        return gnosisSubgraphResult.litems[0].data;
    }
    else
        return ethereumSubgraphResult.litems[0].data;
};
exports.getIPFSPath = getIPFSPath;
