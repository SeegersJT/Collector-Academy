package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.Course;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseRepository extends JpaRepository<Course, String> {
    Optional<Course> findByCourseNo(String courseNo);
    Optional<Course> findByCourseTitle(String courseTitle);
}
