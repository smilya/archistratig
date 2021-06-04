import UserData from "../../ts_models/UserData";

export default class GridformController {
  public isOpen: boolean = false;
  public localData: UserData = {
    firstName: "",
    lastName: "",
    age: "",
    isMale: false,
  };
  public onSubmit({ newUserData: {} }): void {}

  constructor() {}

  public $onChanges(changes: any) {
    console.log(changes);
    if (!changes) return;
    if (
      changes.isOpen &&
      changes.isOpen.currentValue &&
      changes.isOpen.currentValue !== changes.isOpen.previousValue &&
      changes.initData &&
      changes.initData.currentValue
    ) {
      this.localData = { ...changes.initData.currentValue };      
    }
  }

  public onFormSubmit() {
    this.onSubmit({ newUserData: { ...this.localData } });
    this.localData = {
      firstName: "",
      lastName: "",
      age: "",
      isMale: false,
    };
  }
}
