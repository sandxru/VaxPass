contract("Transactions Contract", () => {
  it("imports contracts", () => {
    let contract = undefined;

    contract = artifacts.require("Transactions.sol");

    console.log("contract seems", contract);

    assert(contract !== undefined);
  });
});
