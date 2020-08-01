import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'telephone'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.userService.getUsers()
    .subscribe(p => {
      this.dataSource = new MatTableDataSource(p);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  add() {
    this.router.navigate(["/user-detail/add/0"])
  }

  edit(id: number) {
    this.router.navigate(['/user-detail/edit/' + id]);
  }

  delete(id: number){
    this.userService
    .delete(id)
    .subscribe(s => {
      this.loadData();
    });
  }

}
