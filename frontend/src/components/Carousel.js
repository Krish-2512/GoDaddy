// import React from 'react'
// import { Link } from 'react-router-dom'


// function Carousel() {
//   return (
//     <div>
//       <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
//   <div className="carousel-inner">
//     <div className="carousel-item active ">
//       <img className="d-block w-100" src="/burger.jpg" alt="First slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="/noodles.jpg" alt="Second slide"/>
//     </div>
//     <div className="carousel-item">
//       <img className="d-block w-100" src="/pizza-pizza-filled-with-tomatoes-salami-olives.jpg" alt="Third slide"/>
//     </div>
//   </div>
//   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true" ></span>
//     <span className="sr-only">Next</span>
//   </a>
//   /
// </div>
//     </div>
//   )
// }

// export default Carousel





// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';

// function Carousel() {
//   useEffect(() => {
//     // Ensure that jQuery is available globally
//     window.$ = $;
//     window.jQuery = $;
//   }, []);
//   return (
//     <div>
//       <div
//         id="carouselExampleControls"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src="/burger.jpg"
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="/noodles.jpg"
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="/pizza-pizza-filled-with-tomatoes-salami-olives.jpg"
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleControls"
//           role="button"
//           data-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleControls"
//           role="button"
//           data-slide="next"
//         >
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Carousel;















import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/burger.jpg", alt: "First slide" },
    { src: "/noodles2.jpg", alt: "Second slide" },
    { src: "/pizza-pizza-filled-with-tomatoes-salami-olives.jpg", alt: "Third slide" }
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner" id="carousel">
         
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{filter:"brightness(30%)"}}
            >
              <img
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <div className='carousel-captions' style={{zIndex:"10"}} >
          <div className="container-fluid">
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
          </div>
        <a
          className="carousel-control-prev"
          //href="#carouselExampleControls"
          role="button"
          onClick={goToPrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          //href="#carouselExampleControls"
          role="button"
          onClick={goToNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
