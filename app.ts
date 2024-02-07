import { format } from "date-fns";
import { ru } from "date-fns/locale";
const currentDate = new Date();
console.log(
  format(currentDate, "dd MMMM", { locale: ru }) +
    "\n" +
    format(currentDate, "d MMMM p", { locale: ru })
);
