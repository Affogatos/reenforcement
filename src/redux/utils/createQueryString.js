export default queryObj => {
  let initialQueryString =
    'http://api.petfinder.com/pet.find?format=json&key=915d10113d6e12622f0211f120615084';
  for (const key in queryObj) {
    initialQueryString += `&${key}=${queryObj[key]}`;
  }
  return initialQueryString;
};
