package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseTest;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestRepository extends JpaRepository<CourseTest, String> {
    List<CourseTest> findByCourseNo(String courseNo);
    Optional<CourseTest> findByCourseTestNo(String courseTestNo);
}
