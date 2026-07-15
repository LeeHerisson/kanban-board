export const formatDate = (date: string): string => {
  const taskDate = new Date(date);
  const currentYear = new Date().getFullYear();
  const taskYear = taskDate.getUTCFullYear();

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: taskYear !== currentYear ? "numeric" : undefined,
  };

  return new Intl.DateTimeFormat("en-GB", options).format(taskDate);
};
