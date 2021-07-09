import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient} from '@angular/common/http';
interface album {
  collectionViewUrl: string,
  discNumber: number;
  artworkUrl100: string,
  collectionName: string
}
@Component({
  selector: 'jawache-tutorial-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss']
})
export class ArtistAlbumListComponent implements OnInit {

  public albums: Array<album> | undefined;

  constructor(
    private httpClient: HttpClient, 
    private route: ActivatedRoute,
  ) { 
    this.route.parent?.params.subscribe(params => {
      console.log('params from the parent route is, artistID is' + params)
      this.httpClient.get<any>(`https://itunes.apple.com/lookup?id=${params["artistId"]}&entity=album`)
        .toPromise()
        .then(res => {
          console.log(res);
          this.albums = res.results.slice(1);//corto el 1er obj del array que llega que son datos del artista, no de los tracks del artista
        })
    })
  }

  ngOnInit(): void {
  }

}
