import fetch from "node-fetch";

fetch("https://api.github.com/users",{
    methed: "GET",
    headers:{

    }
}).then(response=>response.json()).then(res=>{return res})
.catch((error)=>console.log('error',error))

async function syncData(){
    let promise=new Promise((resovle)=>{
        resovle(fetch("https://api.github.com/users",{
            methed: "GET",
            headers:{
        
            }
        }).then(response=>response.json().then(res=>{return res})));
});
    let data= await promise;
    console.log(data)
    return data

};
syncData()