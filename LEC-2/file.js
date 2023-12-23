const fs = require("fs");

// to create file
fs.open("MyFile1.txt", "w", function (err, data) {
    if (err) throw err; // to pass err or throw
    console.log("The file has been opened successfully!");
});

//create + update file
fs.appendFile("MyFile2.txt", "Hello world", function (err, data) {
    if (err) throw err;
    console.log("file updated");
});

// Delete file
fs.unlink("MyFile1.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
});

//Rename file
fs.rename("MyFile2.txt", "NewFileName.txt", function (err) {
    if (err) throw err;
    console.log("File renamed!");
});
