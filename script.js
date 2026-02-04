document.getElementById("itineraryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
    const travelMode = document.getElementById("travelMode").value;
    const travelers = document.getElementById("travelers").value;
    const email = document.getElementById("email").value;
    const preferences = document.getElementById("preferences").value;


    const message = document.getElementById("message");


    if (days <= 0 || budget <= 0 || travelers <= 0) {
        message.style.color = "red";
        message.textContent = "please enter valid values.";
        return;
    }

    fetch("https://devilskairios.app.n8n.cloud/webhook-test/travel-itinerary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            destination,
            days, 
            budget,
            travelMode,
            travelers,
            email,
            preferences
        })
    })
        .then(response => response.json())
        .then(data => {
            message.style.color = "green";
            message.textContent = " Itinerary request sent! check your email soon.";
        })
        .catch(error => {
            message.style.color = "red";
            message.textContent = "Error sending request. Please try again.";
            console.error(error);
        });
})

