package za.co.ca.api.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import za.co.ca.api.course.enums.CourseDifficultyEnum;
import za.co.ca.api.course.models.CourseDifficulty;

import java.util.Optional;

/**
 * @author Hanno Seegers
 */
public interface CourseDifficultyRepository extends JpaRepository<CourseDifficulty, Integer> {
    Optional<CourseDifficulty> findByCourseDifficulty(CourseDifficultyEnum CourseDifficultyEnum);
    Optional<CourseDifficulty> findByCourseDifficultyNo(Integer CourseDifficultyNo);
}
