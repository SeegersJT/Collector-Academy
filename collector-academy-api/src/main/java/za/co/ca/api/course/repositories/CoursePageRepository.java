package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CoursePage;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CoursePageRepository extends JpaRepository<CoursePage, String> {
    List<CoursePage> findByCourseModuleNo(String courseModuleNo);
    Optional<CoursePage> findByCoursePageNo(String coursePageNo);
}
