import { NgModule } from "@angular/core";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
    exports: [
        NzIconModule,
        NzLayoutModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzModalModule,
        NzCardModule,
        NzTableModule,
        NzDividerModule,
        NzFormModule,
        NzInputModule,
        NzNotificationModule,
        NzPopconfirmModule,
        NzSpinModule,
        NzInputNumberModule,
        NzAlertModule
    ],
})
export class NgZorroModule { }