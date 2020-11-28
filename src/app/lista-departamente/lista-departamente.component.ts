import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListaDepartamenteDataSource, ListaDepartamenteItem } from './lista-departamente-datasource';

@Component({
  selector: 'lista-departamente',
  templateUrl: './lista-departamente.component.html',
  styleUrls: ['./lista-departamente.component.css']
})
export class ListaDepartamenteComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ListaDepartamenteItem>;
  dataSource: ListaDepartamenteDataSource;
  constructor(private router : Router) {}
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'NumesiPrenume', 'punctaj'];

  ngOnInit() {
    this.dataSource = new ListaDepartamenteDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onSelect(persoana) {
    this.router.navigate(["/detalii", persoana.id])
  }
}
