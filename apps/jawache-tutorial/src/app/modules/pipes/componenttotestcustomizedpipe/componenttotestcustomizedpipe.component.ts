import { Component, OnInit } from '@angular/core';
import { CustomizedpipePipe } from '../customizedpipe.pipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jawache-tutorial-componenttotestcustomizedpipe',
  templateUrl: './componenttotestcustomizedpipe.component.html',
  styleUrls: ['./componenttotestcustomizedpipe.component.scss']
})
export class ComponenttotestcustomizedpipeComponent implements OnInit {
  //este componente consume un pipe que si no recibe una foto de avatar, te pone una default, la que te da el pipe customizado de transformacion
  public imageUrl = "";
  public myPipe: CustomizedpipePipe | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
