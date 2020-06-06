// Add your code here
let data = {
name : "Steve",
email : "steve@steve.com"
};
<<<<<<< HEAD
let rando = Math.ceil( Math.random() * 1000 );
=======
let token = null;
>>>>>>> f7a36ff63d2e498bc50ea965f0b9556f8e1b4a04
let config = {
  method:"POST",
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
    },
    body : JSON.stringify(data)
}
function submitData(name,email){
return fetch('http://localhost:3000/users',config)
.then(res=>res.json())
<<<<<<< HEAD
.then(object=>
document.body.innerHTML =(object["id"])
=======
.then(json=>
 {
          id: rando
        }
//document.body.innerHTML=(`${id}`)
>>>>>>> f7a36ff63d2e498bc50ea965f0b9556f8e1b4a04
)
.catch(function(error){
 document.body.innerHTML=(error.message)
});
}

<<<<<<< HEAD
=======
function renderData(){
  let name = document.getElementById("user-name");
  let email = document.getElementById("email");
  let submit = document.getElementById("submit")
  
}
>>>>>>> f7a36ff63d2e498bc50ea965f0b9556f8e1b4a04
