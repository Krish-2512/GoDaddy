// const express = require('express');

// const Port =5000;
// const cors  = require('cors');
// const mongoose = require('mongoose');

// const app =express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb+srv://krish12252005:UwIun5sfWpiQs9jr@krish-cluster.vn4ka9f.mongodb.net/user-auth')
// .then(async()=>{console.log('mongoose is connected');

// const fetch_data = await mongoose.connection.db.collection("blogs");
// fetch_data.find({}).toArray((error,data)=>{if(error) {
//     console.log(error)
// } else  {
//     console.log(data)
// }})



// })
// .catch(err=>console.log(err))
// app.listen(Port,()=>{console.log(`server is running on ${Port}`)});





const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./Routes/userRouter');
const foodRouter = require('./Routes/DisplayFood');
const OrderRouter = require('./Routes/orderRouter');
const myFoodRouter = require('./Routes/foodRouter');





//require('dotenv').config(); // To load environment variables from a .env file

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port



app.use(cors());
app.use(express.json());

//const dbUri = process.env.MONGODB_URI || 'your_default_mongodb_uri_here';
const dbUri = "mongodb+srv://krish12252005:UwIun5sfWpiQs9jr@krish-cluster.vn4ka9f.mongodb.net/gofood"
mongoose.connect(dbUri)
  .then(async () => {
    console.log('Mongoose is connected');

    try {
      const fetch_data = await mongoose.connection.db.collection("food_items").find({}).toArray()
        //console.log(fetch_data);
        const fetchCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray()
             global.food_items=fetch_data;
             global.foodCategory=fetchCategory;
        
      
     
   
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  })
  .catch(err => console.error('MongoDB connection error:', err));
  app.use('/food',router);
  app.use('/food',foodRouter);
  app.use('/food',OrderRouter);
  app.use('/food',myFoodRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
