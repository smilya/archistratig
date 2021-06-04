export default class GridController {
  public onDelete(index: {index: number}):void {}
  public onAdd(index: {index: number}):void {}
  public onEdit(index: {index: number}):void {}
  
  onDeleteClick (index: number) {    
    this.onDelete({index})
  }

  onAddClick(index: number) {
    this.onAdd({index})
  }

  onEditClick(index: number) {    
    this.onEdit({index})
  }
}