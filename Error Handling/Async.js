const promiseone = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({ username: "Aayu", email: "suce.dw8w"})
        }else{
            reject('Something went wrong')
        }
    },1000)
})

async function Aayu(){
    try {
        const response = await  promiseone
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
Aayu()