import { init } from "./Web3Client.js";

export function updateTransactionStatus(message) {
  if (message === "pending") {
    console.log("Transaction Pending")
  } else if (message === "success") {
    console.log("Transaction Success")
    clearTx(message);
  } else if (message === "rejected") {
    console.log("Transaction Rejected")
  } else if (message === "initiate") {
    console.log("Transaction Initiated")
  }
}
export function successfulTransaction() {
  updateTransactionStatus("success");
}
export function failedTransaction() {
  updateTransactionStatus("rejected");
}
export async function initiateApp(props) {
  await init(props);
}

export function clearTx(msg) {
  setTimeout(() => {
    document.getElementById(msg).style.transform = "scale(0)";
    document.getElementById(msg).style.display = "none";
  }, 3000);
}
