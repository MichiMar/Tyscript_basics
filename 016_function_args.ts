// // Optional arguments
// function printAddress (street:string, streetTwo?:string, state = 'AZ') {
//     console.log(street);
//     if (streetTwo) {
//         console.log(streetTwo);
//     }
//     console.log(state);
    
// }

// printAddress('Av siempreviva 123')
// printAddress('Av siempreviva 123', 'Suite 540')
// // Default arguments
// printAddress('Av siempreviva 123', 'Suite 540', 'UT')


function lineupCard(team: string, ...players: string[]) {
    console.log('Team: ' + team);
    for (let player of players) { 
      console.log(player);
    }
}
  
lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');