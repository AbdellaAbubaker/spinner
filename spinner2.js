
const arr = ['\r|   --','\r/   00', '\r-   <>', '\r\\   ' ]
let time = 0;
for (let element of arr) {
    time += 200
    setTimeout(()=> {
        process.stdout.write(element)
    },time)
    
}
