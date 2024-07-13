import { useState } from 'react';
import './App.css';
import SubjectRow from './Components/SubjectDisplay.jsx';

function App() {
  const [subject, setSubject] = useState('');
  const [hours, setHours] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleAddClick = () => {
    if (subject && hours) {
      setSubjects([...subjects, { subject, hours: parseInt(hours) }]);
      setSubject('');
      setHours('');
    }
  };

  const handleIncrement = (index) => {
    const newSubjects = [...subjects];
    newSubjects[index].hours += 1;
    setSubjects(newSubjects);
  };

  const handleDecrement = (index) => {
    const newSubjects = [...subjects];
    if (newSubjects[index].hours > 0) {
      newSubjects[index].hours -= 1;
      setSubjects(newSubjects);
    }
  };

  return (
    <div className="App">
      <h1 className='title'>Geekster Education Planner</h1>
      <div className="wrapper">
      <input
        type="text"
        placeholder="Enter Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter No of hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
      </div>

      <div className="subject-list">
        {subjects.map((item, index) => (
          <SubjectRow
            key={index}
            subject={item.subject}
            hours={item.hours}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;