// services/jobService.js
const calculateChartData = (data) => {
    // Implemente a lógica de processamento de dados aqui, se necessário
    return {
      labels: data.map((item) => item.NOMEDOSERVIDOR),
      datasets: [
        {
          label: 'Percentual',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(75,192,192,0.6)',
          hoverBorderColor: 'rgba(75,192,192,1)',
          data: data.map((item) => item.PERCENTUAL),
        },
      ],
    };
  };
  
  export default {
    calculateChartData,
  };
  