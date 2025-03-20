const form = document.getElementById('marksForm');
const studentInfo = document.querySelector('.student-info');
const backBtn = document.querySelector('.back-btn');
const circlePhoto = document.querySelector('.circle-photo');
const monthlyMarks = document.querySelector('.monthly-marks');
const buttonGroup = document.querySelector('.button-group');
const headControl = document.querySelector('.head-control');
const downloadBtn = document.querySelector('.download-btn');

// Standardize field names across different JSON files
const FIELD_MAPPINGS = {
  // Science subjects
  "Biology ": "Biology",
  "Chemistry ": "Chemistry", 
  "Physics ": "Physics",
  "Int.Sci": "Int.Sci",
  "SCIENCE": "Science",
  "N.S": "N.S",
  
  // Languages
  "Sec.Language": "SecondLanguage",
  "FRENCH": "French",
  "اللغة التانية": "SecondLanguage",
  
  // Math
  "MATH": "Math",
  
  // English
  "English(O.L)": "English",
  "ENGLISH O.L": "English",
  "English( H.L)": "H.L",
  
  // Religion
  "RELIGIN": "Religion",
  
  // Computer/Tech
  "COMPUTER": "Computer",
  "ICT": "Computer",
  "D.S": "D.S",
  
  // Art
  "ART": "Art",
  " A.L": "Art",
  "A.L": "Art",
  
  // Arabic
  "arbic": "Arabic",
  
  // History/Geography
  " History": "History",
  "Histroy": "History",
  " Geography": "Geography",
  
  // Psychology/Philosophy 
  " Psychology": "Psychology",
  "Philosophy": "Philosophy",
  
  // Civics
  "Civics ": "Civics",
  "Civics": "Civics",
  
  // Middle school specific subjects
  "ARABIC": "Arabic",
  "ENGLISH O.L": "English",
  "MATH": "Math",
  "SCIENCE": "Science",
  "N.S": "Science",
  "H.L": "H.L",
  "ART": "Art",
  "COMPUTER": "Computer",
  "RELIGIN": "Religion",
  "FRENCH": "French",
  
  // Senior 1 specific subjects
  "Arabic": "Arabic",
  "English": "English",
  "Math": "Math",
  "Int.Sci": "Int.Sci",
  "Histroy": "History",
  "Philosophy": "Philosophy",
  "Sec.Language": "Second Language",
  "Religion": "Religion",
  "Civics": "Civics",
  "A.L": "A.L",
};

function standardizeFieldName(field) {
  return FIELD_MAPPINGS[field] || field;
}

function getStudentData(studentCode) {
  // Try to find student in each JSON file
  const files = ['s2', 's1', 'm2', 'm1', 'j6', 'j5', 'j4'];
  
  for (const file of files) {
    const data = require(`../data/${file}.json`);
    
    const student = data.find(s => 
      String(s.Code || s.code || s['كود الطالب']) === String(studentCode)
    );

    if (student) {
      // Convert to standardized format
      const standardized = {};
      
      for (const [key, value] of Object.entries(student)) {
        const standardKey = standardizeFieldName(key);
        if (standardKey) {
          standardized[standardKey] = value;
        }
      }

      return standardized;
    }
  }

  return null;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const grade = form.cl.value;
    const code = form.rl.value;

    if (!grade) {
        showPopup('gradeErrorPopup');
        return;
    }

    // Show loading screen
    showLoadingScreen();

    // Wait for 4 seconds
    await new Promise(resolve => setTimeout(resolve, 4000));

    if (grade === 'J4') {
        await fetchJunior4Data(code);
    } else if (grade === 'J5') {
        await fetchJunior5Data(code);
    } else if (grade === 'J6') {
        await fetchJunior6Data(code);
    } else if (grade === 'M1') {
        await fetchStudentData('data/m1.json', code, 'كود الطالب', 'اسم الطالب', false, false, true);
    } else if (grade === 'M2') {
        await fetchStudentData('data/m2.json', code, 'كود الطالب', 'اسم الطالب', false, false, true);
    } else if (grade === 'S2') {
        await fetchStudentData('data/s2.json', code, 'Code', 'Name', true, false, true);
        document.querySelector('.content-wrapper').classList.add('senior');
    } else if (grade === 'S1') {
        await fetchStudentData('data/s1.json', code, 'code', 'name', true, false, true);
        document.querySelector('.content-wrapper').classList.add('senior');
    }
});

async function fetchJunior4Data(code) {
    try {
        const response = await fetch('data/j4.json');
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
        const response = await fetch('data/j5.json');
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
        const response = await fetch('data/j6.json');
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
                
                // Create student header container
                const studentHeader = document.createElement('div');
                studentHeader.className = 'student-header';
                
                // Add student name
                const studentName = document.createElement('div');
                studentName.className = 'student-name';
                studentName.textContent = student[nameKey];
                studentHeader.appendChild(studentName);
                
                // Create sub-info container for language and section
                const subInfo = document.createElement('div');
                subInfo.className = 'sub-info';
                
                // Add second language circle
                const langCircle = document.createElement('div');
                langCircle.className = 'lang-circle';
                let secondLang = 'F'; // Default for junior grades
                if (student['اللغة التانية'] !== undefined) {
                    secondLang = student['اللغة التانية'];
                }
                langCircle.textContent = secondLang;
                subInfo.appendChild(langCircle);
                
                // Add section if it exists
                if (student['Section']) {
                    const sectionLabel = document.createElement('div');
                    sectionLabel.className = 'section-label';
                    sectionLabel.textContent = student['Section'];
                    subInfo.appendChild(sectionLabel);
                }
                
                studentHeader.appendChild(subInfo);
                
                // Replace old student name div with new header
                const oldStudentName = document.querySelector('.student-name');
                oldStudentName.parentNode.replaceChild(studentHeader, oldStudentName);

                const infoRow = document.querySelector('.info-row');
                infoRow.innerHTML = '';

                // Add Second Language if it exists
                if (student['اللغة التانية']) {
                    const secLangDiv = document.createElement('div');
                    secLangDiv.textContent = `Second Language: ${student['اللغة التانية']}`;
                    secLangDiv.className = 'second-language';
                    secLangDiv.style.animation = 'fadeIn 0.5s ease forwards 0.6s';
                    infoRow.appendChild(secLangDiv);
                }

                // Define subjects based on grade level
                const isSenior1 = jsonFile.includes('s1.json');
                const isMiddleSchool = jsonFile.includes('m1.json') || jsonFile.includes('m2.json');
                
                const subjects = isSenior1 ? [
                    ['Arabic', 'Arabic', 15],
                    ['English', 'English', 15],
                    ['Math', 'Math', 15],
                    ['Int.Sci', 'Int.Sci', 15],
                    ['Histroy', 'History', 15],
                    ['Philosophy', 'Philosophy', 18],
                    ['Sec.Language', 'Second Language', 15],
                    ['Religion', 'Religion', 15],
                    ['Civics', 'Civics', 3],
                    ['A.L', 'A.L', 15]
                ] : isMiddleSchool ? [
                    ['ARABIC', 'Arabic', 15],
                    ['ENGLISH O.L', 'English', 15],
                    ['MATH', 'Math', 15],
                    ['SCIENCE', 'Science', 15],
                    ['N.S', 'N.S', 15],
                    ['H.L', 'H.L', 15],
                    ['ART', 'Art', 15],
                    ['COMPUTER', 'Computer', 15],
                    ['RELIGIN', 'Religion', 15],
                    ['FRENCH', 'French', 15]
                ] : student['Section'] === 'ادبى' ? [
                    ['Arabic', 'Arabic', 15],
                    ['English', 'English', 15],
                    ['Math', 'Math', 15],
                    [' Geography', 'Geography', 15],
                    [' History', 'History', 15],
                    [' Psychology', 'Psychology', 15],
                    ['Sec.Language', 'Second Language', 15],
                    ['Religion', 'Religion', 15],
                    [' A.L', 'A.L', 15],
                    ['Civics', 'Civics', 3]
                ] : [
                    ['Arabic', 'Arabic', 15],
                    ['English', 'English', 15],
                    ['Math', 'Math', 15],
                    ['Biology ', 'Biology', 15],
                    ['Chemistry ', 'Chemistry', 15],
                    ['Physics ', 'Physics', 15],
                    ['Sec.Language', 'Second Language', 15],
                    ['Religion', 'Religion', 15],
                    [' A.L', 'A.L', 15],
                    ['Civics ', 'Civics', 3]
                ];

                // Add subject grades
                subjects.forEach(([field, display, total], index) => {
                    if (student[field] !== undefined) {
                        const subjectDiv = document.createElement('div');
                        const grade = student[field];
                        
                        // Handle "Control" grades differently (case insensitive)
                        if (typeof grade === 'string' && grade.toLowerCase() === 'control') {
                            subjectDiv.innerHTML = `
                                <span class="subject-name">${display}</span>
                                <span class="subject-grade control">Under Review</span>
                            `;
                            subjectDiv.classList.add('control-grade');
                        } else {
                            subjectDiv.innerHTML = `
                                <span class="subject-name">${display}</span>
                                <span class="subject-grade">${showTotal ? `${grade}/${total}` : grade}</span>
                            `;
                        }
                        
                        subjectDiv.style.animation = `fadeIn 0.5s ease forwards ${0.7 + (index * 0.1)}s`;
                        infoRow.appendChild(subjectDiv);
                    }
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

function showLoadingScreen() {
    // First, fade out the existing content
    const placeholder = document.querySelector('.placeholder');
    placeholder.style.opacity = '0';
    placeholder.style.transition = 'opacity 0.5s ease';

    // Wait for fade out to complete before showing loading screen
    setTimeout(() => {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                    </svg>
                </div>
                <div class="loading-text">Loading Results</div>
                <div class="loading-progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="developers-credit">
                    Web developed by<br>Ahmed Kabary & Youssief Zidan
                </div>
            </div>
        `;
        document.querySelector('.content-wrapper').appendChild(loadingScreen);

        // Reset placeholder opacity after loading screen is removed
        setTimeout(() => {
            loadingScreen.classList.add('fade-out');
            setTimeout(() => {
                loadingScreen.remove();
                placeholder.style.opacity = '1';
            }, 500);
        }, 4000);
    }, 500); // Wait for fade out animation to complete
}

downloadBtn.addEventListener('click', async () => {
    try {
        // Create certificate container
        const certificateContainer = document.createElement('div');
        certificateContainer.className = 'certificate-container';
        certificateContainer.style.display = 'block';
        certificateContainer.style.position = 'fixed';
        certificateContainer.style.left = '-9999px';
        certificateContainer.style.background = 'white';
        certificateContainer.style.width = '800px';
        certificateContainer.style.padding = '40px';
        
        certificateContainer.innerHTML = `
            <div class="certificate-border">
                <div class="certificate-header">
                    <div class="school-info">
                        <h1 class="certificate-title">EL EKBAL LANGUAGE SCHOOL</h1>
                        <h2>Boys Department</h2>
                        <div class="certificate-line"></div>
                        <h3>Monthly Assessment Results</h3>
                    </div>
                </div>
                <div class="certificate-content">
                    <div class="student-details">
                        <div class="detail-column">
                            <div class="detail-item">
                                <p class="detail-label">Student Name</p>
                                <p class="detail-value student-name-rtl">${document.querySelector('.student-name').textContent}</p>
                            </div>
                            ${document.querySelector('.section-label') ? 
                              `<div class="detail-item">
                                  <p class="detail-label">Section</p>
                                  <p class="detail-value">${document.querySelector('.section-label').textContent}</p>
                              </div>` : ''
                            }
                        </div>
                    </div>
                    <div class="results-section">
                        <h4>Subject Results</h4>
                        <div class="results-grid">
                            ${document.querySelector('.info-row').innerHTML}
                        </div>
                    </div>
                </div>
                <div class="certificate-footer">
                    <div class="signatures">
                        <div class="signature">
                            <div class="sign-line"></div>
                            <p>School Principal</p>
                            <p>Mr. Magdy Salama</p>
                        </div>
                        <div class="signature">
                            <img src="images/logo/Dr_Ahmed_Abdelfatah.png" class="stamp" alt="Dr. Ahmed Abdelfatah Stamp">
                            <div class="sign-line"></div>
                            <p>Headmaster</p>
                            <p>Dr. Ahmed Abdelfatah</p>
                        </div>
                    </div>
                    <div class="certificate-stamp"></div>
                    <div class="developers-credit">
                        Web developed by<br>Ahmed Kabary & Youssief Zidan
                    </div>
                </div>
                <img src="images/logo/logo.png" class="pdf-logo" alt="Logo">
            </div>
        `;

        // Add certificate styles
        const certificateStyles = `
            <style>
                .certificate-container {
                    padding: 40px;
                    font-family: 'Oswald', sans-serif !important;
                }
                .certificate-border {
                    border: 2px solid #003470;
                    padding: 30px;
                    position: relative;
                    min-height: 800px;
                }
                .header-flex {
                    display: flex;
                    align-items: flex-start;
                    gap: 30px;
                }
                .logo-section {
                    flex-shrink: 0;
                }
                .certificate-logo {
                    width: 100px;
                    height: auto;
                }
                .school-info {
                    flex-grow: 1;
                    text-align: center;
                }
                .certificate-title {
                    color: #003470;
                    font-size: 28px;
                    margin-bottom: 10px;
                }
                .certificate-line {
                    height: 2px;
                    background: #003470;
                    margin: 15px auto;
                    width: 80%;
                }
                .student-details {
                    margin: 30px 0;
                }
                .detail-column {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .detail-item {
                    text-align: center;
                    margin-bottom: 10px;
                }
                .detail-label {
                    color: var(--primary-color);
                    font-size: 14px;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .detail-value {
                    font-size: 16px;
                }
                .student-name-rtl {
                    direction: rtl;
                    text-align: center;
                    font-size: 18px;
                    font-weight: bold;
                }
                .results-section {
                    margin: 20px 0;
                }
                .results-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 10px;
                    margin-top: 10px;
                }
                .signatures {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 50px;
                }
                .signature {
                    text-align: center;
                    width: 200px;
                    margin-top: 20px;
                    position: relative;
                }
                .sign-line {
                    width: 100%;
                    height: 1px;
                    background: #000;
                    margin-bottom: 10px;
                }
                .stamp {
                    position: absolute;
                    top: -150px; /* Adjusted to keep the same location */
                    right: 0; /* Adjust as needed */
                    width: 220px; /* Increased size by 100px */
                    transform: rotate(-15deg); /* Adjust angle as needed */
                    opacity: 0.8; /* Adjust opacity as needed */
                }
                h4 {
                    text-align: center;
                    color: #003470;
                    margin-bottom: 15px;
                }
                .developers-credit {
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    font-size: 10px;
                    color: #999;
                }
                .pdf-logo {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    width: 150px;
                    height: auto;
                    opacity: 0.5;
                }
            </style>
        `;
        
        document.body.appendChild(certificateContainer);
        const styleElement = document.createElement('style');
        styleElement.textContent = certificateStyles;
        document.head.appendChild(styleElement);
        
        // Use html2canvas to capture the certificate
        const canvas = await html2canvas(certificateContainer, {
            scale: 2,
            useCORS: true,
            logging: false
        });
        
        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('Monthly_Results.pdf');
        
        // Clean up
        document.body.removeChild(certificateContainer);
        document.head.removeChild(styleElement);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Error generating PDF. Please try again.');
    }
});