export const cleanData = arg =>
  arg.filter(val => val.node !== null && JSON.stringify(val.node) != '{}')
