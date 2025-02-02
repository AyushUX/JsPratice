const aayu= new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = true;
      if(!error){
         resolve({ username: "Aayu", email: "suce.dw8w"})
      }
      else{
         reject('something went wrong')
      }
   })
})

async function ayush(){
    try {
      const response=await aayu
      console.log(response);
      
    } catch (error) {
      console.log("Error");
      
    }
}