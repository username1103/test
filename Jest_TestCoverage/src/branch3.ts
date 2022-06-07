export const branch3 = (x: number, y: number, z: number) => {
  if (x > 5 && (y < 3 || z < 3)) {
    return true;
  }

  return false;
};
