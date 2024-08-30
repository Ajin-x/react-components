export interface CalendarType {
  formatYear: string;
  formatMonth: string;
  today: string;
  month: {
    January: string;
    February: string;
    March: string;
    April: string;
    May: string;
    June: string;
    July: string;
    August: string;
    September: string;
    October: string;
    November: string;
    December: string;
    // 额外属性
    //   LunarJanuary: "农历一月"; // 这个属性是由 Record<string, any> 允许的
  } & Record<string, any>;
  //   Record<string, any>:
  // string：表示对象的键（属性名称）必须是字符串类型。
  // any：表示对象的值可以是任意类型。
  week: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  } & Record<string, any>;
}
