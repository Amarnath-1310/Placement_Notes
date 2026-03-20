let ticketbooking = new Promise((resolve, reject)=>{
    let prize = 900;
    if(prize < 800){
        resolve();
    }else{
        reject();
    }
});

ticketbooking.then(()=>{console.log("Ticket Booked Success!!")})
.catch(()=>{console.log("Booking Failed")})


console.log("Start")
setTimeout(()=>{
    console.log("This is Timeout")
},5000); //Executes After 5 Seconds
console.log("End")


console.log("Start")
setInterval(()=>{
    console.log("This is Interval")
},5000); //Executes for every 5 Seconds
console.log("End")


function ticketbooking(prize) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prize < 800) {
        resolve("Booking Success!");
      } else {
        reject("Booking Rejected!");
      }
    },5000);
  });
}
ticketbooking(600);

async function bookingupdate(){
    let result = await ticketbooking(1500);
    console.log(result);
}


