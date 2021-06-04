export default function sidebarFilter() {
    // 'ngInject'
    return function (list, search) {
        function filterCallback(item) {
            if (search === undefined)
                return true;
            const letterMatch = new RegExp(`^${search}`, 'i');
            return letterMatch.test(item.title);
        }
        return list.filter(filterCallback);
    };
}
