//optional arguments
function printAddress (street:string, streetTwo?:string) {
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
}

printAddress('Av siempreviva 123')
printAddress('Av siempreviva 123', 'Suite 540')