const isEmptyObject = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};
const calculate_age = (dob1) => {
  let today = new Date();
  let birthDate = new Date(dob1); // create a date object directly from `dob1` argument
  let age_now = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return "( "+age_now+ " years old)";
};
const calculate_age_dead = (dob1, dob2) => {
  let birthDate = new Date(dob1); // create a date object directly from `dob1` argument
  let deadDate = new Date(dob2);
  let age_now = deadDate.getFullYear() - birthDate.getFullYear();
  let m = deadDate.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && deadDate.getDate() < birthDate.getDate())) {
    age_now--;
  }
  return "( "+age_now+ " years old)";
};
const checkGender = (id)=>{
  if(id===2) return "Male";
  else if(id===1) return "Female";
  else return "---"
}
export const helper = {
  isEmptyObject,
  calculate_age,
  calculate_age_dead,
  checkGender
};
