import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true  
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, field: string = 'themeName'): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(item =>
      item[field]?.toLowerCase().includes(searchText)
    );
  }
}
