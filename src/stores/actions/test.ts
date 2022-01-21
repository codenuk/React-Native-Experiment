const setName = (value: string): { type: string; name: string } => {
  return {
    type: 'SET_NAME',
    name: value,
  }
}

export default {
  setName,
}
