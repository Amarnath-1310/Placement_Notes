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