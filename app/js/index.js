class Test{
    constructor(){
        this.k = 'hellow world!'
    }
}
let text = new Test();
document.body.innerHTML += `<br>${text.k}\n`;