var data = JSON.parse(localStorage.getItem("data"));

var nameip = document.getElementById("name");
var ageip = document.getElementById("age");
var emailip = document.getElementById("email");
var addressip = document.getElementById("address");
var phoneip = document.getElementById("phone");

nameip.innerHTML = data.name;
ageip.innerHTML = data.age;
emailip.href = "mailto:" + data.email;
emailip.innerText = data.email;
addressip.innerHTML = data.address;
phoneip.innerText = data.phone;

var qualifications = document.getElementById("qualificationsList");
var projects = document.getElementById("projectsList");

data.project.map(data => {
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = `${data.title}: ${data.description} - ${data.skills}`;
    var button = document.createElement("span");
    button.innerText = "X";
    button.style.color = "red";
    button.style.cursor = "pointer";
    button.style.padding = "0 4px";
    li.append(span, button);
    projects.append(li);
    button.addEventListener("click", ()=>{
       projects.removeChild(li);
    });
 });
 
 data.qualification.map(data => {
     console.log(data)
    var li = document.createElement("li");
    var span = document.createElement("span");
    span.innerText = `${data.degree} in ${data.specialization} from ${data.start}-${data.end}`;
    var button = document.createElement("span");
    button.innerText = "X";
    button.style.color = "red";
    button.style.cursor = "pointer";
    button.style.padding = "0 8px";
    li.append(span, button);
    qualifications.append(li);
    button.addEventListener("click", ()=> {
        qualifications.removeChild(li);
    });
 });
 