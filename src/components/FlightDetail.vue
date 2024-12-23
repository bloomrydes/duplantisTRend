<template>
  <div class="skyplane-app">
    <main class="content">
      <!-- Search Summary -->
      <aside class="search-section">
        <h3>Your Search</h3>
        <div v-for="(value, key) in searchSummary" :key="key" class="search-item">
          <label>{{ capitalize(key) }}</label>
          <p>{{ key === 'departure' || key === 'return' ? formatDate(value) : value }}</p>
        </div>
      </aside>

      <!-- Flights Section -->
      <section class="flights-section">
        <div v-for="(flight, index) in flights" :key="index" class="flight-card">
          <div class="flight-details text-black">
            <h4>{{ flight.departureDate }} - Departure</h4>
            <p>{{ flight.departureTime }} &nbsp;{{ flight.from }}</p>
            <p>{{ flight.duration }}</p>
            <p>{{ flight.arrivalTime }} &nbsp;{{ flight.to }}</p>
          </div>
          <div class="flight-price">
            <h3>{{ flight.price }}</h3>
            <button class="btn select-btn">Select this flight</button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "SkyPlaneApp",
  data() {
    return {
      flights: [
  {
    departureDate: "June 10, 2023",
    departureTime: "10:45",
    from: "London Stansted (STN)",
    duration: "2 h 10 m Direct",
    arrivalTime: "13:55",
    to: "Stockholm Arlanda (ARN)",
    price: "$50",
  },
  {
    departureDate: "June 11, 2023",
    departureTime: "14:30",
    from: "New York (JFK)",
    duration: "6 h 45 m Direct",
    arrivalTime: "21:15",
    to: "Los Angeles (LAX)",
    price: "$120",
  },
  {
    departureDate: "June 12, 2023",
    departureTime: "08:00",
    from: "Paris Charles de Gaulle (CDG)",
    duration: "1 h 25 m Direct",
    arrivalTime: "09:25",
    to: "Amsterdam Schiphol (AMS)",
    price: "$75",
  },
  {
    departureDate: "June 13, 2023",
    departureTime: "16:20",
    from: "Tokyo Narita (NRT)",
    duration: "10 h 15 m Direct",
    arrivalTime: "02:35",
    to: "San Francisco (SFO)",
    price: "$300",
  },
  {
    departureDate: "June 14, 2023",
    departureTime: "07:15",
    from: "Sydney (SYD)",
    duration: "3 h 45 m Direct",
    arrivalTime: "11:00",
    to: "Auckland (AKL)",
    price: "$95",
  },
  {
    departureDate: "June 15, 2023",
    departureTime: "18:50",
    from: "Toronto Pearson (YYZ)",
    duration: "7 h 20 m Direct",
    arrivalTime: "02:10",
    to: "London Heathrow (LHR)",
    price: "$280",
  },
  {
    departureDate: "June 16, 2023",
    departureTime: "22:30",
    from: "Dubai (DXB)",
    duration: "8 h 5 m Direct",
    arrivalTime: "06:35",
    to: "Cape Town (CPT)",
    price: "$350",
  },
  {
    departureDate: "June 17, 2023",
    departureTime: "13:10",
    from: "Berlin Brandenburg (BER)",
    duration: "2 h 20 m Direct",
    arrivalTime: "15:30",
    to: "Rome Fiumicino (FCO)",
    price: "$80",
  },
  {
    departureDate: "June 18, 2023",
    departureTime: "06:00",
    from: "Mumbai (BOM)",
    duration: "4 h 30 m Direct",
    arrivalTime: "10:30",
    to: "Singapore Changi (SIN)",
    price: "$140",
  },
  {
    departureDate: "June 19, 2023",
    departureTime: "20:45",
    from: "Rio de Janeiro (GIG)",
    duration: "9 h 55 m Direct",
    arrivalTime: "06:40",
    to: "Madrid Barajas (MAD)",
    price: "$260",
  },
],
      searchQuery: {
        from: "",
        to: "",
        departure: "",
        return: "",
      },
    };
  },
  computed: {
    searchSummary() {
      return {
        from: this.searchQuery.from || "N/A",
        to: this.searchQuery.to || "N/A",
        departure: this.searchQuery.departure || "N/A",
        return: this.searchQuery.return || "N/A",
      };
    },
  },
  created() {
    // Extract and validate query parameters from the URL
    const query = this.$route.query;
    this.searchQuery = {
      from: query.from || "Unknown Origin",
      to: query.to || "Unknown Destination",
      departure: query.departure || "",
      return: query.return || "",
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return "N/A";
      const formattedDate = new Date(date).toLocaleDateString("en-GB");
      return isNaN(new Date(date)) ? "Invalid Date" : formattedDate;
    },
    capitalize(word) {
      if (!word) return "";
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
  },
};
</script>

<style scoped>
/* General Styles */
.skyplane-app {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Main Content */
.content {
  display: flex;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

/* Search Section */
.search-section {
  flex: 1;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem; /* Add margin for stacking on small screens */
}

.search-item {
  margin-bottom: 1rem;
}

.search-item label {
  font-size: 0.8rem;
  color: #555;
  display: block;
  margin-bottom: 0.5rem;
}

.change-btn {
  width: 100%;
  background-color: #000;
  color: #fff;
}

/* Flights Section */
.flights-section {
  flex: 3;
  display: flex;
  flex-direction: column; /* Stack flights vertically on smaller screens */
}

.flight-card {
  display: flex;
  flex-direction: column; /* Stack details and price on smaller screens */
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flight-details {
  flex: 3;
  display: flex;
  flex-direction: column; /* Stack details vertically */
  margin-bottom: 1rem;
}

.flight-price {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.select-btn {
  background-color: #020101;
  color: #fff;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

/* Media Queries for Mobile Responsiveness */
@media (max-width: 768px) {
  .content {
    flex-direction: column; /* Stack content vertically on smaller screens */
    padding: 1rem;
  }

  .search-section,
  .flights-section {
    flex: 1; /* Allow full width for both sections */
  }

  .flight-card {
    flex-direction: column; /* Stack flight details and price */
  }

  .flight-details {
    margin-bottom: 1rem; /* Add spacing between sections */
  }

  .select-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .skyplane-app {
    font-size: 14px; /* Adjust base font size for smaller screens */
  }

  .content {
    gap: 1rem;
  }

  .search-section {
    padding: 1rem;
  }

  .flight-card {
    padding: 1rem;
  }

  .select-btn {
    padding: 0.5rem;
  }
}
</style>
