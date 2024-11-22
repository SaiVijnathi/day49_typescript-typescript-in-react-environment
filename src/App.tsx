import StudentMarksheet from './components/StudentMarksheeet';
import './App.css';

function App() {
  const students = [
    { name: 'Sravani', telMarks: '91', hinMarks: '92', engMarks: '90', matMarks: '93', sciMarks: '94', socMarks: '95' },
    { name: 'Ramesh', telMarks: '81', hinMarks: '82', engMarks: '88', matMarks: '85', sciMarks: '86', socMarks: '87' },
    { name: 'Divya', telMarks: '71', hinMarks: '72', engMarks: '70', matMarks: '73', sciMarks: '74', socMarks: '75' },
    { name: 'Manohar', telMarks: '61', hinMarks: '62', engMarks: '60', matMarks: '63', sciMarks: '64', socMarks: '65' },
    { name: 'Priya', telMarks: '51', hinMarks: '52', engMarks: '50', matMarks: '53', sciMarks: '54', socMarks: '55' },
    { name: 'Karthik', telMarks: '41', hinMarks: '42', engMarks: '40', matMarks: '43', sciMarks: '44', socMarks: '45' },
  ];

  return (
    <div>
      <h1>TypeScript in React environment</h1>
      <StudentMarksheet students={students} />
    </div>
  );
}

export default App;
