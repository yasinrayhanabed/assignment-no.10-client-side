import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AuthProvider from './context/AuthProvider';
import ThemeProvider from './context/ThemeProvider';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import PrivateRoute from './components/auth/PrivateRoute';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddCourse from './pages/AddCourse';
import UpdateCourse from './pages/UpdateCourse';
import MyAddedCourses from './pages/MyAddedCourses';
import MyEnrolledCourses from './pages/MyEnrolledCourses';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <Router>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
              <Navbar />
              <main className="min-h-screen">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={
                    <PrivateRoute>
                      <CourseDetails />
                    </PrivateRoute>
                  } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } />
                  <Route path="/add-course" element={
                    <PrivateRoute>
                      <AddCourse />
                    </PrivateRoute>
                  } />
                  <Route path="/update/:id" element={
                    <PrivateRoute>
                      <UpdateCourse />
                    </PrivateRoute>
                  } />
                  <Route path="/my-courses" element={
                    <PrivateRoute>
                      <MyAddedCourses />
                    </PrivateRoute>
                  } />
                  <Route path="/enrolled-courses" element={
                    <PrivateRoute>
                      <MyEnrolledCourses />
                    </PrivateRoute>
                  } />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <Toaster position="top-right" />
            </div>
          </Router>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;