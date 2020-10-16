const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(data) {
        this.timestamp = Date().toString();
        this.data = data;
        this.prevHash = "0";
        // for affecting block by mining steps
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.timestamp + this.prevHash + JSON.stringify(this.data) + this.nonce.toString()).toString();
    }

    mineBlock(difficulty) {
        const startTime = new Date().getTime();
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        const endTime = new Date().getTime();
        const durationTime = endTime - startTime;

        console.log("Block nonce: " + this.nonce);
        console.log("Block mining time: " + durationTime);
        console.log("Block's hash: " + this.hash);
    }
}

module.exports = Block;