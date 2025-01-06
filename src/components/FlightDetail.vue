<template>
  <div v-for="(trip, index) in trips" :key="index" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-grey-300 p-6 md:p-8 lg:p-12 rounded-lg shadow-md mx-auto max-w-6xl lg:my-12">
    <!-- Departure and Return Trip Details -->
    <div class="col-span-1 sm:col-span-2 lg:col-span-2">
      <!-- Departure Trip -->
      <div class="flex flex-wrap md:flex-nowrap justify-between items-center mb-6 md:mb-8">
        <div>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.departure.date }} - Departure</p>
          <p class="text-base md:text-lg font-bold">{{ trip.departure.time }}</p>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.departure.location }}</p>
        </div>
        <div class="flex items-center my-4 md:my-0">
          <span class="text-yellow-500 mx-2 text-lg">✈️</span>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.duration }} - Direct</p>
        </div>
        <div>
          <p class="text-base md:text-lg font-bold">{{ trip.arrival.time }}</p>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.arrival.location }}</p>
        </div>
      </div>

      <!-- Return Trip -->
      <div class="flex flex-wrap md:flex-nowrap justify-between items-center">
        <div>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.return.date }} - Return</p>
          <p class="text-base md:text-lg font-bold">{{ trip.return.time }}</p>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.return.location }}</p>
        </div>
        <div class="flex items-center my-4 md:my-0">
          <span class="text-yellow-500 mx-2 text-lg">✈️</span>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.duration }} - Direct</p>
        </div>
        <div>
          <p class="text-base md:text-lg font-bold">{{ trip.returnArrival.time }}</p>
          <p class="text-xs md:text-sm text-gray-500">{{ trip.returnArrival.location }}</p>
        </div>
      </div>
    </div>

    <!-- Price and Button -->
    <div class="col-span-1 sm:col-span-1 lg:col-span-1 flex flex-col items-center justify-center h-full mt-6 md:mt-0">
      <p class="text-xl md:text-2xl font-bold text-gray-600">${{ trip.price }}</p>
<button class="mt-0 bg-gray-900 text-white text-sm md:text-base py-2 px-4 rounded-lg hover:bg-green-600 w-full md:w-auto flex items-center justify-center">
  Book Now
  <!-- Forward Arrow Icon -->
  <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M12.293 9.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L15.586 14H4a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</button>

    </div>
  </div>
</template>


<script>
export default {
  name: "SkyPlaneComponent",
  data() {
    return {
      trips: [
        {
          departure: {
            date: "June 10, 2023",
            time: "10:45",
            location: "London Stansted (STN)",
          },
          arrival: {
            time: "13:55",
            location: "Stockholm Arlanda (ARN)",
          },
          return: {
            date: "August 18, 2023",
            time: "16:20",
            location: "Stockholm Arlanda (ARN)",
          },
          returnArrival: {
            time: "17:55",
            location: "London Stansted (STN)",
          },
          duration: "2 h 10 m",
          price: 50,
        },
        {
          departure: {
            date: "July 15, 2023",
            time: "08:30",
            location: "Los Angeles International (LAX)",
          },
          arrival: {
            time: "14:30",
            location: "New York John F. Kennedy (JFK)",
          },
          return: {
            date: "August 10, 2023",
            time: "18:00",
            location: "New York John F. Kennedy (JFK)",
          },
          returnArrival: {
            time: "21:00",
            location: "Los Angeles International (LAX)",
          },
          duration: "5 h 0 m",
          price: 200,
        },
        {
          departure: {
            date: "October 1, 2023",
            time: "12:00",
            location: "Paris Charles de Gaulle (CDG)",
          },
          arrival: {
            time: "14:45",
            location: "Rome Fiumicino (FCO)",
          },
          return: {
            date: "October 10, 2023",
            time: "09:00",
            location: "Rome Fiumicino (FCO)",
          },
          returnArrival: {
            time: "11:15",
            location: "Paris Charles de Gaulle (CDG)",
          },
          duration: "2 h 45 m",
          price: 120,
        },
        {
          departure: {
            date: "December 5, 2023",
            time: "09:15",
            location: "Tokyo Narita (NRT)",
          },
          arrival: {
            time: "11:30",
            location: "Sydney Kingsford Smith (SYD)",
          },
          return: {
            date: "December 20, 2023",
            time: "21:00",
            location: "Sydney Kingsford Smith (SYD)",
          },
          returnArrival: {
            time: "05:30",
            location: "Tokyo Narita (NRT)",
          },
          duration: "9 h 15 m",
          price: 450,
        },
      ],
    };
  },
};
</script>


