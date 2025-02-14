export const getMonth = (p_month: string) => {
  let month = 0;

  for (let i = 0; i < 12; i++) {
    if (i+1 == Number(p_month)) {
      month = i;
    }
  }

  return month;
}