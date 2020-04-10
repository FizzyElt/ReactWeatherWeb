import React, { useRef, useContext, useEffect } from 'react';
import Chart from 'chart.js'

import { WeekData } from '../../Context/weekDataContext.js'


import './WeekChart.scss'

const obj = {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [{
            label: 'MaxT',
            borderColor: "rgba(255,36,36,1)",
            backgroundColor: "rgba(255,36,36,0.3)",
            data: [2, 46, 7, 8, 9]
        }, {
            label: 'MinT',
            borderColor: "rgba(0, 215, 252,1)",
            backgroundColor: "rgba(0, 215, 252,0.3)",
            data: [5, 6, 57, 6, 5]
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    min: 5,
                    max: 35
                }
            }]
        }
    }
}
function getDataset(data = [], label = "") {
    let arr = []
    data.forEach((obj) => {
        arr.push(obj[label])
    })
    return arr
}
const WeekChart = () => {
    const chart = useRef(null)

    const { data } = useContext(WeekData)
    obj.data.labels = data.map((obj, i) => i + 1)
    obj.data.datasets[0].data = getDataset(data, "MaxT")
    obj.data.datasets[1].data = getDataset(data, "MinT")
    obj.options.scales.yAxes[0].ticks.max = Math.max(...obj.data.datasets[0].data)+2
    obj.options.scales.yAxes[0].ticks.min = Math.min(...obj.data.datasets[1].data)-2

    useEffect(() => {
        const chartRef = chart.current.getContext('2d')

        new Chart(chartRef, obj)
    }, [data])

    return (
        <div className="canvas-size">
            <canvas
                id="mychart"
                ref={chart}>
            </canvas>
        </div>
    );
}

export default WeekChart;
