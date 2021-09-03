let line = "we found map so beneficial";

let counts = new Map();

for (const ch of line) {
    if(counts.has(ch)){
        counts.set(ch, counts.get(ch)+1);
    } else {
        counts.set(ch, 1);
    }
}

console.log(counts);