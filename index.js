var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, recipes, { [key]: value })
  recipes.prop2 = 2
}

