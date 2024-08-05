// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Cards from '../components/Cards'
// import Carousel from '../components/Carousel'
// import axios from 'axios'


// function Home() {
//   const [foodCat,setFoodCat]=useState([]);
//   const [foodItem,setFoodItem]=useState([]);

// const getFood = async(req,res)=>{
// await axios.post('http://localhost:5000/food/foodDisplay')
// .then((result)=>{setFoodCat([result.data[1]]);setFoodItem(result.data[0]);console.log(result.data[0],result.data[1])})
// .catch((err)=>console.log(err));
// }
// useEffect(()=>{
//   getFood();
// },[])

//   return (
//     <div>
//       <div><Navbar/></div>

//       <div><Carousel/></div>

//       <div className='container m-3'>
//       {
//           foodCat.length>0
//             ? foodCat.map((data) => {
//               return (
//                 // justify-content-center
//                 <div className='row mb-3'>
//                   <div key={data.id} className='fs-3 m-3'>
//                     {data.CategoryName}
//                   </div>
//                   <hr id="hr-success" />
//                   {foodItem.length>0?foodCat.filter((items)=>(items.CategoryName===data.CategoryName)).map((filterItems)=>{return(<div><Cards data={filterItems}/></div>)}):<div>Data not Available</div>}
//                 </div>
//               )
//             })
//             : <div>Items not available</div>}
      
//       </div>
//       <div><Footer/></div>
//     </div>
//   )
// }

// export default Home








import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch] = useState('');
  

  const getFood = async () => {
    try {
      const result = await axios.post('http://localhost:5000/food/foodDisplay');
      setFoodCat(result.data[1]);
      setFoodItem(result.data[0]);
      console.log(result.data[0], result.data[1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFood();
  }, []);
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
      <div><Navbar /></div>

      <div> 
        <div id="carouselExampleControls" className="carousel slide" style={{objectFit:"contain !important"}}>
        <div className="carousel-inner justify-content-center" id="carousel" >
         
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
          <div className="container-fluid  ">
    <form className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
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

      <div className='container m-3'>
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div className='row mb-3' key={data._id}>
              <div className='fs-3 m-3'>
                {data.CategoryName}
              </div>
              <hr id="hr-success" />
              {foodItem.length > 0 ? (
                foodItem
                  .filter((item) => (item.CategoryName === data.CategoryName )&& (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                  .map((filteredItem) => (
                    <div key={filteredItem._id} className='col-sm-12 col-md-6 col-lg-3'>
                      <Cards  foodItem={filteredItem} options={filteredItem.options[0]}/>
                    </div>
                  ))
              ) : (
                <div>Data not Available</div>
              )}
            </div>
          ))
        ) : (
          <div>No categories available</div>
        )}
      </div>
      <div><Footer /></div>
    </div>
  );
}

export default Home;
