import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(post: Post[], args?: any): any {
    if(!post)return null;
    if(!args)return post;
    args = args.toLowerCase();
    return post.filter((data: any)=>{
        return data.body.toLowerCase().includes(args);
    });
}

}
