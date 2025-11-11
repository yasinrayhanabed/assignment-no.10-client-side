export const BASE_URL = "/api";

// API endpoints for production (with /api prefix)
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
  CERTIFICATE: "/certificate"
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
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};