    let intervalId; // Variable to store the interval ID

    // Function to update the content of the h1 element with the current time
    const updateCurrentTime = function() {
        const currentTime = new Date().toLocaleTimeString();
        document.getElementById('output').innerHTML = currentTime;
    }

    document.getElementById('start').addEventListener('click', function () {
        // Start updating the time every second
        intervalId = setInterval(updateCurrentTime, 1000);
    });

    document.getElementById('stop').addEventListener('click', function () {
        // Stop the interval when the "Stop" button is clicked
        clearInterval(intervalId);
    });
