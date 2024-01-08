// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
//show About Us text
function showtext() {
    // get the div
    var myDiv = document.getElementById('text_to_show_hide');
    var mybtn = document.getElementById('showtextbtn')
    // get the current value of the div
    var displaySetting = myDiv.style.display;

    if (displaySetting == 'block') {
      
      myDiv.style.display = 'none';
      mybtn.innerHTML = 'Learn More'
      
    }
    else {
      
      myDiv.style.display = 'block';
      mybtn.innerHTML = 'Learn Less'
    }
  }

//Show Connect form
function showform()
{
    var myform = document.getElementById('connectform');
    var displayform=myform.style.display;

    if(displayform == 'block')
    {
        myform.style.display = 'none';
    }
    else{
        myform.style.display = 'block';
    }
}


//get form data 
function getformdata()
{
let name = document.getElementById('user').value;
let email = document.getElementById('email').value;
let contact = document.getElementById('contact').value;
let message = document.getElementById('msg').value;


if (document.getElementById('thanks') !== undefined) {
    if (document.getElementById('thanks').style.display == 'Block') {
      document.getElementById('thanks').style.display = 'none';
      document.getElementById('connectform').style.display = 'Block';
    } else {
      document.getElementById('thanks').style.display = 'Block';
      document.getElementById('connectform').style.display = 'none';
    }
  }




}


// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})