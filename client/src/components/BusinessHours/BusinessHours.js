import { useState } from "react";
import { Checkbox, Container, Header, List, Segment } from "semantic-ui-react";
import { TimeInput } from "semantic-ui-react-datetimeinput";

function BusinessHours() {
  const [timeValue, setTimeValue] = useState(new Date());

  const weekdays = {
    Montag: ["08:00", "18:00"],
    Dienstag: ["08:00", "18:00"],
    Mittwoch: ["08:00", "18:00"],
    Donnerstag: ["08:00", "18:00"],
    Freitag: ["08:00", "18:00"],
    Samstag: ["08:00", "18:00"],
    Sonntag: ["08:00", "18:00"],
  };

  const closedButton = () => <Checkbox toggle />;

  const getTimeSelector = () => {
    return (
      <TimeInput
        size="small"
        onDateValueChange={(newTimeValue) => setTimeValue(newTimeValue)}
        className="dateTimeInput"
        dateValue={timeValue}
        buttondoubleclickstepcountforminute={15}
      />
    );
  };

  return (
    <>
      <Header as="h1">Öffnugszeiten (Von/Bis oder Geschlossen)</Header>
      <Segment>
        {Object.keys(weekdays).map((day, index) => {
          return (
            <Segment key={day * index.toString()} textAlign="center">
              <Header as="h4">{`${day}: `}</Header>
              {getTimeSelector()}  {getTimeSelector()}
              <br></br>
              <br></br>
              {closedButton()}
            </Segment>
          );
        })}
      </Segment>
    </>
  );
}

export default BusinessHours;
