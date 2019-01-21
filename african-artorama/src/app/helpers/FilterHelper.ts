export class FilterHelper {
    filterForQuery(query, list: any[]): any[] {
        const filtered: any[] = [];
        for (let i = 0; i < list.length; i++) {
            const singleValue = list[i];
            if (singleValue.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filtered.push(singleValue);
            }
        }
        return filtered.sort();
    }
}
