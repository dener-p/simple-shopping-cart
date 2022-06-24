const CURRENCY_FORMARTTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (n: number) => {
  return CURRENCY_FORMARTTER.format(n);
};
