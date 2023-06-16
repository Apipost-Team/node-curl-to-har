const Parser = require("tree-sitter");
const Bash = require("tree-sitter-bash");

// const Parser =()=>0
// const Bash={}



const parser = new Parser();
parser.setLanguage(Bash);

export default parser
//# sourceMappingURL=Parser.js.map
