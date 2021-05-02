const createKeywords = (name) => {
  const arrName = [""];
  let currName = "";

  name.split("").forEach((letter) => {
    currName += letter.toLowerCase();
    arrName.push(currName);
  });

  return arrName;
};

export const generateKeyWords = (name) => {
  console.log(name);

  const keyWords = createKeywords(name);
  //   console.log(keyWords);

  return keyWords;
};
