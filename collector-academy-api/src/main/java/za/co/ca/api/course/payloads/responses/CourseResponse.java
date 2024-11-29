package za.co.ca.api.course.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author Hanno Seegers
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResponse {
    private String courseNo;
    private String courseTitle;
    private String courseDescription;
    private Integer courseDuration;
    private Integer courseDifficultyNo;
    private Boolean active;
}
