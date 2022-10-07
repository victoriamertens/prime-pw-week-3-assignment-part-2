console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for(let index = 0; index<6; index++) {
  console.log(index);
 } 
 //The thing that needed to be changed was the condition expression needed to run as long as index was less than 6, meaning when index reached six it would stop the loop. 

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let index = 3; index<6; index++) {  
  console.log(index); 
}
//The thing that needed to change was the starting index, since we want the count to start at three instead of 0. 

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let index = 1; index< 6; index++) { 
  console.log(index*2);
}
//What needed to change was what was printed to the console. We want the number to increase by 2 and not one, which can be accomplished in a few ways. 
//One is to console log twice the index number, like I did. Alternatively, would could have changed the increment expression to index+=2 and started at index = 2, to accomplish the same task (example below)

/*for (let index = 2; index<11; index+=2)
{console.log(index);}*/

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let index=5; index>=0; index--) { 
  console.log(index);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (type of stars) { 
  console.log(type); 
}

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let index = 0; 
while(index < stars.length) { 
  console.log(stars[index]); 
  index++; 
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let i = 0; 
while(i<6) { 
  console.log(i); 
  i++; 
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
 
let whileIndex = 10; 
while(whileIndex>4) { 
  console.log(whileIndex); 
  whileIndex--; 
}