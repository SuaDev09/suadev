export default class ChartHelper {
  static STYLES = {
    width: '95%',
    margin: '0 auto',
    'flex-grow': 1,
  };
  static configGenerator() {
    return {
      displaylogo: false,
      responsive: true,
    };
  }

  static getTrendChartLayout(title: string, dragMode = 'zoom') {
    return {
      title: title,
      xaxis: {
        type: 'category',
        tickfont: { size: 14 },
        automargin: true,
      },
      yaxis: {
        title: '',
        rangemode: 'tozero',
      },
      bargap: 0.5, // Increase for more space between bars
      margin: { t: 30, l: 60, r: 20, b: 90 },
      showlegend: false,
      autosize: true,
      autoscale: true,
      watermark: false,
      dragmode: dragMode,

      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
    };
  }

  static layourDobleYGenerator(
    title: string,
    xTitle: string,
    yTitle: string,
    y2Title: string,
    yRange: number[],
    y2Range: number[],
    dragMode = 'zoom',
    shapes: any = [],
    fontColor: string
  ) {
    return {
      title: title,
      xaxis: {
        type: 'category',
        title: {
          text: xTitle,
          font: {
            size: 18,
          },
          standoff: 0,
          y: 1.16,
        },
        automargin: true,
      },
      margin: {
        //t: title.includes('Yield Loss') ? 1 : ,
      },
      yaxis: {
        title: {
          text: yTitle,
          font: {
            size: 18,
          },
          automargin: true,
        },
        autorange:
          yRange.length > 0
            ? title.includes('Yield Loss')
              ? true
              : yRange
            : true,
        range: yRange.length > 0 ? yRange : [0, 10],
        rangemode: 'tozero',
        showgrid: true,
        side: 'right',
      },
      yaxis2: {
        title: {
          text: y2Title,
          font: {
            size: 18,
          },
          automargin: true,
        },
        range: y2Range,
        rangemode: 'tozero',
        overlaying: 'y',
        side: 'left',

        tickformat: '.2%',
      },
      showlegend: true,
      autosize: true,
      autoscale: true,
      watermark: false,
      dragmode: dragMode,
      legend: {
        orientation: 'h',
        yanchor: 'top',
        xanchor: 'center',
        x: 0.5,
        y: -0.4,

        font: {
          size: 11,
        },
      },
      shapes: shapes,
      height: 400,
      // ...existing code...
      template: 'plotly_dark',
      // ...existing code...
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: { color: fontColor },
    };
  }

  static layoutGenerator(
    barmode: string,
    title: string,
    xTitle: string,
    yTitle: string,
    yRange: number[],
    isPercentage = false,
    dragMode = 'zoom',
    shapes: any = [],
    fontColor: string
  ) {
    return {
      title: title,
      xaxis: {
        type: 'category',
        title: {
          text: xTitle,
          font: {
            size: 18,
          },
          standoff: 0,
          y: 1.16,
        },
        automargin: true,
      },
      margin: {
        //t: title.includes('Yield Loss') ? 1 : ,
      },
      yaxis: {
        title: {
          text: yTitle,
          font: {
            size: 18,
          },
          automargin: true,
        },
        autorange:
          yRange.length > 0
            ? title.includes('Yield Loss')
              ? true
              : yRange
            : true,
        range: yRange.length > 0 ? yRange : [0, 10],
        rangemode: 'tozero',
        tickformat: isPercentage ? '.2%' : '',
      },
      showlegend: true,
      autosize: true,
      autoscale: true,
      watermark: false,
      dragmode: dragMode,
      legend: {
        orientation: 'h',
        x: 0.5,
        y: -0.4,
        yanchor: 'top',
        xanchor: 'center',
        font: {
          size: 11,
        },
      },
      shapes: shapes,
      barmode: barmode,
      bargroupgap: 0.2,
      height: 400,
      template: 'plotly_dark',

      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: { color: fontColor },
    };
  }
}
