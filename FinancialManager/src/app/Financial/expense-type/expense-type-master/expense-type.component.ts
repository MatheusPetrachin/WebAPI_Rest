import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpenseType } from '../expense-type';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ExpenseTypeService } from '../expense-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.component.html',
  styleUrls: ['./expense-type.component.css']
})
export class ExpenseTypeMasterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description'];
  dataSource: MatTableDataSource<ExpenseType>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private expenseTypeService: ExpenseTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.expenseTypeService.gets()
    .subscribe(p => {
      this.dataSource = new MatTableDataSource(p);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(["/expenseType-detail/add/0"])
  }

  edit(id: number) {
    this.router.navigate(['/expenseType-detail/edit/' + id]);
  }

  delete(id: number){
    this.expenseTypeService
    .delete(id)
    .subscribe(s => {
      this.loadData();
    });
  }

}
