export const getMaterialIngredients = () => {
  return fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
  .then(response => response.json())
  .then(data => data.data)
}

export const getCreatureIngredients = () => {
  return fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
  .then(response => response.json())
  .then(data => data.data.food)
}