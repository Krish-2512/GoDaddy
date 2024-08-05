// import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import  axios  from 'axios';

// export default function MyOrder() {

//     const [orderData, setOrderData] = useState([])

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'))
//         await axios.post("http://localhost:5000/food/myfood",{email:localStorage.getItem('userEmail')}, {
         
           
//             headers: {
//                 'Content-Type': 'application/json'
//             },
            
//         }).then(async (res) => {
//             let response = await res.data.orderDate;
//              //console.log(res.data.orderDate.order_data);
//             setOrderData(response.order_data);
//             console.log(orderData);
//         }).catch((err)=>console.log(err))



//         // await res.map((data)=>{
//         //    console.log(data)
//         // })


//     }

//     useEffect(() => {
//         fetchMyOrder()
//     }, [])

//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>

//             <div className='container'>
//                 <div className='row'>

//                     {orderData.length>0 ? orderData.map(data => {
                       
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
                                    
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                 <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                 <div className="card-body">
//                                                                     <h5 className="card-title">{arrayData.name}</h5>
//                                                                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                         <span className='m-1'>{arrayData.qty}</span>
//                                                                         <span className='m-1'>{arrayData.size}</span>
//                                                                         <span className='m-1'>{data}</span>
//                                                                         <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                             ₹{arrayData.price}/-
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>

//             <Footer />
//         </div>
//     )
// }




// import React, { useEffect, useState } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import axios from 'axios';

// export default function MyOrder() {
//     const [orderData, setOrderData] = useState([]);

//     const fetchMyOrder = async () => {
//         console.log(localStorage.getItem('userEmail'));
//         await axios.post("http://localhost:5000/food/myfood", { email: localStorage.getItem('userEmail') }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         }).then(async (res) => {
//             let response = await res.data.orderDate;
//             console.log("Fetched order data:", response);
//             setOrderData(response.order_data);
//         }).catch((err) => console.log(err));
//     };

//     useEffect(() => {
//         fetchMyOrder();
//     }, []);

//     return (
//         <div>
//             <div>
//                 <Navbar />
//             </div>

//             <div className='container'>
//                 <div className='row'>
//                     {orderData.length > 0 ? orderData.map((group, groupIndex) => {

//                         return (
                           
                                                  

//                             <div key={groupIndex}>
//                                 {group.map((order, orderIndex) => (
//                                    // return()
//                                     <div key={orderIndex} className='col-12 col-md-6 col-lg-3'>
//                                         <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                             <img src={order.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{order.name}</h5>
//                                                 <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                     <span className='m-1'>{order.qty}</span>
//                                                     <span className='m-1'>{order.size}</span>
//                                                     {order.Order_date && <div className='m-1'>{order.Order_date}</div>}
//                                                     <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                                                         ₹{order.price}/-
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <hr />
//                             </div>
//                         );
//                     }) : <p>No order data found.</p>}
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }




import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    const fetchMyOrder = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            console.log(email);
            const response = await axios.post("http://localhost:5000/food/myfood", { email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const orderData = response.data.orderDate.order_data;
            setOrderData(orderData.reverse());
            console.log(orderData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    {orderData.length > 0 ? (
                        orderData.map((group, groupIndex) => (
                            <div key={groupIndex}>
                                {group.map((arrayData, arrayIndex) => (
                                    <div key={arrayIndex}>
                                        {arrayData.Order_date ? (
                                            <div className='w-100 m-auto mt-5 text-center'>
                                                <h4>{arrayData.Order_date}</h4>
                                                <hr />
                                            </div>
                                        ) : (
                                            <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
                                                <div className="card mt-2  " style={{ width: '100%', maxHeight: "360px" }}>
                                                    <img 
                                                        src={arrayData.img}
                                                        className="card-img-top d-block w-100"
                                                        alt={arrayData.name}
                                                        style={{ height: "120px", objectFit: "cover" }}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{arrayData.name}</h5>
                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                            <div className="d-flex justify-content-between">
                                                                <span>{arrayData.qty}</span>
                                                                <span>{arrayData.size}</span>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <strong>₹{arrayData.price}/-</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No orders found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
