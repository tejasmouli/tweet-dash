import { NgModule } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';


@NgModule({
    imports: [PanelModule, CardModule],
    exports: [PanelModule, CardModule]
})
export class PrimengModule {}
