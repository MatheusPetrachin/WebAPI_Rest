import { Component, OnInit, ViewChild } from '@angular/core';
import { Launch } from '../launch';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { LaunchService } from '../launch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchMasterComponent implements OnInit {

  model = {
    totale: 500.4,
  }

  displayedColumns: string[] = ['id', 'description', 'launchType','value', 'launchDate'];
  dataSource: MatTableDataSource<Launch>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private launchService: LaunchService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.launchService.getTotales().subscribe(s => this.model.totale = s);
  }

  loadData(){
    this.launchService.gets()
    .subscribe(p => {
      this.dataSource = new MatTableDataSource(p);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(["/launch-detail/add/0"])
  }

  edit(id: number) {
    this.router.navigate(['/launch-detail/edit/' + id]);
  }

  delete(id: number){
    this.launchService
    .delete(id)
    .subscribe(s => {
      this.loadData();
    });
  }
}
