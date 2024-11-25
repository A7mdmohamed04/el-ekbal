// اختيار الزر وعنصر body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// التحقق من التفضيل المحفوظ في localStorage
const savedTheme = localStorage.getItem('theme');

// تطبيق الوضع المحفوظ عند تحميل الصفحة
if (savedTheme) {
    body.classList.add(savedTheme);
}

// إضافة مستمع للنقر على الزر
toggleButton.addEventListener('click', () => {
    // تبديل وضع الليل
    body.classList.toggle('dark-mode');

    // حفظ الوضع الحالي في localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});
