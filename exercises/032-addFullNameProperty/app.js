
function addFullNameProperty(obj) {
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj
}

console.log(addFullNameProperty({ firstName: "carlos", lastName: "olmos" }))