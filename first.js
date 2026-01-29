
let users = [{name:'murtala nasir',password:'8224'},{name:'idris nasir',password:'2580'}];

function showregister(){
document.getElementById('login').style.display='none';
document.getElementById('register').style.display='block';
}
 
function showlogin(){
document.getElementById('login').style.display='block';
document.getElementById('register').style.display='none';

}

function checklogin(){
const name = document.getElementById('loginname').value;
const password = document.getElementById('pwd').value;
const match = users.some( user=> user.name===name && user.password === password);
if(match){
    document.getElementById('login').style.display='none';
document.getElementById('netx').style.display='block';
}

else if(name==='' || password===''){
   document.getElementById('login').classList.add('shake');
   document.getElementById('erro').style.display='block';
   setTimeout(()=> document.getElementById('login').classList.remove('shake'),500)
}
else if(!match){
    document.getElementById('erro').innerText='invalid user';
    document.getElementById('login').classList.add('shake');
    document.getElementById('erro').style.display='block';
     setTimeout(()=> document.getElementById('login').classList.remove('shake'),500)
}
}



function register(){

    let name = document.getElementById('rname').value;
    let pswd = document.getElementById('password').value;
        
    users.push({name,pswd});
    console.log(users);

}