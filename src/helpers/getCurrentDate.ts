const getCurrentDate = (): string => {
  const currentDate = new Date();
  const dayWithMonth = currentDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
  });
  const year = currentDate.getFullYear();
  return `${dayWithMonth} ${year}`;
};

export default getCurrentDate;
