const signUp = document.getElementById('sign-up'),
signIn = document.getElementById('sign-in'),
loginIn = document.getElementById('login-in'),
loginUp = document.getElementById('login-up');

signUp.addEventListener('click', ()=>{
    //Remove as classes primeiro, caso existam
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    //adiciona classes
    loginIn.classList.add('none');
    loginUp.classList.add('block');
})

signIn.addEventListener('click', ()=>{
    //Remove as classes primeiro, caso existam
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');

    //adiciona classes
    loginIn.classList.add('block');
    loginUp.classList.add('none');
})