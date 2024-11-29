package za.co.ca.api.course.payloads.requests;

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
public class CourseTestLogRequest {
    private String courseTestResultNo;
    private String courseTestQuestionNo;
    private String courseTestAnswerNo;
}
