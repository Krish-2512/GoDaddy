




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Badge from '@mui/material/Badge';
// import Modal from '../Modal';
// import Cart from '../screens/Cart';
// import { useCart } from './ContextReducer';

// function Navbar() {
//   const [cartDisplay, setCartDisplay] = useState(false);
//   const data = useCart() || []; // Ensure data is an array
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     navigate('/');
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//       <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav me-auto mb-2">
//           <li className="nav-item">
//             <Link className="nav-link fs-4" to="/" style={{ color: 'black' }}>Home</Link>
//           </li>
//           {localStorage.getItem('authToken') &&
//             <Link className="nav-link fs-4" to="/myOrder" style={{ color: 'green' }}>Previous Orders</Link>
//           }
//         </ul>
//         {localStorage.getItem('authToken') ?
//           <div>
//             <div className="btn bg-white text-success mx-2" onClick={() => setCartDisplay(true)}>
//               My Cart {" "}
//               <Badge pill bg="danger" style={{ color: 'red' }}>
//                 {data.length}
//               </Badge>
//             </div>
//             {cartDisplay && <Modal onClose={() => setCartDisplay(false)}><Cart /></Modal>}
//             <button className="btn bg-white text-success" onClick={handleLogout}>Logout</button>
//           </div>
//           :
//           <div className='d-flex'>
//             <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
//             <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
//           </div>
//         }
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



















import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

function Navbar() {
  const [cartDisplay, setCartDisplay] = useState(false);
  const data = useCart() || []; // Ensure data is an array
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2">
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/" style={{ color: 'black' }}>Home</Link>
          </li>
          {localStorage.getItem('authToken') &&
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/myOrder" style={{ color: 'green' }}>Previous Orders</Link>
            </li>
          }
        </ul>
        {localStorage.getItem('authToken') ?
          <div>
            <div className="btn bg-white text-success mx-2" onClick={() => setCartDisplay(true)}>
              My Cart {" "}
              <Badge pill bg="danger" style={{ color: 'red' }}>
                {data.length}
              </Badge>
            </div>
            {cartDisplay && <Modal onClose={() => setCartDisplay(false)}><Cart /></Modal>}
            <button className="btn bg-white text-success" onClick={handleLogout}>Logout</button>
          </div>
          :
          <div className='d-flex'>
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
          </div>
        }
      </div>
    </nav>
  );
}

export default Navbar;

