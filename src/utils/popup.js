
export class Popup {
  confirm(slotProps,type) {
    slotProps.toggleConfirm(type);
  }
  alert(slotProps,type){
    slotProps.toggleAlert(type)
  }
}
