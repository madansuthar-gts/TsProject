import fs from 'fs/promises';
import path from 'path';

const main = async () => {
  const filePath = path.resolve('hello.txt');
  console.log("Hello world")
  await fs.writeFile(filePath, 'Hello Sir Madan!\n');
  const content = await fs.readFile(filePath, 'utf-8');
  console.log('File Content:', content);
};

main();