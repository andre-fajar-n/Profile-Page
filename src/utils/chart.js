export const pieChart = (title, data, isSlice = false) => {
  var data1 = data.data
  var labels = data.label

  var position = "top"

  if (isSlice) {
    data1 = data1.slice(0, 10)
    labels = labels.slice(0, 10)
  }

  return {
    data: {
      labels: labels,
      datasets: [
        {
          label: title,
          backgroundColor: [
            'red',
            'blue',
            'green',
            'yellow',
            'maroon',
            'salmon',
            'yellowgreen',
            'magenta',
            'aqua',
            'greenyellow'
          ],
          data: data1,
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: title,
        fontSize: 20,
        fontColor: "#fff"
      },
      legend: {
        position,
        labels: {
          fontColor: "#fff"
        }
      },
      layout: {
        padding: {
          left: 30,
          right: 30,
          top: 30,
          bottom: 30,
        },
      },
      maintainAspectRatio: false
    }
  }
}