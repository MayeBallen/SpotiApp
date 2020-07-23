import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

//servicios
import { SpotifyService } from "./service/spotify.service";

//Rutas
import { AppRoutingModule } from "./app-routing.module";

//componentes
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ArtistaComponent } from "./components/artista/artista.component";
import { SearchComponent } from "./components/search/search.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NoimagePipe } from "./pipes/noimage.pipe";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
import { TarjetasComponent } from "./components/tarjetas/tarjetas.component";
import { LoadingComponent } from "./components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
