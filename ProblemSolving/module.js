
export const exportedFun = (a,b) => a * b

const exportedPromise = new Promise((resolve,reject)=>{
      const response = {OK : true}

      if(response.OK){
            resolve('i came from exported file as promise')
      } else{
            reject('i was rejected for some reason')
      }
})

export default exportedPromise

const a = (x) =>{
      return x
}