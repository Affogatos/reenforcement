export default data => {
  let {
    description: { $t: description },
    age: { $t: age },
    name: { $t: name },
    size: { $t: size },
    sex: { $t: sex },
    animal: { $t: animal },
    id: { $t: id },
    options: { option },
    mix: { $t: mix },
    breeds: { breed },
    contact: {
      phone: { $t: phone },
      state: { $t: state },
      email: { $t: email },
      city: { $t: city },
      zip: { $t: zip },
      fax: { $t: fax },
      address1: { $t: address1 },
    },
    shelterId: { $t: shelterId },
    shelterPetId: { $t: shelterPetId },
  } = data;
  if (breed) {
    if (breed.constructor.name === 'Object') breed = Object.values(breed);
    breed = breed
      .map(x => (x.constructor.name === 'Object' ? x['$t'] : x))
      .map((x, i, arr) => (i < arr.length - 1 ? x + ', ' : x));
  }
  if (option) {
    if (option.constructor.name === 'Object') option = Object.values(option);
    option = option.map(x => x['$t']).map((x, i, arr) => (i < arr.length - 1 ? x + ', ' : x));
  }
  let petInfo = Object.assign(
    {
      description,
      age,
      name,
      size,
      sex,
      animal,
      id,
      option,
      mix,
      breed,
      phone,
      state,
      email,
      city,
      zip,
      fax,
      address1,
      shelterId,
      shelterPetId,
    },
    { petID: null }
  );
  return petInfo;
};
