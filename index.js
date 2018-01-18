var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = 2
  var obj = Object.assign({}, recipes, { [key]: value })
}

