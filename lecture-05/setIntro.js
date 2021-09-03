let s = new Set();

let line = "happy is not a dog";

for (const ch of line) {
    s.add(ch);
}

console.log(Array.of(...s));