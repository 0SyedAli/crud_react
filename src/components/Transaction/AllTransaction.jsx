import React, { useEffect,useState } from "react";
import axios from "axios";
import styles from "../app.module.css";
import TransTable from "../Transaction/TransTable";
import { Link } from "react-router-dom";

const AllTransactions = () => {
  const [data,setData] = useState([])
 
  function fetchTodo(user_id) {
    axios.get(`http://localhost:3000/api/transactions`).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    fetchTodo();
  }, []);
 


  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>All Transaction</h2>
        <div className="table_trans">
          <TransTable data={data} />
        </div>
        <div className={styles.footer}>
          {/* <button>Login</button> */}
          <p>
            Add transaction here!
            <span>
              <Link to="/total">Click</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
