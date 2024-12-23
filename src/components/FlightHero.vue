<template>
  <div class="skyplane-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-image">
        <div class="hero-text">Best deals are waiting for you</div>
      </div>
      <div class="search-bar">
        <div class="search-item">
          <label for="from">From</label>
          <input v-model="searchData.from" type="text" id="from" placeholder="London Stansted" />
        </div>
        <div class="search-item">
          <label for="to">To</label>
          <input v-model="searchData.to" type="text" id="to" placeholder="Stockholm" />
        </div>
        <div class="search-item">
          <label for="departure">Departure</label>
          <input v-model="searchData.departure" type="date" id="departure" />
        </div>
        <div class="search-item">
          <label for="return">Return</label>
          <input v-model="searchData.return" type="date" id="return" />
        </div>
        <button class="btn search-btn" @click="searchFlights">
          <i class="icon-arrow-right"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SkyPlaneComponent",
  data() {
    return {
      searchData: {
        from: "",
        to: "",
        departure: "",
        return: "",
      },
    };
  },
  methods: {
    searchFlights() {
      const { from, to, departure, return: returnDate } = this.searchData;
      // Navigate to the /flight/details page with query data
      this.$router.push({
        path: "/flight/details",
        query: { from, to, departure, return: returnDate },
      });
    },
  },
};
</script>

<style scoped>
/* Container Styles */
.skyplane-container {
  font-family: Arial, sans-serif;
  background-color: #f0f8ff;
}

/* Hero Section */
.hero {
  position: relative;
  text-align: center;
  color: rgb(27, 23, 23);
}

.hero-image {
  background: url('/public/flight.jpeg') no-repeat center center;
  background-size: cover;
  height: 400px;
  position: relative;
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -50px;
  border-radius: 10px;
}

.search-item {
  flex: 1 1 100%; /* Full width on smaller screens */
  max-width: 250px; /* Restrict width */
}

.search-item label {
  display: block;
  font-size: 0.8rem;
  color: #666;
}

.search-item input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input[type="date"] {
  color: #333;
  background-color: #fff;
  border: 1px solid #00a99d;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
}

input[type="date"]:focus {
  outline: none;
  border-color: #0c0b0b;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.search-btn {
  background-color: #020303;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-arrow-right {
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

/* Media Queries */
@media (max-width: 768px) {
  .hero-image {
    height: 250px; /* Reduce height for mobile screens */
  }

  .hero-text {
    font-size: 1.5rem; /* Adjust text size for mobile */
  }

  .search-bar {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .search-item {
    flex: 1 1 100%; /* Full width on smaller screens */
    max-width: none; /* Remove max-width restriction */
  }

  .search-btn {
    font-size: 1rem;
    height: 50px;
    width: 50px;
  }
}
</style>


