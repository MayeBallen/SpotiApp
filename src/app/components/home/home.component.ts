import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/service/spotify.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mesajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        this.error = true;
        this.mesajeError = errorServicio.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
