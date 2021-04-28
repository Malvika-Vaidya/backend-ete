var formsubmit = document.getElementById("formsubmit");
var nameip = document.getElementById("nameip");
var ageip = document.getElementById("ageip");
var emailip = document.getElementById("emailip");
var addressip = document.getElementById("addressip");
var phoneip = document.getElementById("phoneip");


var projects = []
var qualifications = []


formsubmit.addEventListener('click',()=>{
    if (nameip.value === '' || emailip.value === '' || phoneip.value === '') {
        return alert("please enter all inputs")
    }
    var data = {
        name : nameip.value,
        age : ageip.value,
        email : emailip.value,
        address : addressip.value,
        phone : phoneip.value,
        
    }
    localStorage.setItem("data",JSON.stringify(data));
    location.href = "resume.html"
})

addqual.addEventListener('click',()=>{
    if (degree.value === '' || specialization.value === '' || start.value === '' || end.value === '') {
        return alert("please enter all inputs")
    }
    if(parseInt(start.value) > parseInt(end.value)) {
        return alert("end year is smaller then start year")
    }
    var opt = `${degree.value} in ${specialization.value} from ${start.value}-${end.value}`
    var x = document.createElement("div")
    var deg = degree.value
    var sp = specialization.value
    var st = start.value
    var en = end.value
    var bt1 = document.createElement("button")
    var bt2 = document.createElement("button")

    bt1.className = "btn btn-link"
    bt1.innerHTML = "edit"
    bt2.className = "btn btn-link"
    bt2.innerHTML = "delete"
    
    x.className = "qualsclass form-control"
    x.innerHTML = opt

    bt2.addEventListener("click",()=>{
        quals.removeChild(x)
        for( var i = 0; i < qualifications.length; i++){
            if (qualifications[i].degree == deg) { 
                qualifications.splice(i, 1);
            }
        }
    })
    bt1.addEventListener("click",()=>{
        degree.value = deg
        specialization.value = sp
        start.value = st
        end.value = en
        quals.removeChild(x)
        for( var i = 0; i < qualifications.length; i++){
            if (qualifications[i].degree == deg) { 
                qualifications.splice(i, 1);
            }
        }
    })

    x.appendChild(bt1)
    x.appendChild(bt2)
    var ob = {
        degree : deg,
        specialization : sp,
        start : st,
        end : en
    }
    qualifications.push(ob);
    quals.appendChild(x)
    degree.value = ''
    specialization.value = ''
    start.value = ''
    end.value = ''
})


addpro.addEventListener('click',()=>{
    if (title.value === '' || description.value === '' || skills.value === '') {
        return alert("please enter all inputs")
    }
   
    var opt = `${title.value}: ${description.value} - ${skills.value}`
    var x = document.createElement("div")
    var tit = title.value
    var dc = description.value
    var sk = skills.value
    var bt1 = document.createElement("button")
    var bt2 = document.createElement("button")

    bt1.className = "btn btn-link"
    bt1.innerHTML = "edit"
    bt2.className = "btn btn-link"
    bt2.innerHTML = "delete"
    
    x.className = "qualsclass form-control"
    x.innerHTML = opt

    bt2.addEventListener("click",()=>{
        pros.removeChild(x)
        for( var i = 0; i < projects.length; i++){
            if (projects[i].title == tit) { 
                projects.splice(i, 1);
            }
        }
    })
    bt1.addEventListener("click",()=>{
        title.value = tit
        description.value = dc
        skills.value = sk
        pros.removeChild(x)
        for( var i = 0; i < projects.length; i++){
            if (projects[i].title == tit) { 
                projects.splice(i, 1);
            }
        }
    })

    x.appendChild(bt1)
    x.appendChild(bt2)
    var ob = {
        title : tit,
        description : dc,
        skills : sk
    }
    projects.push(ob);
    pros.appendChild(x)
    title.value = ''
    description.value = ''
    skills.value = ''
})