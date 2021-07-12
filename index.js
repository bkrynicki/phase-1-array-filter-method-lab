// Code your solution here
function findMatching(drivers, name) {
  const matchDrivers = drivers.filter(function (person) {
    return person.toLowerCase() === name.toLowerCase();
  });
  return matchDrivers;
}

function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}
