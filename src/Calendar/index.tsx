/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.scss";
import MonthCalendar from "./MonthCalendar";
import Header from "./Header";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { CSSProperties, ReactNode, useState } from "react";
import cs from "classnames";
import localeContext from "./LocaleContext";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { value, style, className, locale, onChange } = props;
  const [curValue, setCurValue] = useState(value);
  const [curMonth, SetCurMonth] = useState<Dayjs>(value);
  const classNames = cs("calendar", className);

  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  function prevMonthHandler() {
    // 在 dayjs 中，subtract 方法用于从日期中减去一定的时间单位，例如天、月、年等。这对于处理日期操作非常有用，比如计算某个日期之前的某个时间点。
    SetCurMonth(curMonth.subtract(1, "month"));
  }

  function nextMonthHandler() {
    SetCurMonth(curMonth.add(1, "month"));
  }

  function todayHandler() {
    const date = dayjs(Date.now());
    changeDate(date);
  }

  function changeDate(date: Dayjs) {
    setCurValue(date);
    SetCurMonth(date);
    onChange?.(date);
  }
  return (
    <localeContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <Header
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
          curMonth={curMonth}
        ></Header>
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </localeContext.Provider>
  );
}

export default Calendar;
