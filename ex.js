// fetch('file:///path/to/your/data.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



// const fs = require('fs');

// fs.readFile('./data.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('data oregin: ',JSON.parse(data));

// });

const data = require('./data.json');

const namesArray = [];

 data.forEach(user => {
   const {salary, first_name, last_name } = user;
   namesArray.push({ salary,first_name, last_name });
  
 });
// console.log(namesArrayy); bai 1 vs 3
const mappedArray = namesArray.map(user => `Fullname: ${user.salary} ${user.first_name} ${user.last_name}`);

// console.log('mapArrrrrrrrrrrr',mappedArray);

// by reduce
// const nameArray = data.reduce((acc, obj) => {
//   const { first_name, last_name } = obj;
//   acc.push({ first_name, last_name });
//   return acc;
// }, []);

// console.log('arr name by reduce',nameArray);



//bai 2 use filteredData to map instead foreach
const filteredData = data.filter(user => user.gender === 'Male' && user.age < 40);
const mappedData = filteredData.map(user => {
  return {
    first_name: user.first_name,
    last_name: user.last_name
  };
});
// console.log(mappedData);

//by reduce
// const filteredData = data.reduce((acc, obj) => {
//   if (obj.gender === 'Male' && obj.age < 40) {
//     acc.push(obj);
//   }
//   return acc;
// }, []);

//  console.log('arr filter by reduce',filteredData);




//bai 4 obj to camelCase
const camelCase = str => {
  return str.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase());
};

const newData = data.map(obj => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[camelCase(key)] = obj[key];
    return acc;
  }, {});
});

// console.log('Arrrr CamelCace',newData);



//by reduce
// function camelCase(str) {
//   return str.replace(/_([a-z])/g, (m, p1) => p1.toUpperCase());
// }

// const newData = data.reduce((acc, obj) => {
//   const newObj = Object.keys(obj).reduce((innerAcc, key) => {
//     innerAcc[camelCase(key)] = obj[key];
//     return innerAcc;
//   }, {});
//   acc.push(newObj);
//   return acc;
// }, []);

//  console.log('Arrrr CamelCace by reduce',newData);

//bai 7


const sortedDataName = data.sort((a, b) => {
  const firstNameA = a.first_name.toUpperCase();
  const firstNameB = b.first_name.toUpperCase();
  if (firstNameA < firstNameB) {
    return -1;
  }
  if (firstNameA > firstNameB) {
    return 1;
  }
  return 0;
});

// console.log('Arr sort',sortedDataName);


const sortedDataSalary = data.sort((a, b) => {
  return a.salary - b.salary;
});

// console.log('Arr sort salary',sortedDataSalary);



//bai 8

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];


const charactersArray=[];
characters.forEach(crt=> {
  const {name,height}=crt;
  charactersArray.push({name,height});
})

const mapCharacter=charactersArray.map(crt => `All of Name: ${crt.name} and heght :${crt.height}`);
console.log('All of Name',mapCharacter);


const filterCrt=characters.filter(crt=> crt.height>200);
const mapCrt=filterCrt.map(crt=> {
  return {
    name:crt.name
  }
})
console.log('heght 200',mapCrt);

const filterCrtmass=characters.filter(crt=> crt.mass<100);
 console.log('mass 100',filterCrtmass);


const sortCrt=characters.sort((a,b)=>{
  const firstNameA = a.name;
  const firstNameB = b.name;
  if (firstNameA < firstNameB) {
    return -1;
  }
  if (firstNameA > firstNameB) {
    return 1;
  }
  return 0;
});
console.log('sort name',sortCrt);

const sortCrt1=characters.sort((a,b)=>{
  return b.mass-a.mass
});
console.log('sort mass',sortCrt1);

const sortCrt2 = characters.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});
console.log('sort gender',sortCrt2);


//bai 9

const Addresss=[{

  address : '123 Main St.',
  district : 'Central District',
  province : 'Ontario',
  city : 'Toronto',


},{

  address : '123 texas.',
  district : 'quarer',
  province : 'hillter',
  city : 'abc',


}

]


const formattedAddress =Addresss.map((crt,index)=> `Addresss: id:${index} ${crt.address}, ${crt.district}, ${crt.province}, ${crt.city}`)

console.log(formattedAddress); // Output: "123 Main St., Central District, Ontario, Toronto"


// function formatAddress(address, district, province, city) {
//   return `${address}, ${district}, ${province}, ${city}`;
// }

// // Example usage:
// const myAddress = formatAddress("123 Main St.", "Central District", "Ontario", "Toronto");
// console.log(myAddress); // Output: "123 Main St., Central District, Ontario, Toronto"



// bai 10

