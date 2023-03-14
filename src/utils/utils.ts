export function getCursor(page: number, itemsPerPage: number) {
  return btoa(((page - 1) * itemsPerPage - 1).toString());
}
