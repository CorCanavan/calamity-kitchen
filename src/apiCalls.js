export const getMaterialIngredients = async () => {
  try {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials')
    console.log("material response", response)
    const data = await response.json()
    console.log("material data", data, "data.data", data.data)
    return data.data
  } catch (error) {
    console.error("Error fetching material ingredients:", error)
  }
}

export const getCreatureIngredients = async () => {
  try {
    const response = await fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures')
    console.log("creature response", response)
    const data = await response.json()
    console.log("creature data", data, "data.data", data.data)
    const filteredData = data.data.filter(creature => creature.edible === true)
    console.log("filteredData", filteredData)
    return filteredData
  } catch (error) {
    console.error("Error fetching creature ingredients:", error)
  }
}


