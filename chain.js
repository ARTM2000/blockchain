const Block = require("./block");

class Chain {

    difficulty = 5;

    constructor() {
        this.chain = [this.generateGenesisBlock()];
    }

    generateGenesisBlock() {
        return new Block("GENESIS BLOCK");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        return true;
    }

    chainValidation() {
        for (let index = 1; index < this.chain.length; index++) {

            const currentBlock = this.chain[index];
            const prevBlock = this.chain[index - 1];

            // validating the chain
            if (currentBlock.prevHash !== prevBlock.hash) {
                return false;
            }
            // validating block hash (important for )
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
        }
        return true;
    }
}

module.exports = Chain;