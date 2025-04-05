import bcryptjs from "bcryptjs"
const generateHashKeyfn =  async() => {
     const generateHashKey=await bcryptjs.hash("Ndarya amfranga ya cedro",10);
      console.log(generateHashKey);
      
}
generateHashKeyfn()
