export const getMaterialIngredients = () => {
  return fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
  .then(response => response.json())
  .then(data => data.data)
  .catch(error => console.log(error))
}

export const getCreatureIngredients = () => {
  return fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
  .then(response => response.json())
  .then(data => data.data.food)
  .catch(error => console.log(error))
}