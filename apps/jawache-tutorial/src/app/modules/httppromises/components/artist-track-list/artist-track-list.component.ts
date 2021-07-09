import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'jawache-tutorial-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.scss']
})
export class ArtistTrackListComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) {
    this.route.parent?.params.subscribe(params => {
      console.log(params)
    })
   }

  ngOnInit(): void {
  }

}
