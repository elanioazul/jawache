import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient} from '@angular/common/http';

interface track {
  artworkUrl30: string,
  trackViewUrl: string,
  trackName: string,
  collectionName: string
}
@Component({
  selector: 'jawache-tutorial-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.scss']
})
export class ArtistTrackListComponent implements OnInit {

  public tracks: Array<track> | undefined;

  constructor(
    private httpClient: HttpClient, 
    private route: ActivatedRoute,
  ) {
    this.route.parent?.params.subscribe(params => {
      console.log('params from the parent route is, artistID is' + params)
      this.httpClient.get<any>(`https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=song`)
        .toPromise()
        .then(res => {
          console.log(res);
          this.tracks = res.results.slice(1);//corto el 1er obj del array que llega que son datos del artista, no de los tracks del artista
        })
    })
   }

  ngOnInit(): void {
  }

}
