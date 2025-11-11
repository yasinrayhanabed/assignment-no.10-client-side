const API_BASE_URL = 'http://localhost:3000/api';

// DOM Elements
const coursesList = document.getElementById('coursesList');
const usersList = document.getElementById('usersList');
const addCourseBtn = document.getElementById('addCourseBtn');
const courseModal = document.getElementById('courseModal');
const courseForm = document.getElementById('courseForm');
const closeModal = document.querySelector('.close');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    loadUsers();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    addCourseBtn.addEventListener('click', () => {
        courseModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        courseModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === courseModal) {
            courseModal.style.display = 'none';
        }
    });

    courseForm.addEventListener('submit', handleAddCourse);
}

// Load courses from API
async function loadCourses() {
    try {
        const response = await fetch(`${API_BASE_URL}/courses`);
        const courses = await response.json();
        displayCourses(courses);
    } catch (error) {
        console.error('Error loading courses:', error);
        coursesList.innerHTML = '<p>Error loading courses. Make sure the server is running.</p>';
    }
}

// Display courses
function displayCourses(courses) {
    if (courses.length === 0) {
        coursesList.innerHTML = '<p>No courses available. Add some courses!</p>';
        return;
    }

    coursesList.innerHTML = courses.map(course => `
        <div class="course-card">
            <h3>${course.title || 'Untitled Course'}</h3>
            <p><strong>Instructor:</strong> ${course.instructor || 'Unknown'}</p>
            <p><strong>Duration:</strong> ${course.duration || 'N/A'} hours</p>
            <p>${course.description || 'No description available'}</p>
        </div>
    `).join('');
}

// Load users from API
async function loadUsers() {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error('Error loading users:', error);
        usersList.innerHTML = '<p>Error loading users. Make sure the server is running.</p>';
    }
}

// Display users
function displayUsers(users) {
    if (users.length === 0) {
        usersList.innerHTML = '<p>No users registered yet.</p>';
        return;
    }

    usersList.innerHTML = users.map(user => `
        <div class="user-card">
            <h3>${user.name || 'Unknown User'}</h3>
            <p><strong>Email:</strong> ${user.email || 'N/A'}</p>
            <p><strong>Role:</strong> ${user.role || 'Student'}</p>
        </div>
    `).join('');
}

// Handle add course form submission
async function handleAddCourse(e) {
    e.preventDefault();
    
    const courseData = {
        title: document.getElementById('courseTitle').value,
        description: document.getElementById('courseDescription').value,
        instructor: document.getElementById('courseInstructor').value,
        duration: parseInt(document.getElementById('courseDuration').value)
    };

    try {
        const response = await fetch(`${API_BASE_URL}/courses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(courseData)
        });

        if (response.ok) {
            courseForm.reset();
            courseModal.style.display = 'none';
            loadCourses(); // Reload courses
            alert('Course added successfully!');
        } else {
            alert('Error adding course');
        }
    } catch (error) {
        console.error('Error adding course:', error);
        alert('Error adding course. Make sure the server is running.');
    }
}