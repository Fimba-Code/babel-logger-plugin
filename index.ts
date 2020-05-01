// @ts-nocheck
import { traverse, parse } from "@babel/core";
import * as t from "@babel/types";
import generator from "@babel/generator";

const code = `
function add(a, b) {
  $log;
  const result = a + b;

  return result;
}
add(2, 3);
`;

const ast = parse(code);

let hasLogID = false;

const LoggerVisitor = {
  ReturnStatement: (path: object) => {
    const identifierName = path.node.argument.name;
    if (path.node.argument.type === "Identifier" && hasLogID) {
      path.replaceWithMultiple([
        t.identifier(`console.log('Final Result 😛 ==> ', ${identifierName})`),
        t.identifier(`return ${identifierName}`),
      ]);
    }
  },
  Identifier: (path: object) => {
    if (path.isIdentifier({ name: "$log" })) {
      hasLogID = true;
      path.remove();
    }
  },
  BinaryExpression: (path: object) => {
    if (path.node.operator === "+") {
      path.node.operator = "*";
    }
  },
};

traverse(ast, {
  enter: (path) => {
    path.traverse(LoggerVisitor);
  },
});

const output = generator(ast, {}, code);
const newCode = output.code;
console.log({ newCode: eval(newCode) });
