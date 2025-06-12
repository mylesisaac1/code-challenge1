
 // Estimates transaction fees for mobile money transfers
 
function estimateTransactionFee() {
    // Constants
    const FEE_PERCENTAGE = 0.015; // 1.5%
    const MIN_FEE = 10;
    const MAX_FEE = 70;
    
    // Get user input
    const amountToSend = Number(prompt("Unatuma Ngapi? (KES):"));
    
    // Calculate fee
    let calculatedFee = amountToSend * FEE_PERCENTAGE;
    
    // Apply minimum and maximum limits
    if (calculatedFee < MIN_FEE) {
        calculatedFee = MIN_FEE;
    } else if (calculatedFee > MAX_FEE) {
        calculatedFee = MAX_FEE;
    }
    
    // Calculate total amount
    const totalAmount = amountToSend + calculatedFee;
    
    // Display results
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}\n`);
    console.log("Send Money Securely!");
}

// Call the function
estimateTransactionFee();