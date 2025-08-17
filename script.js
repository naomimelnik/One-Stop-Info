//Search Functionality
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent the page from reloading

    const query = document.getElementById("searchInput").value.toLowerCase(); //Get the input value
    const results = [];

    //Define searchable content
    const searchableContent = [
        //Weather Page Content
        { name: "National Weather Service (NWS)", url: "https://www.weather.gov/" },
        { name: "News 5 Cleveland Weather", url: "https://www.news5cleveland.com/weather" },
        { name: "Storm Prediction Center (SPC)", url: "https://www.spc.noaa.gov/" },
        { name: "How to prepare for Tornadoes", url: "weather.html#tornado" },
        { name: "How to Prepare for Floods", url: "weather.html#flood" },
        { name: "Winter Storm Safety Tips", url: "weather.html#winter-storm" },

        //How-To Page Content
        { name: "CPR instructions", url: "how_to.html#cpr" },
        { name: "Torniquet instructions", url:"how_to.html#torniquet" },

        //Shelter Page Content
        { name: "Local Shelters", url: "shelter.html" },
        { name: "Emergency Shelters Near Me", url: "shelter.html#emergency" },
        { name: "Shelter Resources", url: "shelter.html#resources" },

        //Traffic Page Content
        { name: "Current Traffic Updates", url: "traffic.html" },
        { name: "Road Closures", url: "traffic.html#closures" },
        { name: "Accident Reports", url: "traffic.html#accidents" },

        //Weather Page Content
        { name: "Weather Map", url: "weather.html#map" },
        { name: "Hourly Forecast", url: "weather.html#hourly" },

        //Hospitals Page Content
        { name: "Nearby Hospitals", url: "hospital.html" },
        { name: "Emergency Rooms", url: "hospital.html#emergency" },
        { name: "Hospital Services", url: "hospital.html#services" },
    ];

    //Search logic
    searchableContent.forEach((item) => {
        if (item.name.toLowerCase().includes(query)) {
            results.push(item);
        }
    });

    //Display results
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; //Clear previous results

    if (results.length > 0) {
        results.forEach((result) => {
            const link = `<a href="${result.url}" target="_blank">${result.name}</a>`;
            resultsContainer.innerHTML += `<p>${link}</p>`;
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
});
