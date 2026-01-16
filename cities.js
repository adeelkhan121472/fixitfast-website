// Cities Data - 25+ Top Cities
const citiesData = [
    {
        name: "New York",
        state: "NY",
        region: "east",
        population: "8.3M",
        description: "Professional appliance repair services across all five boroughs of New York City.",
        features: ["24/7 Service", "Same-Day Available", "All Brands"]
    },
    {
        name: "Los Angeles",
        state: "CA",
        region: "west",
        population: "4.0M",
        description: "Fast and reliable appliance repair throughout Los Angeles County.",
        features: ["Licensed Techs", "90-Day Warranty", "Free Estimates"]
    },
    {
        name: "Chicago",
        state: "IL",
        region: "midwest",
        population: "2.7M",
        description: "Expert appliance repair services for Chicago and surrounding suburbs.",
        features: ["Same-Day", "All Appliances", "Fair Pricing"]
    },
    {
        name: "Houston",
        state: "TX",
        region: "south",
        population: "2.3M",
        description: "Quality appliance repair services across Greater Houston area.",
        features: ["Fast Service", "Certified Pros", "Warranty"]
    },
    {
        name: "Phoenix",
        state: "AZ",
        region: "west",
        population: "1.7M",
        description: "Dependable appliance repair for Phoenix and surrounding communities.",
        features: ["24/7 Emergency", "All Brands", "Insured"]
    },
    {
        name: "Philadelphia",
        state: "PA",
        region: "east",
        population: "1.6M",
        description: "Trusted appliance repair throughout the Philadelphia metro area.",
        features: ["Same-Day", "Expert Techs", "Guaranteed"]
    },
    {
        name: "San Antonio",
        state: "TX",
        region: "south",
        population: "1.5M",
        description: "Professional appliance repair services in San Antonio and nearby areas.",
        features: ["Quick Response", "All Makes", "Affordable"]
    },
    {
        name: "San Diego",
        state: "CA",
        region: "west",
        population: "1.4M",
        description: "Expert appliance repair covering all of San Diego County.",
        features: ["Licensed", "Same-Day", "Warranty"]
    },
    {
        name: "Dallas",
        state: "TX",
        region: "south",
        population: "1.3M",
        description: "Reliable appliance repair services throughout the Dallas-Fort Worth area.",
        features: ["Fast Service", "All Brands", "Certified"]
    },
    {
        name: "San Jose",
        state: "CA",
        region: "west",
        population: "1.0M",
        description: "Quality appliance repair in San Jose and Silicon Valley.",
        features: ["Tech Experts", "Quick Fix", "Insured"]
    },
    {
        name: "Austin",
        state: "TX",
        region: "south",
        population: "978K",
        description: "Professional appliance repair for Austin and Central Texas.",
        features: ["Same-Day", "All Appliances", "Fair Price"]
    },
    {
        name: "Jacksonville",
        state: "FL",
        region: "south",
        population: "950K",
        description: "Trusted appliance repair services across Jacksonville and Northeast Florida.",
        features: ["Fast Response", "Certified", "Warranty"]
    },
    {
        name: "Fort Worth",
        state: "TX",
        region: "south",
        population: "935K",
        description: "Expert appliance repair throughout Fort Worth and Tarrant County.",
        features: ["24/7 Available", "All Brands", "Licensed"]
    },
    {
        name: "Columbus",
        state: "OH",
        region: "midwest",
        population: "905K",
        description: "Quality appliance repair services in Columbus and Central Ohio.",
        features: ["Same-Day", "Expert Techs", "Insured"]
    },
    {
        name: "Charlotte",
        state: "NC",
        region: "south",
        population: "897K",
        description: "Professional appliance repair for Charlotte and surrounding areas.",
        features: ["Fast Service", "All Makes", "Guaranteed"]
    },
    {
        name: "San Francisco",
        state: "CA",
        region: "west",
        population: "874K",
        description: "Expert appliance repair across San Francisco and the Bay Area.",
        features: ["Same-Day", "Licensed", "Warranty"]
    },
    {
        name: "Indianapolis",
        state: "IN",
        region: "midwest",
        population: "879K",
        description: "Reliable appliance repair throughout Indianapolis and Marion County.",
        features: ["Quick Fix", "Certified", "Affordable"]
    },
    {
        name: "Seattle",
        state: "WA",
        region: "west",
        population: "750K",
        description: "Quality appliance repair services in Seattle and King County.",
        features: ["24/7 Service", "All Brands", "Insured"]
    },
    {
        name: "Denver",
        state: "CO",
        region: "west",
        population: "716K",
        description: "Professional appliance repair for Denver and the Front Range.",
        features: ["Same-Day", "Expert Techs", "Warranty"]
    },
    {
        name: "Boston",
        state: "MA",
        region: "east",
        population: "695K",
        description: "Trusted appliance repair across Greater Boston and surrounding areas.",
        features: ["Fast Service", "Licensed", "Guaranteed"]
    },
    {
        name: "Nashville",
        state: "TN",
        region: "south",
        population: "689K",
        description: "Expert appliance repair throughout Nashville and Davidson County.",
        features: ["Same-Day", "All Appliances", "Fair Price"]
    },
    {
        name: "Detroit",
        state: "MI",
        region: "midwest",
        population: "639K",
        description: "Professional appliance repair services in Detroit and Metro area.",
        features: ["Quick Response", "Certified", "Warranty"]
    },
    {
        name: "Portland",
        state: "OR",
        region: "west",
        population: "653K",
        description: "Quality appliance repair for Portland and surrounding communities.",
        features: ["24/7 Available", "All Brands", "Insured"]
    },
    {
        name: "Las Vegas",
        state: "NV",
        region: "west",
        population: "647K",
        description: "Reliable appliance repair throughout Las Vegas and Clark County.",
        features: ["Fast Service", "Expert Techs", "Licensed"]
    },
    {
        name: "Memphis",
        state: "TN",
        region: "south",
        population: "633K",
        description: "Trusted appliance repair services across Memphis and Shelby County.",
        features: ["Same-Day", "All Makes", "Warranty"]
    },
    {
        name: "Baltimore",
        state: "MD",
        region: "east",
        population: "576K",
        description: "Professional appliance repair for Baltimore and surrounding areas.",
        features: ["Quick Fix", "Certified", "Affordable"]
    }
];

// Initialize cities on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCities(citiesData);
});

// Display cities function
function displayCities(cities) {
    const citiesGrid = document.getElementById('citiesGrid');
    const noResults = document.getElementById('noResults');
    
    if (cities.length === 0) {
        citiesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    citiesGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    citiesGrid.innerHTML = cities.map(city => `
        <div class="city-card">
            <div class="city-header">
                <div class="city-icon">📍</div>
                <div class="city-info">
                    <h3>${city.name}, ${city.state}</h3>
                    <p>${city.population} population</p>
                </div>
            </div>
            <div class="city-details">
                <p>${city.description}</p>
            </div>
            <div class="city-meta">
                ${city.features.map(feature => `<span class="meta-tag">✓ ${feature}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Filter cities by region
function filterCities(region) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (region === 'all') {
        displayCities(citiesData);
    } else {
        const filtered = citiesData.filter(city => city.region === region);
        displayCities(filtered);
    }
}

// Search cities function
function searchCities() {
    const searchInput = document.getElementById('citySearchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        displayCities(citiesData);
        return;
    }
    
    const filtered = citiesData.filter(city => 
        city.name.toLowerCase().includes(searchTerm) ||
        city.state.toLowerCase().includes(searchTerm) ||
        city.description.toLowerCase().includes(searchTerm)
    );
    
    displayCities(filtered);
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('citySearchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCities();
            }
        });
        
        // Real-time search on input
        searchInput.addEventListener('input', searchCities);
    }
});
