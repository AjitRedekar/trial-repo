const fs = require('fs');

function getMyFileData(fileName){
  return new Promise(function(resolve){
    fs.readFile(fileName, "utf-8", function(err, data) {
        resolve(data);
      });
  });
  
  }

//   function logMyFileData(data){
//     console.log(data);
//   }

// getMyFileData("a.txt").then(logMyFileData);
// console.log("That's it. Done.");

async function loggedMyFileData(data){
    const resolevedPromise = await getMyFileData(data);
    console.log(resolevedPromise);

}

loggedMyFileData("a.txt");
