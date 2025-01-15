import { GiftOutlined } from '@ant-design/icons';
import {
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Avatar from '_old/components/@extended/Avatar';
import DefaultBox from 'components/box/DefaultBox.component';
import CardGroup from 'components/card/group/CardGroup.component';
import CardList from 'components/card/list/CardList.component';
import MainCardComponent from 'components/card/MainCard.component';
import SelectLabel from 'components/selectLabel/SelectLabel.component';
import { Utils } from 'utils/Utils';

function CoursesEdit({
  theme,
  coursesActionListData,
  coursesModulesData,
  currentCourse,
  isValidCourse,
  courseDifficultiesMenuItems,
  onCurrentCourseChange,
  onCoursesEditSumbit
}) {
  return (
    <>
      <DefaultBox>
        {/* Row 1 */}
        <Grid item xs={12} lg={4}>
          <CardList title="Course Actions" data={coursesActionListData} scrollable height="400px" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 2 } }}>
            <Typography variant="h5">Course</Typography>
          </Stack>
          <form noValidate onSubmit={onCoursesEditSumbit}>
            <MainCardComponent sx={{ mt: 2 }} content={true}>
              <Grid container item lg={6}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidCourse?.courseTitle)}
                    id="course-edit-courseTitle"
                    label="Title"
                    variant="outlined"
                    value={currentCourse?.courseTitle}
                    onChange={(event) => onCurrentCourseChange(event.target.value, 'courseTitle')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidCourse?.courseDescription)}
                    id="course-edit-courseDescription"
                    label="Description"
                    variant="outlined"
                    value={currentCourse?.courseDescription}
                    onChange={(event) => onCurrentCourseChange(event.target.value, 'courseDescription')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  <TextField
                    sx={Utils.textFieldStyle(theme, isValidCourse?.courseDuration)}
                    id="course-edit-courseDuration"
                    label="Duration (min)"
                    variant="outlined"
                    type="number"
                    value={currentCourse?.courseDuration}
                    onChange={(event) => onCurrentCourseChange(event.target.value, 'courseDuration')}
                  />
                  <SelectLabel
                    title="Difficulty"
                    type={isValidCourse?.courseDifficultyNo}
                    menuItems={courseDifficultiesMenuItems}
                    selectedItems={[currentCourse?.courseDifficultyNo]}
                    onSelectedMenuItemsChange={(courseDifficultyNo) => onCurrentCourseChange(courseDifficultyNo, 'courseDifficultyNo')}
                  />
                </Stack>
              </Grid>
            </MainCardComponent>
          </form>
        </Grid>
        <Grid item xs={12} lg={12}>
          <CardGroup title="Modules" data={coursesModulesData} />
        </Grid>
      </DefaultBox>
    </>
  );
}

CoursesEdit.propTypes = {};

export default CoursesEdit;
