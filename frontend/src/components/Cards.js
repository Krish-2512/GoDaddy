// import React, { useEffect, useRef, useState } from 'react'
// import { useCart, useDispatchCart } from './ContextReducer'


// function Cards({options,foodItem}) {
//   const data = useCart();
//   const dispatch = useDispatchCart();
//   const [size,setSize]= useState("");
//   const [qty,setQty]= useState(1);
//   const priceRef = useRef();
//   const [finalPrice, setFinalPrice] = useState(0);

//   const handleAddCart = async()=>{
//     await dispatch({type:"ADD",id:foodItem._id, qty:qty, size:size ,name:foodItem.name,price:finalPrice})
//     console.log(data);
   
  
//   }
   
   
//    useEffect(()=>{
//     setSize(priceRef.current.value)
//    });

//   useEffect(() => {
//     if (size) {
//       setFinalPrice(qty * parseInt(options[size]));
//     }
//   }, [size, qty, options]);
  
  
//   return (
//     <div>
//       <div className="card mt-4" style={{"width": "18rem"}}>
//   <img className="card-img-top" src={foodItem.img} alt="Card image cap" style={{height:'140px',objectFit:'fill'}}/>
//   <div className="card-body">
//     <h5 className="card-title">{foodItem.name}</h5>
//     <p className="card-text">{foodItem.description}</p>
   
//   </div>
//   <div className='container w-100' style={{height:'38px'}}>
//     <select className="m-2 h-100 w-20 bg-success text-black rounded" onChange={(e)=>setQty(e.target.value)}>
//    {Array.from(Array(6),(e,i)=>{
//     return(
//         <option key={i+1} value={i+1}>{i+1}</option>
//     )
//    })}
//     </select>
//     <select className="m-2 h-100 w-20 bg-success text-black rounded"  ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
//     {/* <option  value='half'>Half</option>
//     <option  value='full'>Full</option> */}
//     {Object.keys(options).map((i)=>{return(
//        <option value={i} id={i}>{i}</option>
     
//     )})}
//     </select>
//     <div className=' d-inline ms-2 h-100 w-20 fs-7 mb-2' >
//               Rs{finalPrice}/-
//             </div>
  
//   </div>
//   <hr></hr>
//           <button className={`btn btn-success justify-center ms-3 `} onClick={handleAddCart} >Add to Cart</button>
// </div>
//     </div>
//   )
// }

// export default Cards
















// import React, { useEffect, useRef, useState } from 'react';
// import { useCart, useDispatchCart } from './ContextReducer';

// function Cards({ options, foodItem }) {
//   const data = useCart();
//   const dispatch = useDispatchCart();
//   const [size, setSize] = useState("");
//   const [qty, setQty] = useState(1);
//   const [finalPrice, setFinalPrice] = useState(0);
//   const priceRef = useRef();

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   useEffect(() => {
//     if (size) {
//       setFinalPrice(qty * parseInt(options[size]));
//     }
//   }, [size, qty, options]);

// //   const handleAddCart = async() => {
// //     // await dispatch({ type: "ADD", id: foodItem._id, qty: qty, size: size, name: foodItem.name, price: finalPrice });
// //     // await console.log(data);}

// //     let food = []
// //     for (const item of data) {
// //       if (item.id === foodItem._id) {
// //         food = item;

// //         break;
// //       }
// //     }
// //  console.log(food)
// //     // console.log(new Date())
// //     if (food.length > 0) {
// //       if (food.size === size) {
// //         await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
// //         return
// //       }
// //       else if (food.size !== size) {
// //         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: foodItem.img })
// //         console.log("Size different so simply ADD one more to the list")
// //         return
// //       }
// //       return
// //     }

// //     await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


 

// //   }
// const handleAddCart = async () => {
//   let existingItem = data.find((item) => item.id === foodItem._id && item.size === size);
//   if (existingItem) {
//     // Item with the same ID and size exists
//     await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
//   } else {
//     // Item does not exist or size is different, add new
//     await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img });
//   }
 
    
  
//     // let existingItem = data.find((item) => item.id === foodItem._id && item.size === size);
//     // if (existingItem) {
//     //   // Item with the same ID and size exists
//     //   await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
//     // } else {
//     //   // Item does not exist or size is different, add new
//     //   await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img });
//     // };
  
  
// };

  

//   return (
//     <div>
//       <div className="card mt-4" style={{ width: "18rem" }}>
//         <img className="card-img-top" src={foodItem.img} alt="Card image cap" style={{ height: '140px', objectFit: 'fill' }} />
//         <div className="card-body">
//           <h5 className="card-title">{foodItem.name}</h5>
//           <p className="card-text">{foodItem.description}</p>
//         </div>
//         <div className='container w-100' style={{ height: '38px' }}>
//           <select className="m-2 h-100 w-20 bg-success text-black rounded" onChange={(e) => setQty(e.target.value)}>
//             {Array.from(Array(6), ( e,i) => {   //2 parameters e ,i
//               return (
//                 <option key={i + 1} value={i + 1}>{i + 1}</option>
//               )
//             })}
//           </select>
//           <select className="m-2 h-100 w-20 bg-success text-black rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//             {Object.keys(options).map((i) => (
//               <option key={i} value={i}>{i}</option>
//             ))}
//           </select>
//           <div className='d-inline ms-2 h-100 w-20 fs-7 mb-2'>
//             Rs{finalPrice}/-
//           </div>
//         </div>
//         <hr />
//         <button className={`btn btn-success justify-center ms-3`} onClick={handleAddCart}>Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// export default Cards;

//! above working fine





























import React, { useEffect, useRef, useState } from 'react';
import { useCart, useDispatchCart } from './ContextReducer';

function Cards({ options, foodItem }) {
  const data = useCart() || []; // Ensure data is always an array
  const dispatch = useDispatchCart();
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);
  const priceRef = useRef();

  useEffect(() => {
    if (priceRef.current) {
      setSize(priceRef.current.value);
    }
  }, []);

  useEffect(() => {
    if (size) {
      setFinalPrice(qty * parseInt(options[size]) || 0);
    }
  }, [size, qty, options]);

  const handleAddCart = async () => {
    // Ensure data is an array and check for valid size and foodItem
    if (!Array.isArray(data)) {
      console.error('Data is not an array or is undefined:', data);
      return;
    }

    if (!foodItem || !foodItem._id) {
      console.error('Invalid foodItem:', foodItem);
      return;
    }

    if (typeof size === 'undefined' || size === "") {
      console.error('Size is undefined or empty');
      return;
    }

    // Find the item with the same ID and size
    let existingItem = data.find((item) => item.id === foodItem._id && item.size === size);

    if (existingItem) {
      // Item with the same ID and size exists
      await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
    } else {
      // Item does not exist or size is different, add new
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img });
    }
  };

  return (
    <div>
      <div className="card mt-4" style={{ width: "18rem" }}>
        <img className="card-img-top" src={foodItem.img} alt="Card image cap" style={{ height: '140px', objectFit: 'fill' }} />
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text">{foodItem.description}</p>
        </div>
        <div className='container w-100' style={{ height: '38px' }}>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
          <select className="m-2 h-100 w-20 bg-success text-black rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {Object.keys(options).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          <div className='d-inline ms-2 h-100 w-20 fs-7 mb-2'>
            Rs{finalPrice}/-
          </div>
        </div>
        <hr />
        <button className={`btn btn-success justify-center ms-3`} onClick={handleAddCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Cards;


