// Mock JSON Data
const events = [
    { id: 1, name: "Hackathon", date: "2025-10-01", location: "Campus Hall" },
    { id: 2, name: "Tech Talk", date: "2025-10-10", location: "Auditorium" },
    { id: 3, name: "Workshop", date: "2025-11-05", location: "Lab 3" },
    { id: 4, name: "Cultural Fest", date: "2025-12-01", location: "Ground" },
    { id: 5, name: "Sports Meet", date: "2026-01-15", location: "Stadium" }
];

const students = [
    { id: 1, name: "Amit Kumar", dept: "CSE", year: "3rd", email: "amit@example.com" },
    { id: 2, name: "Priya Sharma", dept: "ECE", year: "2nd", email: "priya@example.com" },
    { id: 3, name: "Ravi Patel", dept: "IT", year: "4th", email: "ravi@example.com" },
    { id: 4, name: "Sneha Roy", dept: "ME", year: "1st", email: "sneha@example.com" },
    { id: 5, name: "Vikram Singh", dept: "CSE", year: "3rd", email: "vikram@example.com" },
    { id: 6, name: "Anjali Nair", dept: "EEE", year: "2nd", email: "anjali@example.com" }
];

// Pagination Function
function renderPagination(data, containerId, displayFunction, perPage = 2) {
    let currentPage = 1;
    const totalPages = Math.ceil(data.length / perPage);

    function displayPage(page) {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        displayFunction(data.slice(start, end));
        renderButtons();
    }

    function renderButtons() {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.classList.toggle("active", i === currentPage);
            btn.addEventListener("click", () => {
                currentPage = i;
                displayPage(i);
            });
            container.appendChild(btn);
        }
    }

    displayPage(currentPage);
}

// Display Functions
function displayEvents(eventsList) {
    const container = document.getElementById("events");
    container.innerHTML = "";
    eventsList.forEach(ev => {
        container.innerHTML += `
      <div class="card">
        <strong>${ev.name}</strong><br>
        Date: ${ev.date}<br>
        Location: ${ev.location}
      </div>`;
    });
}

function displayStudents(studentsList) {
    const container = document.getElementById("students");
    container.innerHTML = "";
    studentsList.forEach(st => {
        container.innerHTML += `
      <div class="card">
        <strong>${st.name}</strong> (${st.year} Year - ${st.dept})<br>
        Email: ${st.email}
      </div>`;
    });
}

// Initialize
renderPagination(events, "eventPagination", displayEvents);
renderPagination(students, "studentPagination", displayStudents);