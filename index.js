var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = recipes.prop2 = 2
  var obj = Object.assign({}, recipes, { [key]: value })
}

