document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('life-calculator-form');
    const ageInput = document.getElementById('age');
    const errorMessage = document.getElementById('error-message');
    const resultsSection = document.getElementById('results-section');
    const daysResult = document.getElementById('days-result');
    const weeksResult = document.getElementById('weeks-result');
    const monthsResult = document.getElementById('months-result');
    
    function lifeInWeeks(age) {
        const maxAge = 90;
        
        if (age >= maxAge) {
            showError("Age must be less than 90");
            return null;
        }
        
        if (age < 0) {
            showError("Age must be a positive number");
            return null;
        }
        
        const yearsLeft = maxAge - age;
        
        const daysLeft = yearsLeft * 365;
        const weeksLeft = yearsLeft * 52;
        const monthsLeft = yearsLeft * 12;
        
        return {
            days: daysLeft,
            weeks: weeksLeft,
            months: monthsLeft
        };
    }
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        resultsSection.style.display = 'none';
    }
    
    function hideError() {
        errorMessage.style.display = 'none';
    }
    
    function displayResults(results) {
        daysResult.textContent = results.days.toLocaleString();
        weeksResult.textContent = results.weeks.toLocaleString();
        monthsResult.textContent = results.months.toLocaleString();
        resultsSection.style.display = 'block';
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const ageValue = ageInput.value.trim();
        const age = parseInt(ageValue);
        
        if (ageValue === '' || isNaN(age)) {
            showError('Please enter a valid age');
            return;
        }
        
        hideError();
        const results = lifeInWeeks(age);
        
        if (results) {
            displayResults(results);
        }
    });
});