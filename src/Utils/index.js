export const isEmail = (value) => {
    return  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}

export const isAlphabetic = (value) => {
    return /^[a-z][a-z\s]*$/.test(value);
}

export const isInteger = (value) => {
    if(value.includes('.')){
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
}


export const parseDateFrom_yyyy_MM_dd = (value) => {
    let dateParts = value.split('-');
    var date = new Date();
    date.setFullYear(dateParts[0]);
    date.setMonth(dateParts[1]-1);
    date.setDate(dateParts[2]);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
}

export const yearsBetween  = ( date1, date2 ) => {
    var one_day=1000*60*60*24*365;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return Math.floor(Math.abs(difference_ms/one_day)); 
}


