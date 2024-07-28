export const checkdata = (email,password)=>{
  const isemailvalid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const ispassvalid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if(!isemailvalid)return "Not Valid Email Id";
  if(!ispassvalid)return "Password is Not Valid";
  return null;
}