import React from 'react';
import styles from './app.module.css'
import InputControl from './InputControl/InputControl';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h2 className={styles.heading}>Login</h2>
          <InputControl label="Email" placeholder="Enter Full Name"  />
          <InputControl label="Email" placeholder="Enter Email Address"  />
          <InputControl label="Password" placeholder="Enter Password"  />

          <div className={styles.footer}>
            <button>Login</button>
            <p>Already have an account?
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Login