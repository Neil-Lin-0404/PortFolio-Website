// new Date (year, month, day, hours, minutes, seconds, milliseconds)

document.addEventListener("DOMContentLoaded", CurMonth);
document.addEventListener("DOMContentLoaded", CurYear);
console.log("[Date] Loaded");
var curYear = new Date().getFullYear();
var curMonth = new Date().getMonth();

console.log("[System] Variables Loaded");
// 執行上一個月或下一個月 並且更新
// Month--
function PrevMonth() {
  curMonth--;
  if (curMonth < 0) {
    curMonth = 11;
    curYear--;
    CurYear();
  }
  CurMonth();
}

// Month++
function NextMonth() {
  curMonth++;
  if (curMonth > 11) {
    curMonth = 0;
    curYear++;
    CurYear();
  }
  CurMonth();
}
// 顯示月份以及年
function CurMonth() {
  let MonthDisplay = document.getElementById("Month");
  firstDayOfMonthLoaded = false;
  getNewCalendar();
  switch (curMonth) {
    case 0:
      MonthDisplay.innerHTML = "January";
      break;
    case 1:
      MonthDisplay.innerHTML = "February";
      break;
    case 2:
      MonthDisplay.innerHTML = "March";
      break;
    case 3:
      MonthDisplay.innerHTML = "April";
      break;
    case 4:
      MonthDisplay.innerHTML = "May";
      break;
    case 5:
      MonthDisplay.innerHTML = "June";
      break;
    case 6:
      MonthDisplay.innerHTML = "July";
      break;
    case 7:
      MonthDisplay.innerHTML = "August";
      break;
    case 8:
      MonthDisplay.innerHTML = "September";
      break;
    case 9:
      MonthDisplay.innerHTML = "October";
      break;
    case 10:
      MonthDisplay.innerHTML = "November";
      break;
    case 11:
      MonthDisplay.innerHTML = "December";
      break;
  }
}
function CurYear() {
  firstDayOfMonthLoaded = false;
  let YearDisplay = document.getElementById("Year");
  YearDisplay.innerHTML = curYear;
  getNewCalendar();
}
// 執行上一年獲這一年 並且更新
// Year--
function PrevYear() {
  curYear--;
  CurYear();
}
// Year++
function NextYear() {
  curYear++;
  CurYear();
}
// 顯示每個月的日曆
// 先顯示上個月的日期 如果當月第一天不是星期日
function getNewCalendar() {
    var curMonth_FirstDay = new Date(curYear, curMonth, 1).getDay(); // 當月第一天是星期幾
// 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
var curMonth_Days = new Date(curYear, curMonth + 1, 0).getDate(); // 當月有幾天
var LastMonth_Days = new Date(curYear, curMonth, 0).getDate(); // 上個月有幾天
var showDates = []; // 用來顯示的日期

  for (let i = curMonth_FirstDay; i > 0; i--) {
    showDates.push(LastMonth_Days - i + 1);
  }
  console.log("[System] Last Month Dates Loaded");
  // 顯示當月的日期
  for (let i = 1; i <= curMonth_Days; i++) {
    showDates.push(i);
  }
  console.log("[System] Current Month Dates Loaded");
  // 顯示下個月的日期 如果當月最後一天不是星期六
  let nextDays = 42 - showDates.length; // 6*7=42
  for (let i = 1; i <= nextDays; i++) {
    showDates.push(i);
  }
  console.log("[System] Next Month Dates Loaded");
  // 顯示日期

  let DayIcons = document.getElementsByClassName("DayIcon");
  var firstDayOfMonthLoaded = false;
  for(let i =0;i<DayIcons.length;i++){
    DayIcons[i].style.backgroundColor = "white";
  }
  for (let i = 0; i < DayIcons.length; i++) {
    DayIcons[i].innerHTML = showDates[i];
    if(showDates[i] === 1 && !firstDayOfMonthLoaded){
        firstDayOfMonthLoaded=true;
        continue;
    }
    if(!firstDayOfMonthLoaded)
    {
        DayIcons[i].style.backgroundColor = "lightgray";
    }
    
    if(showDates[i] === 1 && firstDayOfMonthLoaded){
        firstDayOfMonthLoaded=false;
        DayIcons[i].style.backgroundColor = "lightgray";
    }
  }
}
console.log("[System] Dates Displayed");
