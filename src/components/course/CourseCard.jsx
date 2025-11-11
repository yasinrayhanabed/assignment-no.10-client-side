import { Link } from 'react-router-dom'
import { FiClock, FiUser } from 'react-icons/fi'

const CourseCard = ({ course }) => {
  return (
    <div className="card course-card p-6">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
            {course.category}
          </span>
          <span className="text-2xl font-bold text-green-600">${course.price}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white line-clamp-2">
          {course.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center space-x-1">
            <FiUser className="w-4 h-4" />
            <span>{course.instructorName}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiClock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
          {course.description}
        </p>
        
        <Link
          to={`/courses/${course._id}`}
          className="btn-primary w-full text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default CourseCard