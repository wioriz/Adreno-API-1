const Sims = require("./controllers/data/sim.json");
const check = require("./modules/checkvalue.js");
const similarity = require("./modules/checksimilarity.js");
f = Sims.filter(rl => rl.key.includes('xin chào'));
console.log(f);