//init github
const github = new Github;

const searchUser = document.getElementById('searchUser');



//search input event listener
searchUser.addEventListener('keyup',(e) => {
    //get input text
    const userText = e.target.value;

    if(userText !== ''){
        
        //Make http call
        github.getUser(userText)
        .then(data=>{
            console.log(data);
        })

    }
})