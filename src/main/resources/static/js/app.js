const API_URL = "/api/employees";

document.addEventListener("DOMContentLoaded", function () {
    loadEmployees();
});


// Show Add Form

function showAddForm() {

    document.getElementById("addEmployee").style.display = "block";

    document.getElementById("addEmployee")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Hide Form

function hideForm() {

    document.getElementById("addEmployee").style.display = "none";

    document.getElementById("employeeForm").reset();
}


// Create Employee

document.getElementById("employeeForm")
    .addEventListener("submit", async function (event) {

        event.preventDefault();

        const employee = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            department:
            document.getElementById("department").value,

            salary:
                Number(document.getElementById("salary").value)
        };


        try {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(employee)
            });


            if (!response.ok) {
                throw new Error("Failed to save employee");
            }


            alert("Employee added successfully!");

            document.getElementById("employeeForm").reset();

            hideForm();

            loadEmployees();

        } catch (error) {

            console.error(error);

            alert("Error while saving employee");
        }

    });


// Get Employees

async function loadEmployees() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to load employees");
        }

        const employees = await response.json();

        displayEmployees(employees);

        updateStats(employees);

    } catch (error) {

        console.error(error);

        document.getElementById("employeeTableBody").innerHTML =
            `<tr>
                <td colspan="7">
                    Unable to load employees.
                </td>
             </tr>`;
    }
}


// Display Employees

function displayEmployees(employees) {

    const tableBody =
        document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";


    employees.forEach(employee => {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${employee.id}</td>

            <td>${employee.name}</td>

            <td>${employee.email}</td>

            <td>${employee.phone}</td>

            <td>${employee.department}</td>

            <td>₹${employee.salary}</td>

            <td>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee(${employee.id})">

                    Delete

                </button>

            </td>
        `;

        tableBody.appendChild(row);
    });
}


// Statistics

function updateStats(employees) {

    document.getElementById("totalEmployees")
        .innerText = employees.length;


    const itCount = employees.filter(employee =>
        employee.department.toLowerCase() === "it"
    ).length;


    const hrCount = employees.filter(employee =>
        employee.department.toLowerCase() === "hr"
    ).length;


    document.getElementById("itEmployees")
        .innerText = itCount;


    document.getElementById("hrEmployees")
        .innerText = hrCount;
}


// Delete Employee

async function deleteEmployee(id) {

    const confirmation =
        confirm("Are you sure you want to delete this employee?");


    if (!confirmation) {
        return;
    }


    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {
            throw new Error("Failed to delete employee");
        }


        alert("Employee deleted successfully!");

        loadEmployees();

    } catch (error) {

        console.error(error);

        alert("Error while deleting employee");
    }
}