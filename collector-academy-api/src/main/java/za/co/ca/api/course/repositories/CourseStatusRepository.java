package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.enums.CourseStatusEnum;
import za.co.ca.api.course.models.CourseStatus;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseStatusRepository extends JpaRepository<CourseStatus, Integer> {
    Optional<CourseStatus> findByCourseStatus(CourseStatusEnum courseStatusEnum);
    Optional<CourseStatus> findByCourseStatusNo(Integer courseStatusNo);
}
