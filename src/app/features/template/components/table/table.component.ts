import { Component, inject } from '@angular/core';
import { TemplateService } from '../../services/template/template.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: [
    './table.component.css',
    '../../../../shared/styles/custom-table.css',
  ],
})
export class TableComponent {
  private readonly _templateService: TemplateService = inject(TemplateService);

  data!: any;

  ngOnInit() {
    this._templateService.tableData$.forEach((tableData: any) => {
      if (tableData.length > 0) {
        console.log(tableData);
        this.data = tableData;
      }
    });
  }
}
