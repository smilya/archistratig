import { identity } from "angular";
import GridDataItem from "../../ts_models/GridDataItem";
import UserData from "../../ts_models/UserData";

const data: GridDataItem[] = [
  {
    id: 0,
    firstName: "OneName",
    lastName: "OneSruname",
    age: 10,
    isMale: true,
  },
  {
    id: 1,
    firstName: "TwoName",
    lastName: "TwoSruname",
    age: 20,
    isMale: false,
  },
  {
    id: 2,
    firstName: "ThreeName",
    lastName: "ThreeSuruname",
    age: 30,
    isMale: false,
  },
  {
    id: 3,
    firstName: "FourName",
    lastName: "FourSuruname",
    age: 40,
    isMale: true,
  },
];

export default class AppController {
  public isSidebarOpen: boolean = true;
  public isGridformOpen: boolean = false;
  public actionType: string = "";
  public gridData: GridDataItem[] = data;
  public addedUserIndex: number = 0;
  public userToEdit: GridDataItem = {
    id: -1,
    firstName: "",
    lastName: "",
    age: -1,
    isMale: false,
  };
  public myVar:number = 11.22;
  private maxId: number = 0;

  constructor() {
    const IDs = data.map(item => item.id);
    this.maxId = Math.max.apply(null, IDs);
  }

  public onBurgerClick() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  public onGridformClose() {
    this.isGridformOpen = false;
  }

  public onDelete(index: number): void {
    this.gridData.splice(index, 1);
  }

  public onAdd(index: number): void {
    this.isGridformOpen = true;
    this.actionType = "Add";
    this.addedUserIndex = index + 1;
    this.userToEdit = {
      id: ++this.maxId,
      firstName: "",
      lastName: "",
      age: "",
      isMale: true,
    };
  }

  public onEdit(index: number): void {
    this.isGridformOpen = true;
    this.actionType = "Edit";
    this.userToEdit = data[index];
  }

  public onSubmit(newUserData: UserData) {
    this.isGridformOpen = false;

    if (this.actionType === "Edit") {
      const editedUser = { ...this.userToEdit, ...newUserData };
      data.forEach((item, index) => {
        if (item.id === editedUser.id) {
          data[index] = editedUser;
        }
      });
    }

    if (this.actionType === 'Add') {
      const newUserIndex = this.addedUserIndex
      const newUser = {...this.userToEdit, ...newUserData};
      this.gridData.splice(newUserIndex, 0, newUser)
      
    }
  }
}
