import { Grid, Stack, TextField, Typography } from '@mui/material';
import DefaultBox from 'components/box/DefaultBox.component';
import CardGroup from 'components/card/group/CardGroup.component';
import CardList from 'components/card/list/CardList.component';
import MainCardComponent from 'components/card/MainCard.component';
import { Utils } from 'utils/Utils';

function ModuleEditor({
  theme,
  currentModule,
  isValidModule,
  moduleActionListData,
  modulePagesGroupData,
  onModuleEditSumbit,
  onCurrentModuleChange
}) {
  return (
    <>
      <DefaultBox>
        {/* Row 1 */}
        <Grid item xs={12} lg={4}>
          {/* <CardList title="Module Actions" data={moduleActionListData} scrollable height="400px" /> */}
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 2 } }}>
            <Typography variant="h5">Module</Typography>
          </Stack>
          <form noValidate onSubmit={onModuleEditSumbit}>
            <MainCardComponent sx={{ mt: 2 }} content={true}>
              <Grid container item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2, mr: 1 }}>
                  <TextField
                    id="module-edit-courseTitle"
                    label="Course Title"
                    variant="outlined"
                    disabled
                    value={currentModule?.courseTitle}
                    onChange={(event) => onCurrentModuleChange(event.target.value, 'courseTitle')}
                  />
                  <TextField
                    // sx={Utils.textFieldStyle(theme, isValidModule?.moduleTitle)}
                    id="module-edit-moduleTitle"
                    label="Title"
                    variant="outlined"
                    value={currentModule?.moduleTitle}
                    onChange={(event) => onCurrentModuleChange(event.target.value, 'moduleTitle')}
                  />
                </Stack>
              </Grid>
              <Grid item lg={12}>
                <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 2 }}>
                  {/* <TextField
                    sx={Utils.textFieldStyle(theme, isValidModule?.moduleDescription)}
                    id="module-edit-moduleDescription"
                    label="Description"
                    variant="outlined"
                    value={currentModule?.moduleDescription}
                    onChange={(event) => onCurrentModuleChange(event.target.value, 'moduleDescription')}
                  /> */}
                </Stack>
              </Grid>
            </MainCardComponent>
          </form>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} lg={12}>
          {/* <CardGroup title="Pages" data={modulePagesGroupData} /> */}
        </Grid>
      </DefaultBox>
    </>
  );
}

ModuleEditor.propTypes = {};

export default ModuleEditor;
