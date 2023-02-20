async function signup(signupfrm){
    const name  = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const obj ={
        name,
        email,
        phone,
        password,
    }

    const result = await axios.post('http://127.0.0.1:4000/user/signup', obj);
    console.log(result);
    if(result.status === 200) {
        window.location.href = "signin.html";
    }
}

async function signin(signinfrm){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const obj = {
        email,
        password,
    }

    const result = await axios.post('http://127.0.0.1:4000/user/signin',obj);
    localStorage.setItem('token' , result.data.token);
    window.location.href= "chatwindow.html"
}