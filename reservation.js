document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Booking submitted!');
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    const startDate = document.getElementById('inputStartDate');
    const endDate = document.getElementById('inputEndDate');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (new Date(startDate.value) > new Date(endDate.value)) {
            alert('End date must be after start date.');
            return;
        }

        alert('Booking submitted!');
        form.reset();
    });
});
