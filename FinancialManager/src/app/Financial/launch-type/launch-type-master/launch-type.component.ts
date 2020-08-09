import { Component, OnInit, ViewChild } from '@angular/core';
import { LaunchType } from '../launch-type';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { LaunchTypeService } from '../launch-type.service';

@Component({
  selector: 'app-launch-type',
  templateUrl: './launch-type.component.html',
  styleUrls: ['./launch-type.component.css']
})
export class LaunchTypeMasterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description'];
  dataSource: MatTableDataSource<LaunchType>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private launchTypeService: LaunchTypeService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.launchTypeService.gets()
    .subscribe(p => {
      this.dataSource = new MatTableDataSource(p);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(["/launchType-detail/add/0"])
  }

  edit(id: number) {
    this.router.navigate(['/launchType-detail/edit/' + id]);
  }

  delete(id: number){
    this.launchTypeService
    .delete(id)
    .subscribe(s => {
      this.loadData();
    });
  }

}


