import React from 'react';


function StudentMarksheet(props: any) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Telugu</th>
            <th>Hindi</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Social</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {props.students.map((student: any, index: number) => {
            const totalMarks =
              parseInt(student.telMarks) +
              parseInt(student.hinMarks) +
              parseInt(student.engMarks) +
              parseInt(student.matMarks) +
              parseInt(student.sciMarks) +
              parseInt(student.socMarks);

            const percentage = (totalMarks / 600) * 100;

            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.telMarks}</td>
                <td>{student.hinMarks}</td>
                <td>{student.engMarks}</td>
                <td>{student.matMarks}</td>
                <td>{student.sciMarks}</td>
                <td>{student.socMarks}</td>
                <td>{totalMarks}</td>
                <td>{percentage.toFixed(2)}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentMarksheet;
