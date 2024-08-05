// import React from 'react'
// // import Delete from '@material-ui/icons/Delete'
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from "axios"

// import { useCart, useDispatchCart } from '../components/ContextReducer';
// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//       </div>
//     )
//   }
//   // const handleRemove = (index)=>{
//   //   console.log(index)
//   //   dispatch({type:"REMOVE",index:index})
//   // }

// //   const handleCheckOut = async () => {
// //     let userEmail = localStorage.getItem("userEmail");
// //     // console.log(data,localStorage.getItem("userEmail"),new Date())
// //     let response = await fetch("http://localhost:5000/api/auth/orderData", {
// //       // credentials: 'include',
// //       // Origin:"http://localhost:3000/login",
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({
// //         order_data: data,
// //         email: userEmail,
// //         order_date: new Date().toDateString()
// //       })
// //     });
// //     console.log("JSON RESPONSE:::::", response.status)
// //     if (response.status === 200) {
// //       dispatch({ type: "DROP" })
// //     }
// //   }
// // const handleCheckout=async()=>{
// //   let userEmail = localStorage.getItem("userEmail");
// //   await axios.post('http://localhost:5000/food/orderData',{order_data:data,email:userEmail,order_date:new Date().toDateString()},{
// //     headers:{
// //       'Content-Type': 'application/json'
// //     }
// //   }).then((data)=>{console.log(data); dispatch({type:'DROP'})})
// //   .catch(err=>{console.log(err)})
// // }
// const handleCheckout = async () => {
//   let userEmail = localStorage.getItem("userEmail");
//   if (!userEmail) {
//     console.error("User email is not available");
//     return;
//   }

//   try {
//     let response = await axios.post(
//       'http://localhost:5000/food/orderData',
//       {
//         order_data: data,
//         email: userEmail,
//         order_date: new Date().toDateString()
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     );
//     console.log(response.data);
//     dispatch({ type: 'DROP' });
//   } catch (err) {
//     console.error(err.response ? err.response.data : err.message);
//   }
// };


//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>

//       {console.log(data)}
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th style={{color:'green'}}scope='col' >#</th>
//               <th style={{color:'green'}} scope='col' >Name</th>
//               <th style={{color:'green'}} scope='col' >Quantity</th>
//               <th style={{color:'green'}} scope='col' >Option</th>
//               <th style={{color:'green'}} scope='col' >Amount</th>
//               <th style={{color:'green'}} scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th style={{color:'white'}} scope='row' >{index + 1}</th>
//                 <td style={{color:'white'}}  >{food.name}</td>
//                 <td style={{color:'white'}}>{food.qty}</td>
//                 <td style={{color:'white'}}>{food.size}</td>
//                 <td style={{color:'white'}}>{food.price}</td>
//                 <td style={{color:'white'}}><button type="button" className="btn p-0"><DeleteIcon style={{color:'white'}} onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//                 //{/* <td ><button type="button" className="btn p-0"><img src='' alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr> */}
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2'style={{color:'red'}}>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckout}  > Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }














// 




















import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  const data = useCart() || []; // Default to empty array if undefined
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckout = async () => {
    const userEmail = localStorage.getItem('userEmail');

    if (!userEmail) {
      console.error('User email is not available');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/food/orderData', {
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      dispatch({ type: 'DROP' }); // Clear cart
    } catch (err) {
      console.error('Error during checkout:', err);
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th style={{ color: 'green' }} scope='col'>#</th>
              <th style={{ color: 'green' }} scope='col'>Name</th>
              <th style={{ color: 'green' }} scope='col'>Quantity</th>
              <th style={{ color: 'green' }} scope='col'>Option</th>
              <th style={{ color: 'green' }} scope='col'>Amount</th>
              <th style={{ color: 'green' }} scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th style={{ color: 'white' }} scope='row'>{index + 1}</th>
                <td style={{ color: 'white' }}>{food.name}</td>
                <td style={{ color: 'white' }}>{food.qty}</td>
                <td style={{ color: 'white' }}>{food.size}</td>
                <td style={{ color: 'white' }}>{food.price}</td>
                <td style={{ color: 'white' }}>
                  <button type="button" className="btn p-0">
                    <DeleteIcon style={{ color: 'white' }} onClick={() => { dispatch({ type: 'REMOVE', index }) }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2' style={{ color: 'red' }}>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckout}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
