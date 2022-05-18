// Optional arguments
function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = 'AZ'; }
    console.log(street);
    if (streetTwo) {
        console.log(streetTwo);
    }
    console.log(state);
}
printAddress('Av siempreviva 123');
printAddress('Av siempreviva 123', 'Suite 540');
printAddress('Av siempreviva 123', 'Suite 540', 'UT');
// Default arguments
//# sourceMappingURL=016_function_args.js.map