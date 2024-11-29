package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.enums.CourseTestLogStatusEnum;
import za.co.ca.api.course.models.CourseTestLogStatus;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestLogStatusRepository extends JpaRepository<CourseTestLogStatus, String> {
    Optional<CourseTestLogStatus> findByCourseTestLogStatus(CourseTestLogStatusEnum courseTestLogStatusEnum);
    Optional<CourseTestLogStatus> findByCourseTestLogStatusNo(Integer courseTestLogStatusNo);
}
