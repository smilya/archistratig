export default function sidebarFilter():any{
  // 'ngInject'
  return function(list:any, search:string ) {     
        
    function filterCallback(item:{title:string}):boolean {
      if (search === undefined) return true;
      const letterMatch = new RegExp(`^${search}`, 'i');
      return letterMatch.test(item.title);
    }

    return list.filter(filterCallback);
  }
}