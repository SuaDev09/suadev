import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse } from '@app/core/models/api-response.model';
import { ChartData } from '@app/core/models/chart/chart-data.model';
import { ENVIRONMENT } from '@env/environment';
import { catchError, firstValueFrom, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemplateApiService {
  private readonly _httpClient: HttpClient = inject(HttpClient);
  // private readonly _API_URL = ENVIRONMENT.API_URL; // Use this variable when making API calls
  private readonly _API_URL = 'jsons';

  async getTableData(): Promise<ApiResponse<any>> {
    return await firstValueFrom(
      this._httpClient
        .get<ApiResponse<any>>(`${this._API_URL}/table.json`)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.handleError(error, error.error.message);
            throw error;
          }),
          map((response: ApiResponse<any>) => {
            console.log(response, 'resp');

            return response || [];
          })
          // map((response: ApiResponse<any>) => response.data || [])
        )
    );
  }

  // async getChartData(): Promise<ApiResponse<ChartData[]>> {
  async getChartData(): Promise<ChartData[]> {
    return await firstValueFrom(
      this._httpClient.get<ChartData[]>(`${this._API_URL}/charts.json`).pipe(
        catchError((error: HttpErrorResponse) => {
          this.handleError(error, error.error.message);
          throw error;
        }),
        map((response: ChartData[]) => {
          return response || [];
        })
      )
    );
  }

  private handleError(error: any, message: string): Observable<never> {
    console.error('Error:', error);
    return throwError(() => new Error(message));
  }
}
