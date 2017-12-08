import {NgModule } from '@angular/core';

import { allServices } from './index.js';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ...allServices
    ]
})

export class ServiceModule { }
