import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent} from './modules/httppromises/components/home/home.component';
import { SuperappComponent} from './modules/httppromises/components/superapp/superapp.component';
import { ArtistComponent } from './modules/httppromises/components/artist/artist.component';
import { ArtistTrackListComponent } from './modules/httppromises/components/artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './modules/httppromises/components/artist-album-list/artist-album-list.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'find', redirectTo: 'search'},
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SuperappComponent },
  { path: 'search/:term', component: SuperappComponent },
  { 
    path: 'artist/:artistId', component: ArtistComponent,
    children: [
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
    ] 
  },
  { path: '**', component: HomeComponent }
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
