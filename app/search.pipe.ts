import {Pipe} from "angular2/core";
@Pipe({
    name: "search"
})
export class SearchPipe {
    transform(value, [term]) {
        // check on null 
        if (value != null) {
            return value.filter((item) => item.first_name.startsWith(term));
        }
    }
}