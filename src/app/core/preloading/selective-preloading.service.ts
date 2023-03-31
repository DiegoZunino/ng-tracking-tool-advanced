import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class SelectivePreloadingService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      console.log(`${route.path} preloaded!`)
      return load();
    } else {
      return of(null)
    }
  }

}
