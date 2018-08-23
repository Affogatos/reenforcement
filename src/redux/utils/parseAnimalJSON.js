export default petData => {
  let {
    data: {
      petfinder: {
        pets: { pet },
      },
    },
  } = petData;
  return pet;
};
