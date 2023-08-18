import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendCli'
})
export class AppendCliPipe implements PipeTransform {

  transform(value: any, args?: any) {
    return "City Name Cli: " + value
}

}
