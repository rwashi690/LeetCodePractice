// Given a 12 hour AM/PM format convert it to military time

// Define a function that will take the standard time and then convert it to military time
function convertToMilitary(s){
    // we have two different possibilities
    // 1 ) It is between 1AM and noon -> no conversion of the first part of the time is neccessary
    //  2) It is betwee 1PM and midnight -> 13-24 hours

    // console.log(s.substring(0,2))
    // console.log(s.substring(2,8))
    // console.log(s.substring(8,10))
    // 12AM -> 24 hours
    // 1AM -> 01 hours
    // ...
    // 11AM -> 11 hours
    //12 PM -> 12 hours
    // 1PM -> 13 hours
    // ...
    //11PM -> 23 hours

    // The two main exceptions

    const Hour = s.substring(0,2) //the number hour
    const minsec = s.substring(2,8) //the associated minutes and seconds
    const dayTime = s.substring(8,10) //whether it is AM or PM

    const hour = parseInt(Hour)

    if (dayTime === 'PM' && hour < 12){
        let convHour = (hour + 12).toString();
        // return convHour+minsec;
        console.log(convHour+minsec)
    } else if (dayTime ==='AM' && hour===12){
        let convHour = '00';
        // return convHour+minsec;
        console.log(convHour+minsec)
    } else{
        // return Hour+minsec;
        console.log(Hour+minsec)
    }
}

convertToMilitary('12:05:45AM')