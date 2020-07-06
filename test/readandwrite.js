///////////////////////write

const fs = require('fs');

let towrite = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(towrite, null, 2);
fs.writeFileSync('student.json', data);

////////////////////////read

// const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let toread = JSON.parse(rawdata);
console.log(toread);


//////////////////////////modify
toread.age = 10;

let dat = JSON.stringify(toread, null, 2);
fs.writeFileSync('student.json', dat);
