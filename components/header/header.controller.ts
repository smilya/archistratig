export default class HeaderController {
  public onBurgerClick():void {}
  public showBurger:boolean;

  constructor() {
    this.showBurger = true;
  }  
  
  public onClick() {
    this.onBurgerClick();
    
  }  
}
