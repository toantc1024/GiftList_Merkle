const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?
  const tree = new MerkleTree(niceList);
  let name = "Robin Hessel Jr.";
  let index = niceList.findIndex((n) => n === name);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: tree.getProof(index),
    leaf: name,
  });

  console.log({ gift });
}

main();
