// 
const scan = document.getElementById('scan');
const pelvic = document.getElementById('pelvic');
const templates = document.querySelectorAll('.report-body');
const scanTemplate = document.getElementById('scanTemplate');
const sonographTemplate = document.getElementById('sonographTemplate');
const a5Section= document.querySelector('.a5-document');
const formTitle = document.getElementById('form-title');
const testTitle = document.getElementById('test-title');
const clinicInfo = document.getElementById('clinicInfo');
const body = document.getElementById('.report-body');
const template1 = document.createElement('section').innerHTML = `
<div class="report-body-left">
    <div class="input-fields">
        <p>BIPARIETAL DIAMETER</p><input>
    </div>
    <div class="input-fields">
        <p>HEAD CIRCUMFERENCE</p><input>
    </div>
    <div class="input-fields">
        <p>ABDOMINAL CIRCUMFERENCE</p><input>
    </div>
    <div class="input-fields">
        <p>FEMUR LENGTH</p><input>
    </div>
    <div class="input-fields">
        <p>FETAL WEIGHT</p><input>
    </div>
    <div class="input-fields">
        <p>USS GESTTATIONAL AGE</p><input>
    </div>
    <div class="input-fields">
        <p>E.D.D</p><input>
    </div>
    <div class="input-fields">
        <p>FETAL PRESENTATION</p><input>
    </div>
    <div class="input-fields">
        <p>NUMBER OF GESTATION</p><input>
    </div>
    <div class="input-fields">
        <p>AMNIOTIC FLUID</p><input>
    </div>
    <div class="input-fields">
        <p>PLACENTA LOCATION</p><input>
    </div>
    <div class="input-fields">
        <p>SEX</p><input>
    </div>
    <div class="input-fields">
        <p>MISCELLANEOU</p><input>
    </div>
</div>
<div class="report-body-right">
    <img src="images/Womb1.jpg" alt="">
    <img src="images/Anteriorwomb.jpg" alt="">
</div>
`

let name;



function createNode(element) {
    return document.createElement(element);
}

function append(parent, child) {
    return parent.appendChild(child);
}


function show(name, template) {
    
    name.addEventListener('click', () => {
        templates.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });

        if (template) {
            template.style.display = 'flex'; // Show the selected section
        }
        // alert('working');
        a5Section.style.visibility = "visible";
        formTitle.innerHTML = " [ " +name.innerHTML + " Report]";
        testTitle.innerText = name.innerHTML + " Report";
        template.style.zIndex = 2;
        
    })
}

// function limitText(clinicInfo) {
//     const maxWidth = 148; // Adjust this value to your desired width
//     const maxHeight = 3; // Adjust this value to your desired height
    
//     const lines = clinicInfo.value.split('\n');
//     let newLines = [];
    
//     for (let i = 0; i < lines.length; i++) {
//         if (lines[i].length <= maxWidth) {
//             newLines.push(lines[i]);
//         } else {
//             newLines.push(lines[i].substr(0, maxWidth));
//         }
//     }

//     if (newLines.length <= maxHeight) {
//         clinicInfo.value = newLines.join('\n');
//     } else {
//         clinicInfo.value = newLines.slice(0, maxHeight).join('\n');
//     }
// }

show(scan, scanTemplate);
show(pelvic, sonographTemplate);