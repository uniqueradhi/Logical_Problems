/*
Formatting dates on js depends on our needs

Methods in formatting in js
    getFullYear()
    getMonth()->the index startting from 0-11/4 represents may month
    getDate()->it is the exact day value not an index ,so it starts from 1.'

    All these methods will work the constructor new Date() 

    Eg:
        let objectDate = new Date();
        let date = objectDate.getDate();
        console.log(date); 

        let month = objectDate.getMonth();
        console.log(month + 1); 

        let year = objectDate.getFullYear();
        console.log(year);

    Different types of date formating:

        let format1 = `${month}/${day}/${year}`;
        console.log(format1); 

        let format2 = `${day}/${month}/${year}`;
        console.log(format2); 

        let format3 = `${month}-${day}-${year}`;
        console.log(format3); 

        let format4 = `${day}-${month}-${year}`;
        console.log(format4);
    
    Formatting dates using moment.js:

        let date = moment().format();
        console.log(date);
*/