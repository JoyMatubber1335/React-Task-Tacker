import { useState } from "react";

export const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("added a taslk");
      return;
    }
    addTask({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add text" value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" placeholder="Add day" value={day} onChange={(e) => setDay(e.target.value)}></input>
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          placeholder="Add reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input type="submit" value="save task" className="btn btn-block"></input>
    </form>
  );
};
