// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // ... previous code ...

    // Handle the Print Button
    const printBtn = document.getElementById("print-btn");
    printBtn.addEventListener("click", function() {
        // This triggers the browser's native print dialog
        // Users can choose "Save as PDF" from there
        window.print();
   

}); // End of DOMContentLoaded
    // Get references to all the HTML elements we need
    const calculateBtn = document.getElementById("calculate-btn");
    
    // Inputs
    const loanAmountInput = document.getElementById("loan-amount");
    const interestRateInput = document.getElementById("interest-rate");
    const loanTermInput = document.getElementById("loan-term");
    const extraMonthlyInput = document.getElementById("extra-monthly");
    const oneTimePaymentInput = document.getElementById("one-time-payment");
    const oneTimeMonthInput = document.getElementById("one-time-month");
    
    // Outputs
    const monthlyPaymentResult = document.getElementById("monthly-payment-result");
    const totalInterestResult = document.getElementById("total-interest-result");
    const totalCostResult = document.getElementById("total-cost-result");
    const interestSavedResult = document.getElementById("interest-saved-result");
    const payoffDateResult = document.getElementById("payoff-date-result");
    const amortizationBody = document.getElementById("amortization-body");

    // Helper function to format numbers as currency
    function formatCurrency(number) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(number);
    }
    
    // Helper function to calculate the standard monthly payment
    function calculateOriginalPayment(principal, annualRate, termInYears) {
        const monthlyRate = annualRate / 100 / 12;
        const numberOfPayments = termInYears * 12;

        if (monthlyRate === 0) {
            return principal / numberOfPayments;
        }
        return principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
               (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    // Main calculation logic
    function performCalculations() {
        // 1. GET ALL INPUTS and convert to numbers
        const principal = parseFloat(loanAmountInput.value);
        const annualRate = parseFloat(interestRateInput.value);
        const termInYears = parseFloat(loanTermInput.value);
        const extraMonthly = parseFloat(extraMonthlyInput.value) || 0; // Default to 0 if empty
        const oneTimePayment = parseFloat(oneTimePaymentInput.value) || 0; // Default to 0
        const oneTimeMonth = parseInt(oneTimeMonthInput.value) || 0; // Default to 0

        // --- Input Validation ---
        if (isNaN(principal) || isNaN(annualRate) || isNaN(termInYears) || principal <= 0 || annualRate < 0 || termInYears <= 0) {
            alert("Please enter valid positive numbers for Amount, Rate, and Term.");
            return;
        }

        // 2. CALCULATE ORIGINAL LOAN (for comparison)
        const originalMonthlyPayment = calculateOriginalPayment(principal, annualRate, termInYears);
        const originalTotalPayments = termInYears * 12;
        const originalTotalInterest = (originalMonthlyPayment * originalTotalPayments) - principal;

        // 3. GENERATE NEW AMORTIZATION SCHEDULE (with extra payments)
        const schedule = [];
        let remainingBalance = principal;
        let totalInterestPaid = 0;
        const monthlyRate = annualRate / 100 / 12;
        let month = 1;

        // Loop until the balance is 0 or less
        while (remainingBalance > 0) {
            // Calculate interest for this month
            const interestForMonth = remainingBalance * monthlyRate;

            // Calculate principal
            let principalForMonth = originalMonthlyPayment - interestForMonth;

            // Add extra payments to the principal
            principalForMonth += extraMonthly;

            // Add one-time payment if it's the correct month
            if (month === oneTimeMonth) {
                principalForMonth += oneTimePayment;
            }

            // Check if this payment is more than the remaining balance
            if (principalForMonth > remainingBalance) {
                principalForMonth = remainingBalance;
            }

            // Update remaining balance
            remainingBalance -= principalForMonth;

            // Handle the final payment (might be less than a full payment)
            // If balance went negative, adjust principal
            if (remainingBalance < 0) {
                principalForMonth += remainingBalance; // e.g., principal 1000, balance -50 -> new principal 950
                remainingBalance = 0;
            }
            
            // Add to total interest paid
            totalInterestPaid += interestForMonth;

            // Add this month's data to the schedule array
            schedule.push({
                month: month,
                interest: interestForMonth,
                principal: principalForMonth,
                balance: remainingBalance,
            });

            // Safety break to prevent infinite loops from bad data (e.g., 0% rate with no payment)
            if (month > (originalTotalPayments + 1200)) { 
                console.error("Loop extended too far. Breaking.");
                alert("Calculation error. Please check inputs. Loan may not be payable.");
                return;
            }
            month++;
        }

        // 4. DISPLAY SUMMARY OUTPUTS
        const newTotalPayments = schedule.length;
        const newTotalCost = principal + totalInterestPaid;
        const interestSaved = originalTotalInterest - totalInterestPaid;
        const years = Math.floor(newTotalPayments / 12);
        const months = newTotalPayments % 12;

        // Update the HTML elements
        monthlyPaymentResult.textContent = formatCurrency(originalMonthlyPayment);
        totalInterestResult.textContent = formatCurrency(totalInterestPaid);
        totalCostResult.textContent = formatCurrency(newTotalCost);
        
        interestSavedResult.textContent = formatCurrency(interestSaved);
        payoffDateResult.textContent = `${years} years, ${months} months`;

        // 5. DISPLAY AMORTIZATION TABLE
        amortizationBody.innerHTML = ""; // Clear any old data first

        schedule.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${row.month}</td>
                <td>${formatCurrency(row.principal)}</td>
                <td>${formatCurrency(row.interest)}</td>
                <td>${formatCurrency(row.balance)}</td>
            `;
            amortizationBody.appendChild(tr);
        });
    }
    

    // Add the click "event listener" to the button
    calculateBtn.addEventListener("click", performCalculations);

});