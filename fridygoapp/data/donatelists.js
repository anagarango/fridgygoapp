export const accepted = {
    title:"Accepted ✅",
    route:"acc",
    message:"Foods we happily accept to feed our communities!"
  };
  export const notaccepted = {
    title:"Not Accepted ❌",
    route:"not",
    message:"Foods that we don't accept in our fridges for safety reasons"
  };
export const acceptedList = ["Fresh produce", "Non-perishable items", "Canned and dried goods", "Baked goods", "Prepackaged goods", "Dairy products", "Beverages (non-alcoholic)"]
export const notAcceptedList = ["Unsealed or half-consumed food", "Meat, poultry, or fish (raw/cooked)", "Any Homecooked meals", "Food the poses known health risks (ie. Salmonella)", "Alcohol"]
export const phoneNumbers = ["604-535-2423", "778-985-5763"]

export function ChangeButtonColor(e){
    e.target.style.backgroundColor="red"
}