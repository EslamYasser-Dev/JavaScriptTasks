// Fetch data from the JSON file and pass it to the searchValue function
fetch('/std.json')
  .then(response => response.json())
  .then(data => {
    const input = document.getElementById("myInput");
    const value = input.value;
    const key = searchValue(data, value);
    console.log(key);
  });

// Define a function to search for a value in the JSON object
function searchValue(obj) {
    a = document.getElementsByClassName("entity").value;
  for (let key of Object.keys(obj)) {
    const prop = obj[key];
    if (typeof prop === "object") {
      const result = searchValue(prop, a);
      if (result) {
        return result;
      }
    } else if (prop === a) {
      return key;
    }
  }
  console.log("No one called " + a);
  return null;
}