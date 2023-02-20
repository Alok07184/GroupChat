async function sendtext(messages){
    const message = document.getElementById('message').value;

    const obj={
        message
    }
    const token = localStorage.getItem('token');
    const result = await axios.post('http://127.0.0.1:4000/chat/messages',obj,{headers :{'Authorization' : token} });
    console.log(result);


    
}

    localStorage.setItem('element',0);
    var max =0;
window.setInterval(async() =>{
    const token = localStorage.getItem('token');
    
    const result =  await axios.get('http://127.0.0.1:4000/chat/messages',{headers :{'Authorization': token}});
    if(result.data.length > max)
    {
   
        showMessages(result.data.slice(max, result.data.length));
        max = result.data.length;
          
    }
},1000)



function showMessages(result){
    let chats = document.getElementById('chats');
    console.log(result)
    result.forEach((single)=>{
        
        const childNode = `<br/><p>${single.name}: ${single.messages}</p> <br/>`
        
        chats.innerHTML = chats.innerHTML + childNode;
        chats.scrollTop = chats.scrollHeight;
    })

}