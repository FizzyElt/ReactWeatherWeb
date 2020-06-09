import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import Chart, { defaults } from 'chart.js'

import './WeekChart.scss'

defaults.global.elements.point.borderWidth = 2
defaults.global.elements.point.radius = 7
defaults.global.elements.point.hoverRadius = 8
const obj = {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    datasets: [
      {
        label: 'MinT',
        borderColor: 'rgba(36, 167, 255,1)',
        backgroundColor: 'rgb(161, 198, 223)',
        pointBackgroundColor: '#fff',
        data: [5, 6, 57, 6, 5],
      },
      {
        label: 'MaxT',
        borderColor: 'rgba(255,36,36,1)',
        backgroundColor: 'rgba(255, 130, 130,1)',
        pointBackgroundColor: '#fff',
        data: [2, 46, 7, 8, 9],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 5,
            max: 35,
          },
        },
      ],
    },
  },
}
function getDataset(data = [], label = '') {
  let arr = []
  data.forEach(obj => {
    arr.push(obj[label])
  })
  return arr
}
const WeekChart = ({ data }) => {
  const chart = useRef(null)

  useEffect(() => {
    const chartRef = chart.current.getContext('2d')
    obj.data.labels = data.map((_, i) => i + 1) //x軸標記
    obj.data.datasets[1].data = getDataset(data, 'MaxT')
    obj.data.datasets[0].data = getDataset(data, 'MinT')
    obj.options.scales.yAxes[0].ticks.max = Math.max(...obj.data.datasets[1].data) + 2
    obj.options.scales.yAxes[0].ticks.min = Math.min(...obj.data.datasets[0].data) - 2
    new Chart(chartRef, obj)
  }, [data])

  return (
    <div className='canvas-size'>
      <canvas id='mychart' ref={chart}></canvas>
    </div>
  )
}

WeekChart.propTypes = {
  data: PropTypes.array,
}

export default WeekChart
