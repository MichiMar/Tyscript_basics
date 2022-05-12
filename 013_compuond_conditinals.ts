let email : string = 'test@tes.com';
let password : string = 'asdfasdf';

// // if (password == 'asdfasdf' && email == 'test@tes.com') {
// if (password == 'asdfasdf' || password == 'zxcvzxcv') {
//     console.log('Password is correct');
// }  else {
//     console.log('Permission denied');    
// }

// *This code is correct, but is not common to use it to get the exact different result
if (!(email == 'tesst@test.com')) {
    console.log('You are authotized');
}