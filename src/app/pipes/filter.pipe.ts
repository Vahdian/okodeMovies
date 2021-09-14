import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg.length < 2 || arg === "") return value
    const resultMovies = [];
    for(const movie of value){
      if(movie.title.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultMovies.push(movie)
      }
    }
    return resultMovies;

  }

}
