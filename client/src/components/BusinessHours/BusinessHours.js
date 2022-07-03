import { useEffect, useState } from "react";
import { Header, Segment } from "semantic-ui-react";

import Weekdays from "./Weekdays";

function BusinessHours() {

  const [weekdays, setWeekdays] = useState({});

  useEffect( () => {
    fetch("/api/time")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonResponse) => setWeekdays(jsonResponse[0]));
  }, []);

  const weekDayHandel = (day, time) => {
    setWeekdays(prevState => ({
      ...prevState,
      [day]: time
    }));
  }

  if(!weekdays){
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Header as="h1">Öffnugszeiten (Von/Bis oder Geschlossen)</Header>
      <Segment.Group>
        {Object.keys(weekdays).map((day, index) => {
          if(day === '_id' || day === 'updatedAt') return undefined;

          return <Weekdays 
            key={index.toString()}
            name={day}
            timeValue={weekdays[day]}
            timeHandle={weekDayHandel}
            closed={weekdays[day][2] ? true : false}
            id={weekdays._id}
          />
        })}
      </Segment.Group>
    </>
  );
}

export default BusinessHours;
