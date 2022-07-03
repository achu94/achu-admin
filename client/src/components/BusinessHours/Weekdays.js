import { useState } from "react";
import { Segment, Header, Checkbox } from "semantic-ui-react";
import TimePicker from 'react-time-picker';

import * as timeServices from "../../services/timeServices";

function Weekdays(props) {
  const [closed, setClosed] = useState(props.closed);

  const timeValueStart = props.timeValue[0];
  const timeValueEnd   = props.timeValue[1];
  
  const timeHandle = (value, direction) => {
    const day = props.name;
    const timeData = { [day]: [value, timeValueEnd, closed] };

    if(direction === 'end') {
      timeData[day][0] = timeValueStart;
      timeData[day][1] = value;
    }

    timeServices.updateTime(props.id, timeData).then( () => {
      props.timeHandle(day, timeData[day]);
    });
  }

  const closedHandle = (value) => {
    setClosed(!closed);

    timeServices.updateClosed(props.id, {day: props.name, value: value}).then( () => {
      props.timeHandle(props.name, [timeValueStart, timeValueEnd, closed ]);
    });
  }

  return (
    <Segment key={props.keys} name={props.day} textAlign="center">
      <Header as="h4">{props.name}</Header>
      <TimePicker clearIcon={null} disabled={!closed} onChange={(value) => timeHandle(value, 'start')} value={timeValueStart} />
      <TimePicker clearIcon={null} disabled={!closed} onChange={(value) => timeHandle(value, 'end')} value={timeValueEnd} />
      <br></br>
      <br></br>
      <Checkbox toggle checked={closed} onClick={ () => closedHandle(!closed)}/>
    </Segment>
  );
}

export default Weekdays;