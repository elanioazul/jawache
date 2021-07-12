import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperappComponent } from './components/superapp/superapp.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistTrackListComponent } from './components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './components/artist-album-list/artist-album-list.component';
import { AlwaysAuthGuardGuard} from './guards/always-auth-guard.guard';
import { OnlyLoggedInUsersGuard } from './guards/only-logged-in-users.guard';
import { AlwaysAuthChildrenGuardGuard } from './guards/always-auth-children-guard.guard';
import { UnserchedTermGuard } from './guards/unserched-term.guard';

@NgModule({
  declarations: [
    SuperappComponent,
    HeaderComponent,
    HomeComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    RouterModule
  ],
  providers: [AlwaysAuthGuardGuard, OnlyLoggedInUsersGuard, AlwaysAuthChildrenGuardGuard, UnserchedTermGuard],
  exports: [HeaderComponent, HomeComponent,SuperappComponent]
})
export class HttppromisesModule { }
