package za.co.ca.api.course.payloads.responses;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author Hanno Seegers
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseResultResponse {
    private String courseResultNo;
    private String courseNo;
    private Integer employeeNo;
    private Integer courseStatusNo;
    private Integer courseResultStatusNo;
    private Integer courseAssignedBy;
    private Date courseAssignedDate;
    private Date courseStartedDate;
    private Date courseCompletedDate;
    private Date courseExpiryDate;
    private String courseBreakoutStep;
    private Boolean active;
}
