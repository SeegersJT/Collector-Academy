import { useTheme } from '@mui/material/styles';
import ModuleEditor from 'components/dashboard/courses/module-editor/ModuleEditor.component';

function ModuleEditorContainer() {
  const theme = useTheme();

  return (
    <ModuleEditor
    //   theme={theme}
    //   coursesActionListData={coursesActionListData()}
    //   courseModulesGroupData={courseModulesGroupData}
    //   currentCourse={currentCourse}
    //   isValidCourse={isValidCourse}
    //   courseDifficultiesMenuItems={courseDifficultiesMenuItems}
    //   onCurrentCourseChange={handleOnCurrentCourseChange}
    //   onCoursesEditSumbit
    />
  );
}

ModuleEditorContainer.propTypes = {};

export default ModuleEditorContainer;
