/**
 * Created by betit on 7/30/2016.
 */
import {Injectable, Pipe, PipeTransform} from 'angular2/core';
import { Photo } from './photo';

@Pipe({
    name: 'mySortPipe'
})
@Injectable()
export class MySortPipe implements PipeTransform{
    transform(photos: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        if (args[0] == "title"){
            photos.sort((x: any, y: any) => {
                let a = x.title;
                let b = y.title;
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return photos;
        }
        else if (args[0] == "date"){
            photos.sort((x: any, y: any) => {
                let a = new Date(x.date).getTime();
                let b = new Date(y.date).getTime();
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return photos;
        }
        else
            return photos;
    }
}