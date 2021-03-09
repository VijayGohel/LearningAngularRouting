import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
  <p>you selected id : {{id}}</p>
  <a (click)="goPrevious()">Previous</a>  
  <a (click)="goNext()">Next</a>  
  `,
  styles: [
  ]

})
export class DepartmentDetailComponent implements OnInit {

  public id;
  constructor(private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {

    //this.id= parseInt(this.route.snapshot.paramMap.get('id')) ;

    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id=parseInt(params.get('id'));}
    );

  }

  goPrevious()
  {
    let prevId=this.id-1;
    this.router.navigate(['departments',prevId]);
  }

  goNext()
  {
    let nextId=this.id+1;
    this.router.navigate(['departments',nextId]);
  }

  

}
