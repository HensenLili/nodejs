import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  data: {mes: string} | any;
  private path: string | undefined;
  constructor(
    private http: HttpClient
  ) {
    this.data = {mes: ''};
  }

  ngOnInit(): void {
    this.path = 'http://localhost:3000/data';
    this.http.get(this.path).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }
}
