import { useState } from "react";
import { addItem, getItems } from "./Web3Client.js";
import "./Styles.css";
import { Form, FormGroup, Input } from "reactstrap";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { failedTransaction, initiateApp, successfulTransaction, updateTransactionStatus } from "./Utilities";
import Login from "./Login";

//  Start of the React - New Record Route
function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [LoggedIn, setLoggedIn] = useState(false);

  function logIn() {
    initiateApp(setLoggedIn);
    getItems(setItems);
  }

  function pushItem(item = undefined) {
    let stuff = [...items];
    if (item !== undefined) {
      stuff.push(item);
      setItems(stuff);
    } else getItems(setItems);
    successfulTransaction();
  }

  return (
    <div className="main">
      {!LoggedIn ? (
        <div>
          <Navbar onClick={logIn} />
          <Login />
        </div>
      ) : (
        <div onLoad={setTimeout(() => { }, 0)}>
          <Navbar />
          <div className="app">

            {/* Left Column */}
            <div className="addRecords">

              <div className="title">
                <div className="title">
                  <div>New Record</div>
                  <h6> </h6>
                </div>
              </div>

              <Form>
                <FormGroup>
                  <br />
                  <div class="input-group">
                    <Input type="text" name="name" id="name" placeholder="Enter NIC number" onChange={(e) => { setName(e.target.value); }} />
                    <br />
                    <botton onClick={async (e) => {
                      e.preventDefault();
                      if (document.getElementById("name").value === "") {
                        alert("NIC is Empty. Please try again");
                        return;
                      }
                      document.getElementById("name").value = "";
                      updateTransactionStatus("initiate");
                      await addItem(
                        name.toString(),
                        pushItem,
                        failedTransaction,
                        updateTransactionStatus
                      );
                      window.location.reload();
                      logIn()
                    }}
                      class="button" > Add Record </botton></div>
                  {" "}
                </FormGroup>
              </Form>

              <div className="title">
                <div className="title">
                  <div>Recent Records</div>
                </div>
              </div>

              <div className="list">
                {!items.length ? (
                  <center>
                    <h5 id="h5">No Records Found</h5>
                  </center>
                ) : (
                  <center>
                    <ul id="records">
                      {items.map((item, index) => {
                        return (
                          
                          <li id="itm" key={"item no " + index}><hr></hr>
                            {" "}
                            <h5 id="nic" key={"itembutton no " + index}>{""}{item}</h5>
                          </li>
                        );
                      })}
                    </ul>
                  </center>
                )}
              </div>


              <Footer onLoad={console.log("Footer Loaded")} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
