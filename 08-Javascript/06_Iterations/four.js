// for in - takes indices or keys - for objects

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    //console.log(myObj[key]); // values
    //console.log(key); // keys
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {    
    console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

for (const key in object) {
    console.log(key);
        
} // not iterable so no output