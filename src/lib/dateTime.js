import  { format } from "date-fns";

const dateFormat = (date) => {

    return format(new Date(date), "do MMM y");
}

export { dateFormat };