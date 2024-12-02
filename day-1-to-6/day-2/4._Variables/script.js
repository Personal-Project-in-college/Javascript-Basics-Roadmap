
//! Variable

var a = "Global Variable"

if (true) {
    console.log(a)
}

if (true) {
    let b ="Local Variable"
    console.log(b);
}
console.log(b) // Akan Error karena berusaha memangil local variable b
