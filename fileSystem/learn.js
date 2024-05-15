// TODO: tampilkan teks pada notes.txt pada console.

const fs = require('fs')

const tampilText = (err, result) => {
    if (err){
        console.log('data is not found!')
    }
    console.log(result)
}

fs.readFile("./notes.txt", "utf-8", tampilText)