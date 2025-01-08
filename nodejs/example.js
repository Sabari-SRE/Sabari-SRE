var name ="Sabarinathan";
var age = 25;
var hasHobby = true;

function displayUser(userName,userAge,userHasHobby)
{
return 'User name is '+userName+'\n' +
'age is '+userAge+'\n' +
'has hobby? '+userHasHobby;
}
console.log(displayUser(name,age,hasHobby));
const sum=(a,b) => (a+b);

console.log(sum(1,2));

const play=['Cricket','baseball'];
console.log(play.map(hobby=>'play:'+hobby));

const hobby=['cricket','baseball'];
hobby.push('Golf');
console.log(hobby);

setTimeout(() => {
    console.log('Time is over;')
}, 3000);
console.log('Hi Vasuki');