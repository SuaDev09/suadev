import { Component, inject } from '@angular/core';
import { TemplateService } from '../../services/template/template.service';
import { TableComponent } from '../../components/table/table.component';
import { ChartData } from '@app/core/models/chart/chart-data.model';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-template',
  imports: [TableComponent, ChartComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css',
})
export class TemplateComponent {
  private readonly _templateService: TemplateService = inject(TemplateService);
  chartData!: ChartData[];
  async ngOnInit(): Promise<void> {
    await this._templateService.getTableData();
    this.chartData = await this._templateService.getChartData();
  }
}
