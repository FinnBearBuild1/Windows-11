document.addEventListener('DOMContentLoaded', () => {
    const lockscreen = document.getElementById('lockscreen');
    const desktop = document.getElementById('desktop');
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    // Function to update the Time and Date
    function updateTimeAndDate() {
        const now = new Date();
        
        // Time format: HH:MM
        const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
        const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
        
        // Date format: Tuesday, November 25
        const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', dateOptions);

        timeElement.textContent = formattedTime.replace(/ (AM|PM)/, ''); // Remove AM/PM for clean W11 look
        dateElement.textContent = formattedDate;
    }

    // Update the time every second
    setInterval(updateTimeAndDate, 1000);
    updateTimeAndDate(); // Call it immediately to show content on load

    // Lock Screen Unlock Logic (Simulating a click or a swipe up)
    lockscreen.addEventListener('click', () => {
        // 1. Visually unlock the screen (removes blur, fades out/up)
        lockscreen.classList.add('unlocked');
        
        // 2. Reveal the next view (the simulated desktop/sign-in screen)
        setTimeout(() => {
            desktop.classList.add('active');
            // In a real replica, you would transition to the sign-in input field here.
        }, 300); // Delay matches the CSS transition time
    });
});
