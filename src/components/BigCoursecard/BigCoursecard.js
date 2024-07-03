import './BigCoursecard.css';

export function BigCoursecard() {
  return (
    <div className="big-course-card">
      <div className="big-course-header">
        <h2>Web Design Fundamentals</h2>
        <p>
          Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.
        </p>
        <button className="view-course">View Course</button>
      </div>
      <div className="big-course-images">
        <img src="course1.png" alt="Course Image 1" />
        <img src="course2.png" alt="Course Image 2" />
        <img src="course3.png" alt="Course Image 3" />
      </div>
      <div className="big-course-info">
        <div className="duration">
          <p>4 Weeks</p>
        </div>
        <div className="level">
          <p>Beginner</p>
        </div>
        <div className="instructor">
          <p>By John Smith</p>
        </div>
      </div>
      <div className="big-course-curriculum">
        <div className="big-curriculum-item">01 Introduction to HTML</div>
        <div className="big-curriculum-item">02 Styling with CSS</div>
        <div className="big-curriculum-item">03 Introduction to Responsive Design</div>
        <div className="big-curriculum-item">04 Design Principles for Web</div>
        <div className="big-curriculum-item">05 Building a Basic Website</div>
      </div>
    </div>
  );
};


