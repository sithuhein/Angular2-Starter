//Based on https://github.com/thelgevold/angular-2-samples/blob/master/components/grid/sorter.ts
export class Sorter {

    constructor(){
        this.key = null;
        this.direction = 1;
    }

    sort(collection, key) {
        this.key = key;
        this.direction = (this.key === key) ? this.direction * -1 : 1;

        collection.sort((a,b) => {
            if(a[key] === b[key]){
                return 0;
            }
            else if (a[key] > b[key]){
                return this.direction * 1;
            }
            else {
                return this.direction * -1;
            }
        });
    }

}
