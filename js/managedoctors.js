
var doctorNameInput = document.getElementById("doctorName");
var doctorPriceInput = document.getElementById("doctorPrice");
var choosePictureInput = document.getElementById("choosePicture");
var doctorDescriptionInput = document.getElementById("doctorDescription");
var doctorappointmentInput = document.getElementById("doctorappointment");
var inputs = document.getElementsByClassName("inputs");
var btnAdd = document.getElementById("btnAdd");
var PNameAlert = document.getElementById("PNameAlert");
var PPriceAlert = document.getElementById("PPriceAlert");
var PCategoryAlert = document.getElementById("PCategoryAlert");
var PDescriptionAlert = document.getElementById("PDescriptionAlert")
var doctors;
var currentIndex = 0;
var pictureSrc
if (localStorage.getItem("doctors") == null) {
    doctors = [];
}
else {
    doctors = JSON.parse(localStorage.getItem("doctors"));
    displayDoctors();

}
btnAdd.onclick = function () {
    if (btnAdd.innerHTML == "Update") {
        updateDoctors();
        clearProducts();
        btnAdd.innerHTML = "Add";

    }
    else {
        addDoctors();

    }

    displayDoctors();
    clearProducts();
}


function previewImage() {
    var file = document.getElementById("file").files
    if (file.length > 0) {
        var fileReader = new FileReader()

        fileReader.onload = function (event) {
            pictureSrc = event.target.result
        }

        fileReader.readAsDataURL(file[0])
    }
}





function addDoctors() {

    var doctor = {
        Name: doctorNameInput.value,
        Price: doctorPriceInput.value,
        Category: pictureSrc,
        Description: doctorDescriptionInput.value,
        appointment:doctorappointmentInput.value
    }
    doctors.push(doctor);
    localStorage.setItem("doctors", JSON.stringify(doctors));
}

function displayDoctors() {
    var doctorDisplay = "";
    for (var i = 0; i < doctors.length; i++) {
        doctorDisplay += `<tr>
                           <td>
                           <img class="table-head__img" src="${doctors[i].Category}"></td>
                           
                           <td>${doctors[i].Name}</td>
                           
                           <td>${doctors[i].Price}</td>
                           <td>${doctors[i].Description}</td>
                           <td>${doctors[i].appointment}</td>
                           <td><button class="btn btn-danger" onclick="deletedoctors(${i})">Delete</button></td>
                           <td><button class="btn btn-primary" onclick="getDoctorInfo(${i})">Update</button></td>
                           </tr>`
    }
    document.getElementById("tbody").innerHTML = doctorDisplay
}
function clearProducts() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}
function deletedoctors(index) {
    doctors.splice(index, 1);
    localStorage.setItem("doctors", JSON.stringify(doctors));
    displayDoctors()

}
function searchdoctors(searchText) {
    var doctorDisplay = "";
    for (var i = 0; i < doctors.length; i++) {
        if (doctors[i].Name.toLowerCase().includes(searchText.toLowerCase()))
            doctorDisplay += `
        <tr>
        <td>
        <img class="table-head__img" src="${doctors[i].Category}"></td>    
        <td>${doctors[i].Name}</td>
        <td>${doctors[i].Price}</td>
        <td>${doctors[i].Description}</td>
        <td><button class="btn btn-danger" onclick="deletedoctors(${i})">Delete</button></td>
        <td><button class="btn btn-primary" onclick="getDoctorInfo(${i})">Update</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = doctorDisplay
}
function getDoctorInfo(index) {
    currentIndex = index;
    var currentDoctor = doctors[index];
    doctorNameInput.value = currentDoctor.Name;
    doctorPriceInput.value = currentDoctor.Price;
    doctorDescriptionInput.value = currentDoctor.Description;
    doctorappointmentInput.value = currentDoctor.appointment;
    btnAdd.innerHTML = "Update";
}
function updateDoctors() {
        var doctor = {
            Name: doctorNameInput.value,
            Price: doctorPriceInput.value,
            Category:pictureSrc,
            Description: doctorDescriptionInput.value,
            appointment:doctorappointmentInput.value
        }
        doctors[currentIndex].Name = doctor.Name;
        doctors[currentIndex].Price = doctor.Price;
        doctors[currentIndex].Category = doctor.Category;
        doctors[currentIndex].Description = doctor.Description;
        doctors[currentIndex].appointment = doctor.appointment;
        localStorage.setItem("doctors", JSON.stringify(doctors));
}

