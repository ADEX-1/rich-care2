// 
const scan = document.getElementById('scan');
const pelvic = document.getElementById('pelvic');
const templates = document.querySelectorAll('.report-body');
const scanTemplate = document.getElementById('scanTemplate');
const sonographTemplate = document.getElementById('sonographTemplate');
const a5Section = document.querySelector('.a5-document');
// const biparietal = document.getElementById('biparietal');
const pElements = document.querySelectorAll('#g-function #f-btn');
const formTitle = document.getElementById('form-title');
const testTitle = document.getElementById('test-title');
const functionBtn = document.getElementById('g-age');
const gFunction =document.getElementById('g-function-container');
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
let template;

 
    function createNode(element) {
    return document.createElement(element);
}

function append(parent, child) {
    return parent.appendChild(child);
}

functionBtn.addEventListener('click', () => {
    // alert('working');
    functionBtn.addEventListener('mouseup', () => {
        functionBtn.style.scale = 0.8;
    })
    functionBtn.addEventListener('mousedown', () => {
        functionBtn.style.scale = 0.6;
    })
    
    if(gFunction.style.display == 'flex'){
        gFunction.style.display = 'none';
        functionBtn.style.scale = 1;
    }else{
        gFunction.style.display = 'flex';
    }
})

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
function handleElementClick(element) {
    // Remove "active" class from all pElements
    pElements.forEach(pElement => {
        pElement.classList.remove('active');
    });

    // Add "active" class to the clicked element
    element.classList.add('active');

    // Update the value based on the clicked element
    const ussInput = document.getElementById('uss');
    ussInput.value = element.textContent + 'weeks';
}
function templateValue(biparietal, head, abdominal, femur, fetal, fPresentaion, gestation, aminiotic, placenta, sex) {
    document.getElementById('biparietal').value = biparietal;
    document.getElementById('head').value = head;
    document.getElementById('abdominal').value = abdominal;
    document.getElementById('femur').value = femur;
    document.getElementById('fetal').value = fetal;
    document.getElementById('f-presentation').value = fPresentaion;
    document.getElementById('gestation').value = gestation;
    document.getElementById('aminiotic').value = aminiotic;
    document.getElementById('placenta').value = placenta;
    document.getElementById('sex').value = sex;
}
// Get all the 'p' elements with the id 'f-btn' within the 'g-function' container

// Loop through the 'p' elements and add a function based on their content
pElements.forEach(pElement => {
    pElement.addEventListener('click', () => {
        handleElementClick(pElement);
    })
    pElement.addEventListener('mouseup', () => {
        pElement.style.scale = 1;
    })
    pElement.addEventListener('mousedown', () => {
        pElement.style.scale = 0.6;
    })
    // pElement.classList.remove('active');
    switch (parseInt(pElement.textContent)) {
        case 12:
            pElement.addEventListener('click', () => {
                templateValue('2.0cm', '7.1cm', '5.6cm', '0.8cm', '15g', 'Unstable', 'One', 'Normal Volume', 'See over Leaf', '');
            });
            break;
        case 13:
            pElement.addEventListener('click', () => {
                templateValue('2.3cm', '8.4cm', '6.9cm', '1.2cm', '27g', 'Unstable', 'One', 'Normal Volume', 'See over Leaf', '');
            });
            break;
        case 14:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '2.7cm';
                document.getElementById('head').value = '9.8cm';
                document.getElementById('abdominal').value = '8.1cm';
                document.getElementById('femur').value = '1.5cm';
                document.getElementById('fetal').value = '52g';
                document.getElementById('f-presentation').value = 'Unstable';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
            });
            break;
        case 15:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '3.0cm';
                document.getElementById('head').value = '11.1cm';
                document.getElementById('abdominal').value = '9.3cm';
                document.getElementById('femur').value = '1.8cm';
                document.getElementById('fetal').value = '73g';
                document.getElementById('f-presentation').value = 'Unstable';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
            });
            break;
        case 16:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '3.3cm';
                document.getElementById('head').value = '12.4cm';
                document.getElementById('abdominal').value = '10.5cm';
                document.getElementById('femur').value = '2.1cm';
                document.getElementById('fetal').value = '100g';
                document.getElementById('f-presentation').value = 'Unstable';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XY';
            });
            break;
        case 17:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '3.7cm';
                document.getElementById('head').value = '13.7cm';
                document.getElementById('abdominal').value = '11.7cm';
                document.getElementById('femur').value = '2.4cm';
                document.getElementById('fetal').value = '148g';
                document.getElementById('f-presentation').value = 'Unstable';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 18:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '4.0cm';
                document.getElementById('head').value = '15.0cm';
                document.getElementById('abdominal').value = '12.9cm';
                document.getElementById('femur').value = '2.7cm';
                document.getElementById('fetal').value = '190g';
                document.getElementById('f-presentation').value = 'obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'Xy';
            });
            break;
        case 19:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '4.3cm';
                document.getElementById('head').value = '16.3cm';
                document.getElementById('abdominal').value = '14.1cm';
                document.getElementById('femur').value = '3.0cm';
                document.getElementById('fetal').value = '246g';
                document.getElementById('f-presentation').value = 'obl\' Breech';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'Xy';
            });
            break;
        case 20:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '4.6cm';
                document.getElementById('head').value = '17.5cm';
                document.getElementById('abdominal').value = '16.2cm';
                document.getElementById('femur').value = '3.3cm';
                document.getElementById('fetal').value = '300g';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 21:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '5.0cm';
                document.getElementById('head').value = '18.7cm';
                document.getElementById('abdominal').value = '16.4cm';
                document.getElementById('femur').value = '3.3cm';
                document.getElementById('fetal').value = '362g';
                document.getElementById('f-presentation').value = 'Obl\' Breech';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 22:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '5.3cm';
                document.getElementById('head').value = '19.9cm';
                document.getElementById('abdominal').value = '17.5cm';
                document.getElementById('femur').value = '3.9cm';
                document.getElementById('fetal').value = '448g';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 23:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '5.5cm';
                document.getElementById('head').value = '21.0cm';
                document.getElementById('abdominal').value = '18.6cm';
                document.getElementById('femur').value = '4.2cm';
                document.getElementById('fetal').value = '529g';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XY';
            });
            break;
        case 24:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '5.8cm';
                document.getElementById('head').value = '22.1cm';
                document.getElementById('abdominal').value = '19.7cm';
                document.getElementById('femur').value = '4.4cm';
                document.getElementById('fetal').value = '640g';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 25:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '6.1cm';
                document.getElementById('head').value = '23.2cm';
                document.getElementById('abdominal').value = '20.6cm';
                document.getElementById('femur').value = '4.7cm';
                document.getElementById('fetal').value = '720g';
                document.getElementById('f-presentation').value = 'Obl\' Breech';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 26:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '6.4cm';
                document.getElementById('head').value = '24.2cm';
                document.getElementById('abdominal').value = '21.0cm';
                document.getElementById('femur').value = '4.0cm';
                document.getElementById('fetal').value = '800g';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 27:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '6.7cm';
                document.getElementById('head').value = '25.2cm';
                document.getElementById('abdominal').value = '22.9cm';
                document.getElementById('femur').value = '5.1cm';
                document.getElementById('fetal').value = '1.0kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 28:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '7.0cm';
                document.getElementById('head').value = '26.2cm';
                document.getElementById('abdominal').value = '24.0cm';
                document.getElementById('femur').value = '5.4cm';
                document.getElementById('fetal').value = '1.2kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 29:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '7.2cm';
                document.getElementById('head').value = '27.1cm';
                document.getElementById('abdominal').value = '25.0cm';
                document.getElementById('femur').value = '5.6cm';
                document.getElementById('fetal').value = '1.3kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 30:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '7.5cm';
                document.getElementById('head').value = '28.6cm';
                document.getElementById('abdominal').value = '26.0cm';
                document.getElementById('femur').value = '5.8cm';
                document.getElementById('fetal').value = '1.5kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 31:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '7.7cm';
                document.getElementById('head').value = '28.9cm';
                document.getElementById('abdominal').value = '27.0cm';
                document.getElementById('femur').value = '6.1cm';
                document.getElementById('fetal').value = '1.6kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 32:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '7.9cm';
                document.getElementById('head').value = '29.7cm';
                document.getElementById('abdominal').value = '28.0cm';
                document.getElementById('femur').value = '6.3cm';
                document.getElementById('fetal').value = '1.85kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'Xy';
            });
            break;
        case 33:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '8.2cm';
                document.getElementById('head').value = '30.4cm';
                document.getElementById('abdominal').value = '29.0cm';
                document.getElementById('femur').value = '6.5cm';
                document.getElementById('fetal').value = '2.1kg';
                document.getElementById('f-presentation').value = 'Obl\' Cephalic';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 34:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '8.4cm';
                document.getElementById('head').value = '31.2cm';
                document.getElementById('abdominal').value = '30.0cm';
                document.getElementById('femur').value = '6.6cm';
                document.getElementById('fetal').value = '2.3kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'Normal Anterior';
                document.getElementById('sex').value = 'XY';
            });
            break;
        case 35:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '8.6cm';
                document.getElementById('head').value = '31.8cm';
                document.getElementById('abdominal').value = '30.9cm';
                document.getElementById('femur').value = '6.8cm';
                document.getElementById('fetal').value = '2.5kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 36:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '8.8cm';
                document.getElementById('head').value = '32.5cm';
                document.getElementById('abdominal').value = '31.8cm';
                document.getElementById('femur').value = '7.0cm';
                document.getElementById('fetal').value = '2.7kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 37:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '9.0cm';
                document.getElementById('head').value = '33.1cm';
                document.getElementById('abdominal').value = '32.7cm';
                document.getElementById('femur').value = '7.2cm';
                document.getElementById('fetal').value = '2.79kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XY';
            });
            break;
        case 38:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '9.1cm';
                document.getElementById('head').value = '33.6cm';
                document.getElementById('abdominal').value = '33.6cm';
                document.getElementById('femur').value = '7.3cm';
                document.getElementById('fetal').value = '3.1kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 39:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '9.3cm';
                document.getElementById('head').value = '34.1cm';
                document.getElementById('abdominal').value = '34.5cm';
                document.getElementById('femur').value = '7.5cm';
                document.getElementById('fetal').value = '3.4kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        case 40:
            pElement.addEventListener('click', () => {
                document.getElementById('biparietal').value = '9.5cm';
                document.getElementById('head').value = '35.4cm';
                document.getElementById('abdominal').value = '35.4cm';
                document.getElementById('femur').value = '7.6cm';
                document.getElementById('fetal').value = '3.6kg';
                document.getElementById('f-presentation').value = 'Cephalic';
                document.getElementById('gestation').value = 'One';
                document.getElementById('aminiotic').value = 'Normal Volume';
                document.getElementById('placenta').value = 'See Over Leaf';
                document.getElementById('sex').value = 'XX';
            });
            break;
        // Add more cases for other values as needed
        default:
            pElement.addEventListener('click', () => {
                // Add a default function for other cases
                // alert('Clicked on a number');
            });
    }
});


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