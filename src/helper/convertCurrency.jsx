const ConvertCurrency = ({ price }) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(price);
};

export default ConvertCurrency;
