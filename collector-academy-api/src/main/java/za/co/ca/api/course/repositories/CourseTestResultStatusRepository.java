package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.enums.CourseTestResultStatusEnum;
import za.co.ca.api.course.models.CourseTestResultStatus;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseTestResultStatusRepository extends JpaRepository<CourseTestResultStatus, Integer> {
    Optional<CourseTestResultStatus> findByCourseTestResultStatus(CourseTestResultStatusEnum courseTestResultStatusEnum);
    Optional<CourseTestResultStatus> findByCourseTestResultStatusNo(Integer courseTestResultStatusNo);
}
