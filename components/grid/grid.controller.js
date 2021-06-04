export default class GridController {
    onDelete(index) { }
    onAdd(index) { }
    onEdit(index) { }
    onDeleteClick(index) {
        this.onDelete({ index });
    }
    onAddClick(index) {
        this.onAdd({ index });
    }
    onEditClick(index) {
        this.onEdit({ index });
    }
}
