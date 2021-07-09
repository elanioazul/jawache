import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient} from '@angular/common/http';

interface artist {
  amgArtistId: number,
  artistId: number,
  artistLinkUrl: string,
  artistName: string,
  artistType: string,
  primaryGenreId: number,
  primaryGenreName: string,
  wrapperType: string
}
@Component({
  selector: 'jawache-tutorial-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public selectedArtist: artist | undefined;

  constructor(
    private httpClient: HttpClient, 
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      console.log('This is ArtistComponent: params from the parent route is, artistID is' + params)
      this.httpClient.get<any>(`https://itunes.apple.com/lookup?id=${params["artistId"]}`)
        .toPromise()
        .then(res => {
          console.log(res);
          this.selectedArtist = res.results[0];
        })
    })
   }

  ngOnInit(): void {
  }

}
