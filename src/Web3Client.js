import VaxPassContract from "contracts/VaxPass.json";
const Web3 = require("web3");
let provider = undefined;
let selectedAccount;
let Contract = undefined;
let web3;
export const init = async (informer = undefined) => {
  provider = window.ethereum;
  web3 = new Web3(provider);
  provider
    .request({
      method: "eth_requestAccounts",
    })
    .then((accounts) => {
      selectedAccount = accounts[0];
      console.log("Selected Account is ", selectedAccount);
      console.log("calling informer below");

      if (informer !== undefined) {
        informer(true);
      }
    })
    .catch((err) => {
      console.log("error is", err);
    });
  provider.on("accountsChanged", (accounts) => {
    selectedAccount = accounts[0];
    console.log("Selected Account changed to   ", selectedAccount);
  });
  const netId = await web3.eth.net.getId();
  console.log("net id is ", netId);
  Contract = await new web3.eth.Contract(
    VaxPassContract.abi,
    VaxPassContract.networks[netId].address
  );
  console.log("the contract seems", Contract);
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const addItem = async (
  item,
  itemsUpdator = undefined,
  txRejectionFunction = undefined,
  messageUpdator
) => {
  console.log("\nAdding item on contract ", Contract);
  await Contract.methods.addItem(item).send(
    {
      from: selectedAccount,
    },

    async function (err, txHash) {
      messageUpdator("pending");
      if (err?.code?.toString() === "4001") {
        console.log("Transaction Rejected", err, txHash);
        if (txRejectionFunction !== undefined) {
          txRejectionFunction();
        }
      } else {
        let transactionReceipt = null;
        while (transactionReceipt == null) {
          // Waiting expectedBlockTime until the transaction is mined
          transactionReceipt = await web3.eth.getTransactionReceipt(txHash);
          await sleep(1000);
        }
        itemsUpdator(item);
        messageUpdator("success");

        console.log("Item Added");
        messageUpdator("success");
      }

      //  return;
    }
  );
};

export const getItems = async (setItems) => {
  if (provider === undefined || Contract === undefined) {
    await init();
  }
  console.log("\nattempt to get items on ", Contract);
  let r = await Contract.methods.getItems().call();

  console.log("in get  Items, items got", r);
  setItems(r);
  return r;
};
