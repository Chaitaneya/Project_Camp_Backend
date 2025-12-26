import dotenv from "dotenv"
//process.env.username
import app from "./app.js"
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env",
});


const port = process.env.PORT || 3000


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port http://localhost:${port}`);
      
    })
  })
  .catch((err) => {
    console.error("mongodb connection error", err)
    process.exit(1);
  })



app.get("/", (req,res) => {
    res.send("welcome to projectcamp")
})
