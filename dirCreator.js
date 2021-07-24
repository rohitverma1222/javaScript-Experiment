//create web folder then inside web create js,react and brower folder in it 
//then add 5 folder in every directory and a md.text file /
let fs=require("fs");
let path=require("path");


let inarr=process.argv.slice(2);
let mainFol=inarr[0];
// let FirstM=inarr[1];
// let secondM=inarr[2];
// let thirdM=inarr[3];
 
let cwd=process.cwd();
let mainDir=path.join(cwd,mainFol);
// let firstDir=path.join(cwd,mainFol,FirstM);
// let secondDir=path.join(cwd,mainFol,secondM);
// let thirdDir=path.join(cwd,mainFol,thirdM);

// console.log(mainDir);
// console.log(firstDir);
// console.log(secondDir);
// console.log(thirdDir);
let isMainPresent=fs.existsSync(mainDir);
if(isMainPresent)
{
    console.log("Directory Present");
    return;
}
else{
    console.log(mainFol+"Main folder is created");
    fs.mkdirSync(mainDir);
    let topicFromInput=inarr.slice(1,4);
   //topicfrominput array is created and use name the folder \
   
    for(let i=0;i<topicFromInput.length;i++)
    {
        let ctopic=path.join(mainDir,topicFromInput[i])
        console.log(topicFromInput[i],"created");
    
        fs.mkdirSync(ctopic);
    
    for(let j=1;j<=5;j++)
    {
        let modulepath=path.join(ctopic,"Module"+j);
        fs.mkdirSync(modulepath);
        console.log("Module "+j," created inside "+topicFromInput[i]);
        let filepath=path.join(modulepath,"md.txt");
        fs.writeFileSync(filepath,"hello");
    }
}

}