export const getDate = (date: string) => {
  if (!date) return new Date();

  const year: string = date.split("-")[0];
  const month: string = date.split("-")[1];
  const day: string = date.split("-")[2];

  let newDate = new Date();
  console.log(day, month, year);
  newDate.setFullYear(parseInt(year));
  newDate.setMonth(parseInt(month) - 1);
  newDate.setDate(parseInt(day));

  console.log(newDate);
  return newDate;
};
