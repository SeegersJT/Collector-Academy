package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseModule;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseModuleRepository extends JpaRepository<CourseModule, String> {
    List<CourseModule> findByCourseNo(String courseNo);
    Optional<CourseModule> findByCourseModuleNo(String courseModuleNo);
}
