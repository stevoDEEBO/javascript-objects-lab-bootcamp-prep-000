var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, recipes, { [key]: value })
  recipes.prop2 = 2
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

