import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { TestErrorComponent } from './test-error/test-error.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    SectionHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BreadcrumbModule,
    NgxSpinnerModule,
    SharedModule,
  ],
  exports: [NavBarComponent, SectionHeaderComponent, NgxSpinnerModule],
})
export class CoreModule {}
