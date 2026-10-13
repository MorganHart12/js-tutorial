

const students = [
    { name: "Morgan", age: 19, course: "Software Engineering" },
    { name: "John", age: 30, course: "Computing" }
];





function App() {
    return (
        <main style={{ fontFamily: "system-ui", lineHeight: 1.5, padding: "1rem" }}>
            <h1>🌊 Week 3 — JSX Rendering Workbook</h1>

            <div> Hello Software Engineers!</div>
            <h2> Morgan Hart</h2>
            <p>Python</p>
            <p className="fun-fact"> hello</p>

            <ul>
                {students.map((student, index) => (
                    <li key={index}>
                        {student.name} - {student.course}
                    </li>
                ))}
            </ul>

            <ul>
                {students.filter(student => student.age > 21).map(student, index) => (
                <li key={index}>
                    {student.name} ({student.age}) - {student.course}
                </li>
					))}
            </ul>


            {function renderStudent(student, index) {
                return (
                    <div key={index}>
                        <p>{student.name}</p> - Age: {student.course}, Course: {student.course}
                    </div>
                );
            }
			
		</main>
    );
}

//************************************************************
// STEP 9 — RENDER TO THE PAGE (React 18)
//************************************************************

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
