const fs = require('fs');
const superagent = require('superagent');

// Read the file
const readFilePro = (file: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err: Error, data: string) => {
      if (err) reject(`Couldn't Found the file 🥲`);
      resolve(data);
    });
  });
};

// Write a new File
const writeFilePro = (file: string, data: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err: Error) => {
      if (err) return reject(`Couldn't Write the file 🥲`);
      resolve();
    });
  });
};

// Runing code
// readFilePro(`${__dirname}/dog.txt`).then(data=>{
//     console.log(`Breed: ${data}`)
//     return superagent.get(`https://dog.ceo/api/breed/${ data }/images/random`)
// })
//     .then(res => {
//     console.log(`Image URL: ${res.body.message}`)
//     return writeFilePro(`new.txt`, res.body.message)
// })
// .then(()=>{
//     console.log('The image Saved Successfuly ✅')
// })
// .catch(
//     err =>{
//         console.log(err)
//     }
// )

// Async/Await
const getDogImage = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(`Image URL: ${res.body.message}`);
    await writeFilePro(`new.txt`, res.body.message);
    console.log('The image Saved Successfuly ✅');
  } catch (err) {
    console.log(err);
  }
};

getDogImage();
