// {
//     console.log('a','\u0061');
//     console.log('s','\u20BB7');
// }
{
    let user ={
        name: 'list',
        info: 'heheheh'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2;
    }
}
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}