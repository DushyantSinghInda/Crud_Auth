const crypto = require("crypto");

const key1 = crypto.randomBytes(32).toString("hex"); // for creating 256bit key we have to pass 32 in randomBytes function
const key2 = crypto.randomBytes(32).toString("hex");
console.table({ key1, key2 });
