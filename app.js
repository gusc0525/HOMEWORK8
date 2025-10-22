//HOMEWORK7
console.log('Hello World!!');
//create variables 
const name = "Gus Cardenas Rosales"
let hasDownloaded = false;

//create alert when resume is downloaded 
document.addEventListener('DOMContentLoaded', function(){
    const downloadBtn = document.querySelector('.resume-btn');

    downloadBtn.addEventListener('click', function(){
        if(!hasDownloaded){
            alert("Your resume is downloaded successfully!");
            hasDownloaded = true;
        }
    });
});

//create greeting using java
function showGreeting(name){
    return "Hello my name is " + name + "! Welcome to my portfolio!";
}

document.addEventListener('DOMContentLoaded', function(){
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = showGreeting(name);
});

//create ongoing projects variables  
function daysUntilDeadline(deadlineDate){
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const diffTime = deadline - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

//display the remaining days 
const remainingdays = daysUntilDeadline("2025-11-01");
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("deadline").textContent = 
    "Days until project deadline: " + remainingdays;
});

//HOMEWORK8
//creating add a new skill button
document.getElementById("addSkillBtn").addEventListener("click", function(){
    //constants for function
    const skillInput = document.getElementById("skillInput");
    const skillValue = skillInput.value.trim();

    if(skillValue !== ""){
        const skillList = document.querySelector("#skills ul");
        const newSkill = document.createElement("li");
        newSkill.innerHTML = `<i><b>${skillValue}</b></i>`;
        skillList.appendChild(newSkill);
        skillInput.value = "";
    }else{
        alert("Please enter a skill!");
    }
});

//projects list + deadline & status
//creating constnats with info of projects 
const projectTitles = ["Portfolio Website", "MIPS Card Dealer", "Yahtzee Game Simulator"];
const projectDescriptions = [
    "A website that displays my overall assets using HTML, JS, and CSS.",
    "A MIPS assembly project that hands out a ranodm set of cards.",
    "A yahtzee game player using C langaunge and directories"
];

const projectDeadlines = ["2025-12-01", "2025-03-17", "2025-09-12"];

const projectContainer = document.getElementById("projectContainer");
projectContainer.innerHTML = "";

const currentDate = new Date();

//loop to check status of project
for(let i = 0; i< projectTitles.length; i++){
    const deadline = new Date(projectDeadlines[i]);
    let status = "";

    if (deadline > currentDate){
        status = "Ongoing";
    }else{
        status = "Completed";
    }

    const card = document.createElement("div");
    card.className = "card mb-3 p-3";
    card.innerHTML = `
    <h4>${projectTitles[i]}</h4>
    <p>${projectDescriptions[i]}</p>
    <p><b>Deadline:</b> ${projectDeadlines[i]}</p>
    <p><b>Status:</b> ${status}</p>
    `;
    projectContainer.appendChild(card);
}

//create a download counter on the resume button
let downloadCount = 0;
const downloadCountDisplay = document.getElementById("downloadCount");

document.querySelector(".resume-btn").addEventListener("click", function(){
    downloadCount++;
    downloadCountDisplay.textContent = `Downloads: ${downloadCount}`;
});

//creating tables for exepreince 
//constants to fill table
const experiences = [
    { role: "Title", company: "Company Name", duration: "TIME-TIME"},
    { role: "Title", company: "Company Name", duration: "TIME-TIME"}
    
];

const education = [
    { school: "Coconino High School", degree: "High School Diploma", duration: "2019-2023"},
    { school: "Northern Arizona University", degree: "B.S in Computer Science", duration: "2023-present"}
];

const expDiv = document.getElementById("experienceTable");
const expTable = document.createElement("table");
expTable.className = "table table-striped table-bordered text-center";
expTable.innerHTML += `
    <tr>
        <th>Role</th>
        <th>Company</th>
        <th>Duration</th>
    </tr>
`;

experiences.forEach(exp =>{
    expTable.innerHTML += `
    <tr>
        <td>${exp.role}</td>
        <td>${exp.company}</td>
        <td>${exp.duration}</td>
    </tr>
`;
});
expDiv.appendChild(expTable);

//table for education
const eduDiv = document.getElementById("educationTable");
const eduTable = document.createElement("table");
eduTable.className = "table table-striped table-bordered text-center";
eduTable.innerHTML += `
    <tr>
        <th>Institution</th>
        <th>Degree</th>
        <th>Duration</th>
    </tr>
`;

education.forEach(edu =>{
    eduTable.innerHTML += `
    <tr>
        <td>${edu.school}</td>
        <td>${edu.degree}</td>
        <td>${edu.duration}</td>
    </tr>
`;
});
eduDiv.appendChild(eduTable);
