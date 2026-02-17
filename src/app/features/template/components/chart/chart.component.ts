import { Component, inject, Input } from '@angular/core';
import ChartHelper from '@app/core/helpers/chart.helper';
import { ChartData } from '@app/core/models/chart/chart-data.model';
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';
import * as Plotly from 'plotly.js-dist-min';

@Component({
  selector: 'app-chart',
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  private readonly _currentTheme: CurrentThemeService =
    inject(CurrentThemeService);
  @Input() chartData!: ChartData;
  @Input() chartId!: string;
  goalLimit: number | null = 0;
  currentFontColor = 'white';
  ngOnInit() {
    this._currentTheme.currentTheme$.subscribe((currentTheme) => {
      if (currentTheme === 'light-theme') {
        this.currentFontColor = 'black';
        this.generateCharts();
      } else {
        this.currentFontColor = 'white';
        this.generateCharts();
      }
    });
  }

  ngAfterViewInit() {
    this.generateCharts();
    Plotly.Plots.resize(this.chartId);
    this.resizeObserver();
  }

  setGoal() {
    this.generateCharts();
  }

  resetGoal() {
    this.goalLimit = null;
    this.generateCharts();
  }
  validateChartContainer(chartId: string) {
    if (document.getElementById(chartId)) {
      return true;
    }
    return false;
  }

  generateCharts() {
    if (!this.validateChartContainer(this.chartData.chartName)) {
      Plotly.purge(this.chartData.chartName);
    }
    if (this.chartData.chartName === 'success-name') {
      const shapes = [];
      if (this.goalLimit) {
        shapes.push({
          type: 'rect',
          xref: 'paper',
          yref: 'y2',
          x0: 0,
          x1: 1,
          y0: this.goalLimit / 100,
          y1: this.goalLimit / 100,
          showlegend: true,
          legend: 'Goal',
          name: 'Goal',
          opacity: 1,
          line: {
            width: 1,
            color: 'rgb(156, 176, 56)',
          },
        });
      }
      const minY2Value = this.chartData.traces[1].y.reduce((acc, cur) =>
        cur < acc ? cur : acc
      );
      const maxY1Value = this.chartData.traces[0].y.reduce((acc, cur) =>
        cur > acc ? cur : acc
      );

      // console.log('goal', this.goalLimit);

      Plotly.newPlot(
        this.chartData.chartName,
        this.chartData.traces.map((trace: any, i: any) => {
          return {
            ...trace,
            yaxis: `y${i + 1}`,
            line: {
              color: 'rgba(255, 255, 0, 0.8)', // Change the color here
            },
          };
        }) as Plotly.Data[],
        ChartHelper.layourDobleYGenerator(
          this.chartData.chartTitle,
          'Weeks',
          this.chartData.traces[0].name,
          this.chartData.traces[1].name,
          [0, maxY1Value * 1.2],
          [minY2Value * 0.999, 1],
          'Value',
          shapes.map((shape) => {
            shape.yref = 'y2';
            return shape;
          }),
          this.currentFontColor
        ) as Partial<Plotly.Layout>,
        ChartHelper.configGenerator()
      );
    } else {
      const shapes = [];
      if (this.goalLimit) {
        shapes.push({
          type: 'rect',
          xref: 'paper',
          yref: 'y',
          x0: 0,
          x1: 1,
          y0: this.goalLimit / 100,
          y1: this.goalLimit / 100,
          showlegend: true,
          legend: 'Goal',
          name: 'Goal',
          opacity: 1,
          line: {
            width: 1,
            color: 'rgb(156, 176, 56)',
          },
        });
      }
      const minY1Value = this.chartData.traces[0].y.reduce((acc, cur) =>
        cur < acc ? cur : acc
      );
      Plotly.newPlot(
        this.chartData.chartName,
        this.chartData.traces as Plotly.Data[],
        ChartHelper.layoutGenerator(
          'group',
          this.chartData.chartTitle,
          'Date',
          'Value',
          [minY1Value * 0.999, 1],
          true,
          'zoom',
          shapes,
          this.currentFontColor
        ) as Partial<Plotly.Layout>,
        ChartHelper.configGenerator()
      );
    }
  }

  resizeObserver = () => {
    let chartElement = document.getElementById(this.chartId);

    let resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === chartElement) {
          Plotly.Plots.resize(entry.target.id);
        }
      }
    });

    if (chartElement) {
      resizeObserver.observe(chartElement);
    }
  };
}
