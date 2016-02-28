export const updateBear = ( bears, bearSrc, bearId ) => {
  bears[bearId] = { src: bearSrc }

  return bears
}
