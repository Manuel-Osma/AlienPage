import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent,
} from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {
  DxDataGridModule,
  DxFormModule,
  DxTagBoxModule,
  DxGalleryModule,
  DxBoxModule,
  DxMapModule,
  DxButtonModule,
  DxSchedulerModule,
  DxPopoverModule,
  DxPopupModule,
  DxTreeListModule,
  DxLoadPanelModule,
  DxSpeedDialActionModule,
  DxTabPanelModule,
  DxToastModule,
  DxValidatorModule,
  DxTextBoxModule,
  DxValidationGroupModule
} from 'devextreme-angular';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';
import { TreeListComponent } from './pages/tree-list/tree-list.component';
import { MapComponent } from './pages/map/map.component';
import { LoadPanelComponent } from './pages/load-panel/load-panel.component';
import { FormComponent } from './pages/form/form.component';
import { ValidatorComponent } from './pages/validator/validator.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'panel',
    component:LoadPanelComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'form',
    component:FormComponent,
    canActivate:[AuthGuardService]
  },
  {
    path: 'tree',
    component: TreeListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'map',
    component:MapComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'validator',
    component:ValidatorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    DxDataGridModule,
    DxFormModule,
    DxPopoverModule,
    DxMapModule,
    DxToastModule,
    DxGalleryModule,
    DxPopupModule,
    DxBoxModule,
    DxTreeListModule,
    DxSchedulerModule,
    DxLoadPanelModule,
    DxButtonModule,
    DxTabPanelModule,
    DxSpeedDialActionModule,
    DxTagBoxModule,
    DxValidationGroupModule,
    DxValidatorModule,
    DxTextBoxModule
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    MapComponent,
    ProfileComponent,
    TasksComponent,
    SchedulerComponent,
    TreeListComponent,
    LoadPanelComponent,
    FormComponent,
    ValidatorComponent,


  ],
})
export class AppRoutingModule {}
