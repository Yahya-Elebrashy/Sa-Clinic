
var specialtiesInput = document.getElementById("specialties");
var dNameInput = document.getElementById("dName");
var appointInput = document.getElementById("appoint");
var inputs = document.getElementsByClassName("inputs");
var btnAdd = document.getElementById("btnAdd");
var doctors;
var currentIndex = 0;
var pictureSrc;

if (localStorage.getItem("doctorsApp") == null) {
    doctors = [];
}
else {
    doctors = JSON.parse(localStorage.getItem("doctorsApp"));
    displayDoctors();

}

btnAdd.onclick = function () {
    if (btnAdd.innerHTML == "Update") {
        updateDoctors();

        btnAdd.innerHTML = "Add";
    }
    else {
        addDoctors();

    }

    displayDoctors();
    cleardoctors();

}

function addDoctors() {

    var doctor = {
        specialtie: specialtiesInput.value,
        doctorName: dNameInput.value,
        appointment: appointInput.value
    }
    doctors.push(doctor);
    localStorage.setItem("doctorsApp", JSON.stringify(doctors));
}

function displayDoctors() {
    var doctorDisplay = "";
    for (var i = 0; i < doctors.length; i++) {
        doctorDisplay += `<tr>
                           
                           <td>${doctors[i].specialtie}</td>
                           
                           <td>${doctors[i].doctorName}</td>
                           
                           <td>${doctors[i].appointment}</td>

                           <td><button class="btn btn-danger" onclick="deletedoctors(${i})">Delete</button></td>
                           <td><button class="btn btn-primary" onclick="getDoctorInfo(${i})">Update</button></td>
                           </tr>`
    }
    document.getElementById("tbody").innerHTML = doctorDisplay;
}
function cleardoctors() {
    for (var i = 0; i < 3; i++) {
        specialtiesInput.value = " ";
        dNameInput.value = " ";
        appointInput.value = " ";
    }
}
function deletedoctors(index) {
    doctors.splice(index, 1);
    localStorage.setItem("doctorsApp", JSON.stringify(doctors));
    displayDoctors()

}
function searchdoctors(searchText) {
    var doctorDisplay = "";
    for (var i = 0; i < doctors.length; i++) {
        if (doctors[i].doctorName.toLowerCase().includes(searchText.toLowerCase()))
            doctorDisplay += `<tr>
                           
        <td>${doctors[i].specialtie}</td>
        
        <td>${doctors[i].doctorName}</td>
        
        <td>${doctors[i].appointment}</td>

        <td><button class="btn btn-danger" onclick="deletedoctors(${i})">Delete</button></td>
        <td><button class="btn btn-primary" onclick="getDoctorInfo(${i})">Update</button></td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML = doctorDisplay
}
function getDoctorInfo(index) {
    currentIndex = index;
    var currentDoctor = doctors[index];
    specialtiesInput.value = currentDoctor.specialtie;
    dNameInput.value = currentDoctor.doctorName;
    appointInput.value = currentDoctor.appointment;
    btnAdd.innerHTML = "Update";
}
function updateDoctors() {
    var doctor = {
        specialtie: specialtiesInput.value,
        doctorName: dNameInput.value,
        appointment: appointInput.value
    }
    doctors[currentIndex].specialtie = doctor.specialtie;
    doctors[currentIndex].doctorName = doctor.doctorName;
    doctors[currentIndex].appointment = doctor.appointment;
    localStorage.setItem("doctorsApp", JSON.stringify(doctors));

}

