let grID = document.getElementById("grID");
let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let addBtn = document.getElementById("addBtn");
let gridAlert = document.getElementById("grid-alert")
let emailAlert = document.getElementById("email-alert")
let contactAlert = document.getElementById("contact-alert")
let contactAlert2 = document.getElementById("contact-alert2")
const contactRegex = /^[0-9]{10,15}$/;
grID.addEventListener("input", () => {
    grID.classList.remove("border", "border-danger", "shadow")
    gridAlert.classList.add("d-none")
    grID.style.marginBottom = "15px"
})
email.addEventListener("input", () => {
    email.classList.remove("border", "border-danger", "shadow")
    emailAlert.classList.add("d-none")
    email.style.marginBottom = "15px"
})
contact.addEventListener("input", () => {
    contact.classList.remove("border", "border-danger", "shadow")
    contactAlert.classList.add("d-none")
    contactAlert2.classList.add("d-none")
    contact.style.marginBottom = "15px"
})
class Student {
    constructor(grID, name, email, contact) {
        this.grID = grID;
        this.name = name;
        this.email = email;
        this.contact = contact;
    }
}

let school = [];
let editIndex = null; // To track which student is being edited

function renderTask() {
    let table = document.getElementById("table");
    table.innerHTML = "";
    school.forEach(function (student, index) {
        table.innerHTML += `
                <tr class="">
                    <td class="py-1 ps-3">#${student.grID}</td>
                    <td class="text-capitalize py-1 ps-3">${student.name}</td>                            
                    <td class="py-1 ps-3 text-lowercase">${student.email}</td>
                    <td class="py-1 ps-3">${student.contact}</td>
                    <td class="py-1 d-flex justify-content-end gap-3 px-3">
                        <button class="px-2 btn btn-success view-btn" disabled><i class="ri-eye-line"></i></button>
                        <button class="px-2 btn btn-warning edit-btn" onclick="editStudent(${index})"><i class="ri-image-edit-line"></i></button>
                        <button class="px-2 btn btn-danger del-btn" onclick="deleteStudent(${index})"><i class="ri-delete-bin-2-line"></i></button>
                    </td>
                </tr>`;
    });
}

function deleteStudent(index) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {

        if (result.isConfirmed) {
            grID.value = "";
            fullName.value = "";
            email.value = "";
            contact.value = "";
            addBtn.innerHTML = "Add";
            addBtn.classList.remove("btn-warning");
            addBtn.classList.add("submit-btn");
            school.splice(index, 1);
            renderTask();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Deleted Successfuly",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
}

function editStudent(index) {
    grID.value = school[index].grID;
    fullName.value = school[index].name;
    email.value = school[index].email;
    contact.value = school[index].contact;

    editIndex = index;

    addBtn.innerHTML = "Update";
    addBtn.classList.remove("submit-btn");
    addBtn.classList.add("btn-warning");
}

function isDuplicateGrID(id) {
    return school.some((student) => student.grID === id);
}
function isDuplicateEmail(email) {
    return school.some((student) => student.email === email);
}
function isDuplicateContact(contact) {
    return school.some((student) => student.contact === contact);
}

addBtn.addEventListener("click", function () {
    if (!grID.value || !fullName.value || !email.value || !contact.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "PLEASE FILL OUT ALL THE FORMS BEFORE SUBMITTING",
        });
        return;
    }

    let newStudent = new Student(grID.value, fullName.value, email.value, contact.value);

    if (editIndex !== null) {
        // If editing, update the existing entry
        school[editIndex] = newStudent;
        editIndex = null; // Reset edit mode

        // Reset the button state after updating
        addBtn.innerHTML = "Add";
        addBtn.classList.remove("btn-warning");
        addBtn.classList.add("submit-btn");
    } else {
        if (isDuplicateGrID(grID.value)) {
            grID.classList.add("border", "border-danger", "shadow")
            grID.style.marginBottom = "5px"
            gridAlert.classList.remove("d-none")
            return;
        }
        if (isDuplicateEmail(email.value)) {
            email.classList.add("border", "border-danger", "shadow")
            email.style.marginBottom = "5px"
            emailAlert.classList.remove("d-none")
            return;
        }
        if (isDuplicateContact(contact.value)) {
            contact.classList.add("border", "border-danger", "shadow")
            contact.style.marginBottom = "5px"
            contactAlert.classList.remove("d-none")
            return;
        } else if (!contactRegex.test(contact.value)) {
            contact.classList.add("border", "border-danger", "shadow")
            contact.style.marginBottom = "5px"
            contactAlert2.classList.remove("d-none")
            return;
        }
        // Otherwise, add a new student
        school.push(newStudent);
    }

    renderTask();

    grID.value = "";
    fullName.value = "";
    email.value = "";
    contact.value = "";
});