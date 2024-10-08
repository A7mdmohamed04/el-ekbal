function showTimetable() {
    // Hide all timetables
    var timetables = document.getElementsByClassName('timetable');
    for (var i = 0; i < timetables.length; i++) {
        timetables[i].classList.add('hidden');
    }

    // Get the selected timetable
    var selectedTimetable = document.getElementById('timetable-select').value;

    // Show the selected timetable
    if (selectedTimetable) {
        document.getElementById(selectedTimetable).classList.remove('hidden');
    }
}
