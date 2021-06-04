export default class GridformController {
    constructor() {
        this.isOpen = false;
        this.localData = {
            firstName: "",
            lastName: "",
            age: "",
            isMale: false,
        };
    }
    onSubmit({ newUserData: {} }) { }
    $onChanges(changes) {
        console.log(changes);
        if (!changes)
            return;
        if (changes.isOpen &&
            changes.isOpen.currentValue &&
            changes.isOpen.currentValue !== changes.isOpen.previousValue &&
            changes.initData &&
            changes.initData.currentValue) {
            this.localData = { ...changes.initData.currentValue };
        }
    }
    onFormSubmit() {
        this.onSubmit({ newUserData: { ...this.localData } });
        this.localData = {
            firstName: "",
            lastName: "",
            age: "",
            isMale: false,
        };
    }
}
