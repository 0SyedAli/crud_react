// import React from 'react'
// import styles from '../app.module.css'
// import { Link } from 'react-router-dom'

// const Home = (props) => {
//   return (
//     <div className={styles.container}>
//         <h2>
//             <Link to="/login">Login</Link>
//         </h2>
//         <h2>
//             <Link to="/signup">Singup</Link>
//         </h2>
//         <br/>
//         <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
//     </div>
//   )
// }
// export default Home

import React from 'react'
import styles from '../app.module.css'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <div className={styles.container}>
        <h2>
            <Link to="/total">inputTransaction</Link>
        </h2>
        <h2>
            <Link to="/totalDisplay">inputTransactionData</Link>
        </h2>
        <br/>
        {/* <h2>{pro  ps.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
    </div>
  )
}
export default Home