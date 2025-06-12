// This function calculates the fare for a boda boda ride based on the distance in kilometers.
function calculateBodaFare() {
    let distanceInKm = parseFloat(prompt("Unafika wapi mkubwa? Kilometer ngapi?"));
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        alert("Tafadhali ingiza umbali sahihi kwa kilometer.");
        return;
    }
    const baseFare = 50; // Base fare in shillings
    const chargePerKm = 15; // Charge per kilometer in shillings

    let rideFare = baseFare;
    let distanceFare = distanceInKm * chargePerKm;
    let totalFare = rideFare + distanceFare;

    console.log("Uko kwote? Io ni $(distanceInKm) km:");
    console.log()
}