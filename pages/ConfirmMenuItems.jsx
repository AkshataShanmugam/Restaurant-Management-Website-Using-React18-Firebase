let mylist = [];

const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
const props = storedItems; 
const temp = Object.values(props)[0];

for (let key in temp){
    mylist.push(temp[key]);
}

console.log(mylist);

export default mylist;