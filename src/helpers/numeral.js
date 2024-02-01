import numeral from "numeral";

export const formatNumeral = (number) => {
  return numeral(number).format("0a");
};
