package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import za.co.ca.api.course.models.Course;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseRepository extends JpaRepository<Course, String> {

    @Query("SELECT c FROM Course c ORDER BY c.systemDate ASC")
    List<Course> findAllOrderBySystemDateAsc();

    Optional<Course> findByCourseNo(String courseNo);
    Optional<Course> findByCourseTitle(String courseTitle);
}
