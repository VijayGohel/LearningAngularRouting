import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List 
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments"  [class.selected]="isSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments=[
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"MongoDB"},
    {"id":4, "name":"Ruby"},
    {"id":5, "name":"Bootstrap"},
  ];

  public id;

  constructor(private router: Router, private route: ActivatedRoute) { }

  

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id=parseInt(params.get('id'));}
    );
  }

  onSelect(department)
  {
    // this.router.navigate(['departments',department.id]);
    this.router.navigate([department.id],{relativeTo: this.route});
  }

  isSelected(department)
  {
    return this.id === department.id;
  }

}
