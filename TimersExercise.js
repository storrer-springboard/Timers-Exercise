console.log('Please pass a whole number to countdown() and then execute the function randomGame()')
// countdown from time
function countdown(time) {
 
  // execute the MyTimer function once every 1000 milliseconds
  let timer = setInterval(MyTimer, 1000);
  
  function MyTimer() {
    // decrement the time by 1
    time--;
    // console.log the present value of time if it is greater to zero
    if(time > 0){
      console.log(time);
    }
    // stop the timer and console.log "DONE!" if time is less than or equal to 
    else if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }    
  }
}

/* The function randomGame selects a random number between 0 and 1 once every 1000 milliseconds until a number
 greater than .75 is generated. */
function randomGame() {
   // counter which will increment once every time a random number is generated
  let tryCounter = 0;
  // execute randomTimer function once every second
  let timer = setInterval(randomTimer, 1000);
  
  function randomTimer() {
    // generate a random number and assign it to randomNumber
    let randomNumber = Math.random();
    //increment the tryCounter
    tryCounter++;
    /* If the number is greater than .75, stop the timer and 
       console.log the number of tries it took before we found 
       a number greater than .75. */
    if(randomNumber > .75) {
      clearInterval(timer);
      console.log(tryCounter + " try/tries was/were needed for a number greater than .75 to be generated.");
    }
  }
}