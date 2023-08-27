function choice (items: string[]): string {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function remove (items: string[], itemToRemove: string) {
  const indexToRemove = items.indexOf(itemToRemove);
  if (indexToRemove !== -1) {
    items.splice(indexToRemove, 1);
    // console.log(items);
    return items;
  }
}

export { choice, remove };