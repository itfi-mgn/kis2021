var days = ['Воскресенье,', 'Понедельник,', 'Вторник,', 'Среда,', 'Четверг,', 'Пятница,', 'Суббота,']; 
var months = ['января', 'Февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 
              'августа', 'сентября', 'октября', 'ноября', 'декабря']; 
 
$(document).ready(function() { 
   var currentTime = new Date();
   var currentDay = days[currentTime.getDay()];
   var currentDate = currentTime.getDate();
   var currentMonth = months[currentTime.getMonth()];
   var currentYear = currentTime.getFullYear();

   $('#date').text(currentDay + ' ' + currentDate + ' ' + currentMonth + ' ' + currentYear); 
});