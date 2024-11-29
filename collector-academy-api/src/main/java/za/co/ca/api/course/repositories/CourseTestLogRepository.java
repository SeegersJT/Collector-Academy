package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseTestLog;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestLogRepository extends JpaRepository<CourseTestLog, String> {
    List<CourseTestLog> findByCourseTestResultNo(String courseTestResultNo);
    Optional<CourseTestLog> findByCourseTestLogNo(String courseTestLogNo);

}
