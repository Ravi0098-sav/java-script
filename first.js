function createHelloWorld(){
    return function() {
        return "Hello World";
    }
}
const helloWorld = createHelloWorld();as
console.log(helloWorld()); // Output: Hello World