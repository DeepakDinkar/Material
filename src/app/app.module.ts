import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  NativeDateAdapter,
  MatSelectModule,
  MatPaginatorIntl,
  MatButtonToggleModule,
  MatSliderModule,
  MatChipsModule,
  MatBadgeModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardDirective } from './card.directive';
import { CardComponent } from './card/card.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CustomMatPaginatorIntl } from './customPaginator';
import { SocialComponent } from './social/social.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: HomeComponent, data: { page: 'main' } },
      { path: 'social', component: SocialComponent, data: { page: 'social' } },
      { path: 'chat', component: ChatComponent, data: { page: 'chat' } }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardDirective,
    CardComponent,
    LoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent,
    SidebarComponent,
    TableComponent,
    SocialComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatGridListModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatChipsModule,
    MatBadgeModule
  ],
  exports: [
    MainComponent,
    CardComponent,
    UserLoginComponent,
    UserRegisterComponent,
    HomeComponent
  ],
  entryComponents: [CardComponent],
  providers: [
    DataService,
    MatNativeDateModule,
    NativeDateAdapter,
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
