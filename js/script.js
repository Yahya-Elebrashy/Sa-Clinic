let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');
let loginSubmit = document.getElementById("loginSubmit");
let activeties = document.getElementById("activeties");
let emailLoginInput = document.getElementById("emailLogin");
let passwordLoginInput = document.getElementById("passwordLogin");
let fNameInput = document.getElementById("fName");
let lNameInput = document.getElementById("lName");
let emailInput = document.getElementById("email");
let phoneNumberInput = document.getElementById("phoneNumber");
let passwordInput = document.getElementById("password");
let cPasswordInput = document.getElementById("cPassword");
let alertLogin = document.getElementById("alertLogin");
let makeAppointment1 = document.getElementById("makeAppointment1");
let makeAppointment2 = document.getElementById("makeAppointment2");
let makeAppointment3 = document.getElementById("makeAppointment3");
let makeAppointmentDName = document.getElementById("makeAppointmentDName");
let doctorConnect = document.querySelectorAll(".doctor-connect");
let visa = document.getElementById("visa");
let vCash = document.getElementById("vCash");
let paymentVisa = document.getElementById("paymentVisa");
let paymentVCash = document.getElementById("paymentVCash");
let loginData;
let dName = localStorage.getItem("doctorName");

if (localStorage.getItem("login") == null) {
   loginData = [];
}
else {
   loginData = JSON.parse(localStorage.getItem("login"));

}
if (window.location.pathname == "/pages/makeappointment.html") {
   makeAppointmentDName.value = dName
}
console.log(loginData)

if (localStorage.getItem('loginState') == null) {
   if (window.location.pathname == "/pages/login.html") {
      navbar.innerHTML = `
      <a href="/">home</a>
             
      <a href="/pages/register.html">register</a>
      `;
   }
   else if (window.location.pathname == "/pages/register.html") {
      navbar.innerHTML = `
   <a href="/">home</a>
          
   <a href="/pages/login.html">login</a>

   `;
   }
   else {
      navbar.innerHTML = `
   <a href="/">home</a>
          
   <a href="/pages/login.html">login</a>
   <a href="/pages/register.html">register</a>
   `;
   }

}

else if (localStorage.getItem('loginState') == "isLogedUser") {
   navbar.innerHTML = `
   <a href="/">home</a>    
   <button class="logout" onclick="logOut()"><a href="/">Logout</a></button>
   <a href="/pages/activeties.html" id="activeties" >My activeties</a>
   `;
   doctorConnect.forEach(item => { item.classList.add("d-flex"); });

}
else if (localStorage.getItem('loginState') == "isLogedAdmin") {
   navbar.innerHTML = `
   <a href="/admin/home.html">home</a>    
   <button class="logout" onclick="logOut()"><a href="/">Logout</a></button>
   `;
}
else if (localStorage.getItem('loginState') == "isLogedDoctor") {
   navbar.innerHTML = `
   <a href="/doctor/home.html">home</a>    
   <button class="logout" onclick="logOut()"><a href="/">Logout</a></button>
   `;
}
{/* <a href="/pages/feedback.html">feedback</a> */ }
menu.addEventListener("click", () => {

   navbar.classList.toggle('active');
}
)

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if (window.scrollY > 0) {
      header.classList.add('active');
   } else {
      header.classList.remove('active');
   }

}
function register() {
   var loginInfo = {
      firstName: fNameInput.value,
      lastName: lNameInput.value,
      email: emailInput.value,
      phoneNumber: phoneNumberInput.value,
      passwordI: passwordInput.value,
      confirmPassword: cPasswordInput.value
   }
   loginData.push(loginInfo);
   localStorage.setItem("login", JSON.stringify(loginData));
   window.location.pathname = "/pages/login.html";
}
function login() {
   let loginUser = false;
   for (var i = 0; i < loginData.length; i++) {
      if (loginData[i].email == emailLoginInput.value && loginData[i].passwordI == passwordLoginInput.value) {
         loginUser = true;
         break
      }
   }


   if (loginUser) {
      window.location.pathname = "/";
      localStorage.setItem('loginState', 'isLogedUser');
   }
   else if (emailLoginInput.value === "admin@gmail.com" && passwordLoginInput.value === "admin@gmail.com") {

      window.location.pathname = "/admin/home.html";
      localStorage.setItem('loginState', 'isLogedAdmin');
   }
   else if (emailLoginInput.value === "doctor@gmail.com" && passwordLoginInput.value === "doctor@gmail.com") {
      window.location.pathname = "/doctor/home.html";
      localStorage.setItem('loginState', 'isLogedDoctor');
   }
   else {
      // window.location.pathname="/";
      alertLogin.classList.add("d-block")
   }

}
makeAppointment1.addEventListener("click", () => {
   makeAppointment1.href = "/pages/makeappointment.html";
   localStorage.setItem('doctorName', 'Ahmed Ayad');
});
makeAppointment2.addEventListener("click", () => {
   makeAppointment2.href = "/pages/makeappointment.html";
   localStorage.setItem('doctorName', 'Menatuallah Samir');
});

makeAppointment3.addEventListener("click", () => {
   makeAppointment3.href = "/pages/makeappointment.html";
   localStorage.setItem('doctorName', 'Mohamed ElSayed');
});
function checkpayment() {
   if (visa.checked) {
      paymentVisa.classList.remove("d-none");
      paymentVCash.classList.add("d-none");
      console.log("fffffffff")
   }
   if(vCash.checked){
      paymentVisa.classList.add("d-none");
      paymentVCash.classList.remove("d-none");
   }
}



// function checkLoginAppointment(){
//    if(localStorage.getItem('login')==null){
//       makeAppointment.href = "/pages/login.html";
//    }

//    else if(localStorage.getItem('login')=="isLogedIn")
//       makeAppointment.href = "/pages/makeappointment.html";

// }

function logOut() {
   localStorage.removeItem("loginState");
}

