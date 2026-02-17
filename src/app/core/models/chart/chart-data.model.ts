export interface ChartTrace {
  x: string[]; // Array of x-axis values (e.g., weeks)
  y: number[]; // Array of y-axis values (e.g., data points)
  measure?: string[]; // Optional measure for the trace (e.g., "Scrap", "Success rate")
  type: string; // Type of chart (e.g., "bar", "line")
  name: string; // Name of the trace (e.g., "Scrap", "Success rate")
  textposition?: string; // Position of text on the chart (e.g., "auto", "inside")
  valueTypes: string; // Value type (e.g., "dollars", "perc")
  text?: string[]; // Optional text labels for the data points
  connector?: {
    // Waterfall chart specific
    line: {
      color: string;
    };
  };
  decreasing?: {
    // Waterfall chart specific
    marker: {
      color: string;
    };
  };
  increasing?: {
    // Waterfall chart specific
    marker: {
      color: string;
    };
  };
  totals: {
    // Waterfall chart specific
    marker: {
      color: string;
    };
  };
}

export interface ChartData {
  chartName: string; // Unique name of the chart
  chartTitle: string; // Title of the chart
  traces: ChartTrace[]; // Array of traces for the chart
}
