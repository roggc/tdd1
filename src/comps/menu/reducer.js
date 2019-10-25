export default
(val={},act)=>
{
  switch (act.type) {
    case 'MENU_TOGGLE_MODAL':
      val=
      {
        ...val,
        showModal:!val.showModal
      }
      return val
    default:
      return val
  }
}
