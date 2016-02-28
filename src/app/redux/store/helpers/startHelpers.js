export const updateBear = ( bears, bearSrc, bearId ) => {
  bears[bearId] = { src: bearSrc }

  return bears
}

export const deleteBear = ( bears, bearId ) => {
  // TO DO: Check if there are 3 or more bears before deleting
  bears[bearId] = null

  return bears
}
