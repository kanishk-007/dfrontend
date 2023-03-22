export default function isauth() {
  if (localStorage.getItem('token') === "") {
    console.log(localStorage.getItem('token'));
    return false;
  }
  return true;
}