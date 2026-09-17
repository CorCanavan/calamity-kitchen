export const getMaterialIngredients = async () => {
  try {
    const response = await fetch('https://api.hyrule-compendium.com/v3/compendium/category/materials')
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error("Error fetching material ingredients:", error)
  }
}

export const getCreatureIngredients = async () => {
  try {
    const response = await fetch('https://api.hyrule-compendium.com/v3/compendium/category/creatures')
    const data = await response.json()
    const filteredData = data.data.filter(creature => creature.edible === true)
    return filteredData
  } catch (error) {
    console.error("Error fetching creature ingredients:", error)
  }
}


