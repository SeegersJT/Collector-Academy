package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseTestQuestion;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestQuestionRepository extends JpaRepository<CourseTestQuestion, String> {
    List<CourseTestQuestion> findByCourseTestNo(String courseTestNo);
    Optional<CourseTestQuestion> findByCourseTestQuestionNo(String courseTestQuestionNo);
}
