import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Integrated Procedure model
export interface Procedure {
  procedure_id: number;
  procedure_name: string;
  procedure_price: number;
}

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.css']
})
export class ProceduresComponent implements OnInit {
  procedures: Procedure[] = [];
  private apiUrl = 'http://127.0.0.1:8000/procedures/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProcedures().subscribe((data: Procedure[]) => {
      this.procedures = data;
    });
  }

  // Integrated Procedure service logic
  getProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(this.apiUrl);
  }
}
