import { useCallback } from "react";
import moment from "moment"
import DaySelector from "./DaySelector";


function TimeSelector({ data }) {

  // useCallback - это реакт хук, который помогает оптимизировать работу функции.
  // useCallback мы передаем функцию, которую мы хотим запомнить и запускать только при необходимости.
  //  При запуске этой функции запоминается также ее ответ.
  // useCallback принимает список зависимостей как второй аргумент.
  // Если эта функция переиспользуется где-либо и в зависимостях нет изменений, то 
  // функция заново не обрабатывается.
  // useCallback запоминает все, что произошло в нем и передает это тому, кто вызвал.
  

  const getCurrentData = useCallback((cbFn) => {
    data?.list.forEach(item => {
      const timestamp = item.dt;
      const momentDate = moment.unix(timestamp);

      const day = momentDate.format('DD');
      const hour = momentDate.format('HH:mm');

      cbFn(item, day, hour);
    });
  }, [data]);


  return (
    <>
      <DaySelector
        data={data}
        getCurrentData={getCurrentData}
      />

    
    </>
  );
}

export default TimeSelector;
