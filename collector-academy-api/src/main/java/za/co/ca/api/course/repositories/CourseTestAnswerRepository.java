package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.models.CourseTestAnswer;

import java.util.List;
import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestAnswerRepository extends JpaRepository<CourseTestAnswer, String> {
    List<CourseTestAnswer> findByCourseTestQuestionNo(String courseTestQuestionNo);
    Optional<CourseTestAnswer> findByCourseTestAnswerNo(String courseTestAnswerNo);
}
