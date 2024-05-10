<template>
  <div class="w-fit shadow-sm">
    <main class="bg-gray-900 grid grid-cols-1 px-2 rounded-lg">
      <div class="bg-gray-900 grid grid-cols-1">
        <canvas id="barChart" height="500" width="520"></canvas>
      </div>
    </main>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  data() {
    return {
      chartHeight: 350, // Tinggi chart default
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Waifus', // Label dataset
            data: [18, 4, 10, 27, 16], // Data bar
            backgroundColor: '#8470fe' // Warna bar
          }
        ]
      }
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      const ctx = document.getElementById('barChart').getContext('2d')
      new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true // Mulai sumbu Y dari nol
            }
          },
          animation: {
            duration: 2000, // Durasi animasi
            easing: 'easeInOutQuart' // Jenis easing untuk animasi
          }
        }
      })
    }
  }
}
</script>
