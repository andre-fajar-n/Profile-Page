export const pieChart = (title, data, isSlice = false) => {
  var datasets = data.data
  var labels = data.label

  if (isSlice) {
    datasets = datasets.slice(0, 10)
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
          data: datasets
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: title,
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'left'
      }
    }
  }
}