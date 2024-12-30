const form = document.getElementById('marksForm');
const studentInfo = document.querySelector('.student-info');
const backBtn = document.querySelector('.back-btn');
const circlePhoto = document.querySelector('.circle-photo');
const monthlyMarks = document.querySelector('.monthly-marks');
const buttonGroup = document.querySelector('.button-group');
const headControl = document.querySelector('.head-control');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const grade = form.cl.value;
    const code = form.rl.value;

    if (!grade) {
        showPopup('gradeErrorPopup');
        return;
    }
    if (grade === 'J4') {
        await fetchJunior4Data(code);
    } else if (grade === 'J5') {
        await fetchJunior5Data(code);
    } else if (grade === 'J6') {
        await fetchJunior6Data(code);
    } else if (grade === 'M1') {
        await fetchStudentData('m1.json', code, 'كود الطالب', 'اسم الطالب', false, false, true);
        headControl.textContent = 'Head of the control: Mr. Hassan Magdy';
        headControl.style.opacity = '0';
        headControl.style.animation = 'fadeIn 0.5s ease forwards 0.8s';
    } else if (grade === 'M2') {
        await fetchStudentData('m2.json', code, 'كود الطالب', 'اسم الطالب', false, false, true);
        headControl.textContent = 'Head of the control: Mr. Hassan Magdy';
        headControl.style.opacity = '0';
        headControl.style.animation = 'fadeIn 0.5s ease forwards 0.8s';
    } else if (grade === 'S2') {
        await fetchStudentData('s2.json', code, 'Code', 'Name', true, false, true);
        headControl.textContent = 'Head of the control: Ms. Nhaad El Masry';
        headControl.style.opacity = '0';
        headControl.style.animation = 'fadeIn 0.5s ease forwards 0.8s';
        document.querySelector('.content-wrapper').classList.add('senior');
    } else if (grade === 'S1') {
        await fetchStudentData('s1.json', code, 'code', 'name', true, false, true);
        headControl.textContent = 'Head of the control: Ms. Nhaad El Masry';
        headControl.style.opacity = '0';
        headControl.style.animation = 'fadeIn 0.5s ease forwards 0.8s';
        document.querySelector('.content-wrapper').classList.add('senior');
    }
});

async function fetchJunior4Data(code) {
    try {
        const response = await fetch('j4.json');
        const data = await response.json();
        const student = data.find(s => s['كود الطالب'] === code);

        if (student) {
            form.style.animation = 'fadeOut 0.5s ease forwards';
            circlePhoto.style.animation = 'fadeOut 0.5s ease forwards';
            monthlyMarks.style.animation = 'fadeOut 0.5s ease forwards';
            
            setTimeout(() => {
                form.style.display = 'none';
                circlePhoto.style.display = 'none';
                monthlyMarks.style.display = 'none';
                studentInfo.style.display = 'block';
                
                const studentName = document.querySelector('.student-name');
                studentName.textContent = student['اسم الطالب'];
                studentName.style.animation = 'fadeIn 0.5s ease forwards';
                
                const infoRow = document.querySelector('.info-row');
                infoRow.innerHTML = '';
                
                const subjects = Object.entries(student).filter(([key]) => 
                    key !== 'كود الطالب' && key !== 'اسم الطالب'
                );
            
                subjects.forEach(([subject, color], index) => {
                    const subjectDiv = document.createElement('div');
                    subjectDiv.textContent = `${subject}: ${color}`;
                    subjectDiv.style.backgroundColor = color;
                    subjectDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + (index * 0.1)}s`;
                    infoRow.appendChild(subjectDiv);
                });
                
            }, 500);
        } else {
            showPopup('codeErrorPopup');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching student data');
    }
}

async function fetchJunior5Data(code) {
    try {
        const response = await fetch('j5.json');
        const data = await response.json();
        const student = data.find(s => s['كود الطالب'] === code);

        if (student) {
            form.style.animation = 'fadeOut 0.5s ease forwards';
            circlePhoto.style.animation = 'fadeOut 0.5s ease forwards';
            monthlyMarks.style.animation = 'fadeOut 0.5s ease forwards';
            
            setTimeout(() => {
                form.style.display = 'none';
                circlePhoto.style.display = 'none';
                monthlyMarks.style.display = 'none';
                studentInfo.style.display = 'block';
                
                const studentName = document.querySelector('.student-name');
                studentName.textContent = student['اسم الطالب'];
                studentName.style.animation = 'fadeIn 0.5s ease forwards';
                
                const infoRow = document.querySelector('.info-row');
                infoRow.innerHTML = '';
                
                const subjects = Object.entries(student).filter(([key]) => 
                    key !== 'كود الطالب' && key !== 'اسم الطالب'
                );
            
                subjects.forEach(([subject, color], index) => {
                    const subjectDiv = document.createElement('div');
                    subjectDiv.textContent = `${subject}`;
                    subjectDiv.style.backgroundColor = color;
                    subjectDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + (index * 0.1)}s`;
                    infoRow.appendChild(subjectDiv);
                });
                
            }, 500);
        } else {
            showPopup('codeErrorPopup');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching student data');
    }
}

async function fetchJunior6Data(code) {
    try {
        const response = await fetch('j6.json');
        const data = await response.json();
        const student = data.find(s => s['كود الطالب'] === code);

        if (student) {
            form.style.animation = 'fadeOut 0.5s ease forwards';
            circlePhoto.style.animation = 'fadeOut 0.5s ease forwards';
            monthlyMarks.style.animation = 'fadeOut 0.5s ease forwards';
            
            setTimeout(() => {
                form.style.display = 'none';
                circlePhoto.style.display = 'none';
                monthlyMarks.style.display = 'none';
                studentInfo.style.display = 'block';
                
                const studentName = document.querySelector('.student-name');
                studentName.textContent = student['اسم الطالب'];
                studentName.style.animation = 'fadeIn 0.5s ease forwards';
                
                const infoRow = document.querySelector('.info-row');
                infoRow.innerHTML = '';
                
                const subjects = Object.entries(student).filter(([key]) => 
                    key !== 'كود الطالب' && key !== 'اسم الطالب'
                );
            
                subjects.forEach(([subject, color], index) => {
                    const subjectDiv = document.createElement('div');
                    subjectDiv.textContent = `${subject}: ${color}`;
                    subjectDiv.style.backgroundColor = color;
                    subjectDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + (index * 0.1)}s`;
                    infoRow.appendChild(subjectDiv);
                });
                
            }, 500);
        } else {
            showPopup('codeErrorPopup');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching student data');
    }
}

async function fetchStudentData(jsonFile, code, codeKey = 'كود الطالب', nameKey = 'اسم الطالب', isColorBased = false, isJunior6 = false, showTotal = false) {
    try {
        const response = await fetch(jsonFile);
        const data = await response.json();
        const student = data.find(s => s[codeKey] === code);

        if (student) {
            form.style.animation = 'fadeOut 0.5s ease forwards';
            circlePhoto.style.animation = 'fadeOut 0.5s ease forwards';
            monthlyMarks.style.animation = 'fadeOut 0.5s ease forwards';
            
            setTimeout(() => {
                form.style.display = 'none';
                circlePhoto.style.display = 'none';
                monthlyMarks.style.display = 'none';
                studentInfo.style.display = 'block';
                
                const studentName = document.querySelector('.student-name');
                studentName.textContent = student[nameKey];
                studentName.style.animation = 'fadeIn 0.5s ease forwards';
                
                const infoRow = document.querySelector('.info-row');
                infoRow.innerHTML = '';
                
                const subjects = Object.entries(student).filter(([key]) => 
                    key !== codeKey && key !== nameKey && key !== 'اللغة التانية' && key !== 'الدين'
                );
            
                if (student['اللغة التانية']) {
                    const secLangDiv = document.createElement('div');
                    if (showTotal) {
                        secLangDiv.textContent = `اللغة التانية: ${student['اللغة التانية']}`;
                    } else {
                        secLangDiv.textContent = `اللغة التانية: ${student['اللغة التانية']}`;
                    }
                    secLangDiv.className = 'second-language';
                    secLangDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + (subjects.length * 0.1)}s`;
                    infoRow.appendChild(secLangDiv);
                }
                if (student['Section']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Section: ${student['Section']}`;
                    } else {
                        religionDiv.textContent = `Section: ${student['Section']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Arabic']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Arabic: ${student['Arabic']}/15`;
                    } else {
                        religionDiv.textContent = `Arabic: ${student['Arabic']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['English']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `English: ${student['English']}/15`;
                    } else {
                        religionDiv.textContent = `English: ${student['English']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Math']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Math: ${student['Math']}/15`;
                    } else {
                        religionDiv.textContent = `Math: ${student['Math']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Int.Sci']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Int.Sci: ${student['Int.Sci']}/15`;
                    } else {
                        religionDiv.textContent = `Int.Sci: ${student['Int.Sci']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Histroy']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Histroy: ${student['Histroy']}/15`;
                    } else {
                        religionDiv.textContent = `Histroy: ${student['Histroy']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['A.L']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `A.L: ${student['A.L']}/15`;
                    } else {
                        religionDiv.textContent = `A.L: ${student['A.L']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Philosophy']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Philosophy: ${student['Philosophy']}/18`;
                    } else {
                        religionDiv.textContent = `Philosophy: ${student['Philosophy']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Sec.Language']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Sec.Language: ${student['Sec.Language']}/15`;
                    } else {
                        religionDiv.textContent = `Sec.Language: ${student['Sec.Language']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Civics']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Civics: ${student['Civics']}/3`;
                    } else {
                        religionDiv.textContent = `Civics: ${student['Civics']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Reiligon']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Reiligon: ${student['Reiligon']}/15`;
                    } else {
                        religionDiv.textContent = `Reiligon: ${student['Reiligon']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Science']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Science: ${student['Science']}/15`;
                    } else {
                        religionDiv.textContent = `Science: ${student['Science']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['ARABIC']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `ARABIC: ${student['ARABIC']}/15`;
                    } else {
                        religionDiv.textContent = `ARABIC: ${student['ARABIC']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['ENGLISH O.L']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `ENGLISH O.L: ${student['ENGLISH O.L']}/15`;
                    } else {
                        religionDiv.textContent = `ENGLISH O.L: ${student['ENGLISH O.L']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['MATH']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `MATH: ${student['MATH']}/15`;
                    } else {
                        religionDiv.textContent = `MATH: ${student['MATH']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['SCIENCE']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `SCIENCE: ${student['SCIENCE']}/15`;
                    } else {
                        religionDiv.textContent = `SCIENCE: ${student['SCIENCE']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['N.S']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `N.S: ${student['N.S']}/15`;
                    } else {
                        religionDiv.textContent = `N.S: ${student['N.S']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['H.L']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `H.L: ${student['H.L']}/15`;
                    } else {
                        religionDiv.textContent = `H.L: ${student['H.L']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['ART']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `ART: ${student['ART']}/15`;
                    } else {
                        religionDiv.textContent = `ART: ${student['ART']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['COMPUTER']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `COMPUTER: ${student['COMPUTER']}/15`;
                    } else {
                        religionDiv.textContent = `COMPUTER: ${student['COMPUTER']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['RELIGIN']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `RELIGIN: ${student['RELIGIN']}/15`;
                    } else {
                        religionDiv.textContent = `RELIGIN: ${student['RELIGIN']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['FRENCH']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `FRENCH: ${student['FRENCH']}/15`;
                    } else {
                        religionDiv.textContent = `FRENCH: ${student['FRENCH']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Geography']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Geography: ${student['Geography']}/15`;
                    } else {
                        religionDiv.textContent = `Geography: ${student['Geography']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Religion']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Religion: ${student['Religion']}/15`;
                    } else {
                        religionDiv.textContent = `Religion: ${student['Religion']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Psychology']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Psychology: ${student['Psychology']}/15`;
                    } else {
                        religionDiv.textContent = `Psychology: ${student['Psychology']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['History']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `History: ${student['History']}/15`;
                    } else {
                        religionDiv.textContent = `History: ${student['History']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Biology']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Biology: ${student['Biology']}/15`;
                    } else {
                        religionDiv.textContent = `Biology: ${student['Biology']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Chemistry']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Chemistry: ${student['Chemistry']}/15`;
                    } else {
                        religionDiv.textContent = `Chemistry: ${student['Chemistry']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                if (student['Physics']) {
                    const religionDiv = document.createElement('div');
                    if (showTotal) {
                        religionDiv.textContent = `Physics: ${student['Physics']}/15`;
                    } else {
                        religionDiv.textContent = `Physics: ${student['Physics']}`;
                    }
                    religionDiv.style.animation = `fadeIn 0.5s ease forwards ${0.5 + ((subjects.length + 1) * 0.1)}s`;
                    infoRow.appendChild(religionDiv);
                }
                
            }, 500);
        } else {
            showPopup('codeErrorPopup');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching student data');
    }
}

backBtn.addEventListener('click', () => {
    location.reload();
});

function showPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
}