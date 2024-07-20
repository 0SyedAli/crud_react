import React, { useState } from "react";
import styles from "../app.module.css";
import InputControl from "../InputControl/InputControl";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState([]);

  const createTransaction = (text, amount) => {
    axios
      .post("http://localhost:3000/api/transactions/", {
        text: text,
        amount: amount,
      })
      .then((response) => {
        setData(response.data); // Update state with response.data
        console.log(data); // Note: This will log the previous state due to closure
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
      });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        createTransaction(text, amount);
        setText("");
        setAmount("");
      }}
    >
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h2 className={styles.heading}>Total Transaction</h2>
          <InputControl
            label="Text"
            placeholder="Enter Text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <InputControl
            label="Amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <div className={styles.footer}>
            <button type="submit">Submit</button> {/* Fix typo in 'Submit' */}
            <p>
              All transactions here?{" "}
              <span>
                <Link to="/totalDisplay">Click</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateTransaction;
