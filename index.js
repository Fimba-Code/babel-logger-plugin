
module.exports = function (babel) {
  const { types: t } = babel;

  let hasLogID = false;

  return {
    name: "log-transform",
    visitor: {
      ReturnStatement: (path) => {
        const identifierName = path.node.argument.name;
        if (path.node.argument.type === "Identifier" && hasLogID) {
          path.replaceWithMultiple([
            t.identifier(
              `console.log('Final Result 😛 ==> ', ${identifierName})`
            ),
            t.identifier(`return ${identifierName}`),
          ]);
        }
      },
      Identifier: (path) => {
        if (path.isIdentifier({ name: "$log" })) {
          hasLogID = true;
          path.remove();
        }
      },
    },
  };
}
