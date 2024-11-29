package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.enums.CourseResultStatusEnum;
import za.co.ca.api.course.models.CourseResultStatus;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseResultStatusRepository extends JpaRepository<CourseResultStatus, Integer> {
    Optional<CourseResultStatus> findByCourseResultStatusNo(Integer courseResultStatusNo);
    Optional<CourseResultStatus> findByCourseResultStatus(CourseResultStatusEnum courseResultStatusEnum);
}
