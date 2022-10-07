function getDayName(dateString) {
    let dayName;
    // Write your code here
    var dayNumber = new Date(dateString).getDay();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    dayName =  daysOfWeek[dayNumber];
    return dayName;
}