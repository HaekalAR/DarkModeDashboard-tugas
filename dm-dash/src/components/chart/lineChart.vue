<template>
  <div>
    <canvas ref="myLineChart" :width="chartWidth" :height="chartHeight"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const myLineChart = ref(null)

const chartWidth = ref(600) // Lebar chart
const chartHeight = ref(570) // Tinggi chart

onMounted(() => {
  const ctx = myLineChart.value.getContext('2d')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'Time Fly By',
          data: [53, 24, 67, 33, 112, 40, 83], // Sample data, sesuaikan dengan data aktual Anda
          fill: false,
          borderColor: '#FF6384', // Warna garis
          tension: 0.4 // Tegangan kurva
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Time Consumed (in Minutes)',
          font: {
            size: 14
          }
        }
      }
    }
  })
})
</script>
