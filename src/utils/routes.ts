export enum ROUTES {
  LANDING = "/",
  RESERVE = "reserve",
  DETAIL_ID = "detalle/:id",
}

export function getAbsolutePath(route: ROUTES): string {
  return `/${route}`;
}
