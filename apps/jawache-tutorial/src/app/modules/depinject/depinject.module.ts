import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    FormsModule
  ],
  exports: [ParentComponent, ChildComponent],
})
export class DepinjectModule { }
