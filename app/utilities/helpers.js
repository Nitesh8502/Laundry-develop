
import { SCHEDULE_PIC } from "@/app/utilities/staticData";


const getTotalDays = () => {
    const currentDate = new Date();
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
};
export const getDays  = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const totalDays = getTotalDays();
    const retData = [];
    for(let itr=0, k=0;itr<SCHEDULE_PIC.maxDays;itr++, k++) {
        retData.push({day: (getPicUpDate() + k)%totalDays, name: days[(currentDay + itr)%7]});
    }
    return retData;
};

export const getDate = (n) => {
  const current = new Date();
  current.setDate(current.getDate() + n);
  const day = String(current.getDate()).padStart(2, '0');
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const year = current.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}
export const getPicUpDate = () => {
    const current = new Date();
    return current.getDate();
}
export const convertsDaysInSeconds = (n) => {
    return parseInt(n)*86400;
};