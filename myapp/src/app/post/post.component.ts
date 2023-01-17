import { Component ,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() itemSold="TV"
@Output() newItemSoldEvent=new EventEmitter<string>()

addNewItemSold(value:string){
    this.newItemSoldEvent.emit(value)
}

}
