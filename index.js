// Getting inputs elements  from the form
let date =document.querySelector('#date')
let Month = document.querySelector('#Month')
let Year = document.querySelector('#Year')
// the variable TodayYear be the present year
let TodayYear = new Date().getFullYear()
let TodayMonth = 5
let TodayDay = new Date().getDate()

// let result days
let resultDays; 
// These variable would hold the date the user enter so as to perform the operation
let pastYear 
let pastMonth
let pastDate
// Storing the date of today so as to use for difference
let today = new Date(`${TodayMonth}/${TodayDay}/${TodayYear}`)
let past 
let daysInMonths
// Function()
// getting the html to store the result
let  NumberofDays = document.querySelector('#NumberofDays')
let numberOfYears = document.querySelector('#NumberoFYears')
let NumberOfMonth = document.querySelector('#NumberOfMonth')
//getting the  img element to perforn the click eventlisterner using the function RenderDayDifference
let button = document.querySelector('button')

button.addEventListener('click',RenderDayDifference)
// Getting the error html element starting by the year
let yearError = document.querySelector('#yearError')
let MonthError = document.querySelector('#MonthError')
let DateError = document.querySelector('#errorDate')
 function RenderDayDifference(){
    event.preventDefault()

    // Variables to hold the inputValues
let dateValue = Number(date.value)
let monthValue = Number(Month.value)
let yearValue = Number(Year.value) 


    // Starting by year
    if(yearValue  >0 && yearValue  <= TodayYear){
        Year.classList.remove('error')
        pastYear = Year.value
        yearError.textContent = ''

    }else if(yearValue  >0 && yearValue  > TodayYear){
        Year.classList.add('error')
        yearError.textContent = 'The year must be have past'
    }
    else if(yearValue  <0 && yearValue  < TodayYear){
        Year.classList.add('error')
        yearError.textContent = 'it should be greather than 1 year'
    }
    else if(yearValue  ===""){
        Year.classList.add('error')
        yearError.textContent = 'it should not be empty'
    }
    // Next with  month
   if(monthValue >0 && monthValue <=12){
       daysInMonths = [0,31, (Year.value % 4 === 0 && (Year.value % 100 !== 0 || Year.value % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
       MonthError.textContent = ''
       pastMonth = Month.value
       Month.classList.remove('error')
   }
   else if(monthValue >0 &&monthValue >12){
       MonthError.textContent = 'inValid Year'
       Month.classList.add('error')
   }
   else if(monthValue<=0 && monthValue >12 ){
    MonthError.textContent = 'inValid Year'
    Month.classList.add('error')
   }
   else if(monthValue <=0 && monthValue <12 ){
    MonthError.textContent = 'inValid Year'
    Month.classList.add('error')
   }
   else{
    MonthError.textContent = 'Should not be empty'
    Month.classList.add('error')
   }
    // Next with date
     if(dateValue >= 1 &&  dateValue <= daysInMonths[monthValue] ){
        pastDate = dateValue
        date.classList.remove('error')
        DateError.textContent = ''
        past = new Date(`${pastMonth}/${pastDate}/${pastYear}`)
        resultDays = Math.floor(diffTimes(past,today)/ (1000 * 60 * 60 * 24))
        NumberofDays.textContent = resultDays
        NumberOfMonth.textContent = Math.floor(resultDays/30.44)
        numberOfYears.textContent = Math.floor(resultDays/365.24)
    }
    else if(dateValue === ""){
        DateError.textContent = 'Date must not be empty'
        date.classList.add('error')

    }
    else if(dateValue >= 1 &&  dateValue > daysInMonths[monthValue] ){
         DateError.textContent = 'Date didn`t exist '
         date.classList.add('error')

     }
   else{
        DateError.textContent = 'Date didn`t exis nnt '
        date.classList.add('error')
     }
 }



function diffTimes(time1,time2){
   return time2-time1;

}
