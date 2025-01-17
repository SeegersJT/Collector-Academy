import { Grid, Stack, TextField, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardList from 'components/card/list/CardList.component';
import MainCardComponent from 'components/card/MainCard.component';
import { Utils } from 'utils/Utils';

function PageEditor({ theme, currentCourseModule, currentCoursePage, isValidCoursePage, pageActionListData, onCurrentCoursePageChange }) {
  return (
    <>
      <DefaultBox>
        {/* Row 1 */}
        <Grid item xs={12} lg={4}>
          <CardList title="Page Actions" data={pageActionListData} scrollable height="400px" />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 2 } }}>
            <Typography variant="h5">Page</Typography>
          </Stack>
          <MainCardComponent sx={{ mt: 2 }} content={true}>
            <Grid container item lg={6}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                <TextField
                  sx={Utils.textFieldStyle(theme, 1)}
                  id="page-edit-pageTitle"
                  label="Page Title"
                  variant="outlined"
                  disabled
                  value={currentCourseModule?.moduleTitle}
                />
              </Stack>
            </Grid>
            <Grid container item lg={6}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                <TextField
                  sx={Utils.textFieldStyle(theme, isValidCoursePage?.pageTitle)}
                  id="page-edit-pageTitle"
                  label="Title"
                  variant="outlined"
                  value={currentCoursePage?.pageTitle}
                  onChange={(event) => onCurrentCoursePageChange(event.target.value, 'pageTitle')}
                />
              </Stack>
            </Grid>
            <Grid item lg={12}>
              <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                <TextField
                  sx={Utils.textFieldStyle(theme, isValidCoursePage?.pageDescription)}
                  id="page-edit-pageDescription"
                  label="Description"
                  variant="outlined"
                  value={currentCoursePage?.pageDescription}
                  onChange={(event) => onCurrentCoursePageChange(event.target.value, 'pageDescription')}
                />
              </Stack>
            </Grid>
          </MainCardComponent>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} lg={12}>
          {/* <CardGroup title="Pages" data={coursePagesGroupData} /> */}
        </Grid>
      </DefaultBox>
    </>
  );
}

PageEditor.propTypes = {};

export default PageEditor;
