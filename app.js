const Block = require("./block");
const Chain = require("./chain");

/* defining first Chain */
const myNewChain = new Chain();

/* defining Blocks */
const firstBlock = new Block({ msg: "Hi, I'm first block" });
myNewChain.addBlock(firstBlock);

/* defining Blocks */
// const secondBlock = new Block({ msg: "Hi, I'm second block" });
// myNewChain.addBlock(secondBlock);

/* logging chain and chainValidation Result */
console.log(myNewChain.chain);
console.log(myNewChain.chainValidation());
// console.log("\n\n");

/* for changing data of a block to test chain-validation */
// myNewChain.chain[2].data = "Hi, I'm first block, HA HA :)";
// console.log(myNewChain.chain);
// console.log(myNewChain.chainValidation());
