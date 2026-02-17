import { inject, Injectable } from '@angular/core';
import { TemplateApiService } from '../../api/template/template.api.service';
import { BehaviorSubject } from 'rxjs';
import { ChartData } from '@app/core/models/chart/chart-data.model';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  private readonly _templateApiService: TemplateApiService =
    inject(TemplateApiService);

  private _tableData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public readonly tableData$ = this._tableData.asObservable();

  async getTableData(): Promise<any> {
    const data = await this._templateApiService.getTableData();
    console.log('data from service: ', data);
    this._tableData.next(data);
  }

  async getChartData(): Promise<ChartData[]> {
    return await this._templateApiService.getChartData();
  }
}
