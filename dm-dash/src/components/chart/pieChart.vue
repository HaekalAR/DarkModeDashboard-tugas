<template>
  <div>
    <canvas ref="myPieChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const myPieChart = ref(null)

onMounted(() => {
  const ctx = myPieChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Muse Asia', 'CrunchyRoll', 'Funimation'],
      datasets: [
        {
          label: 'Waifu Statistics (Jan-Aug)',
          data: [20, 15, 10], // Sample data, sesuaikan dengan data aktual Anda
          backgroundColor: [
            '#F78B24', // CrunchyRoll
            '#FECE14', // Muse
            '#45298F' // Funimation
          ],
          hoverOffset: 5
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Platform Statistics (Jan-Aug)',
          font: {
            size: 14
          }
        }
      },
      cutout: 40
    }
  })
})
</script>

<style scoped>
/* Add any custom styles here */
</style>
