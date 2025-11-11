export const BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:3000";

// API endpoints
export const API_ENDPOINTS = {
  COURSES: "/courses",
  COURSE_BY_ID: (id) => `/courses/${id}`,
  FEATURED_COURSES: "/courses/featured",
  CATEGORIES: "/categories",
  ENROLL: "/enroll",
  ENROLLMENTS_BY_EMAIL: (email) => `/enroll/${email}`,
  USERS: "/users",
  USER_BY_EMAIL: (email) => `/users/${email}`,
  INSTRUCTORS_TOP: "/instructors/top",
  INSTRUCTOR_COURSES: (email) => `/instructor/${email}`,
  REVIEWS: "/reviews",
  REVIEWS_BY_COURSE: (courseId) => `/reviews/${courseId}`,
  CERTIFICATE: "/certificate",
  HEALTH: "/health"
};

// Helper function for API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    // Check if response is ok
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('API endpoint not found');
      }
      if (response.status >= 500) {
        throw new Error('Server error occurred');
      }
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Cannot connect to server. Make sure the backend server is running on ' + BASE_URL);
    }
    
    throw error;
  }
};

// Function to check server connection
export const checkServerConnection = async () => {
  try {
    const response = await fetch(`${BASE_URL}/health`, { method: 'GET' });
    return response.ok;
  } catch {
    return false;
  }
};