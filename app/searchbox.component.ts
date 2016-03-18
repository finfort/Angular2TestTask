import {Component, Output, EventEmitter} from "angular2/core";

@Component({

    selector: 'search-box',
    template:
    `<div>
        <input #input type="text" (input)="update.emit(input.value)" placeholder="search">
     </div>
    `
})
export class SearchBox {
    // on input there will be new event with input.value
    @Output() update = new EventEmitter();
    
    // init with empty search string
    ngOnInit(){
        this.update.emit('');
    }
}