package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseResult;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseResultRepository extends JpaRepository<CourseResult, String> {
    List<CourseResult> findByCourseNo(String courseNo);
    Optional<CourseResult> findByCourseResultNo(String courseResultNo);

    List<CourseResult> findByCourseNoAndEmployeeNo(String courseNo, Integer employeeNo);
}
