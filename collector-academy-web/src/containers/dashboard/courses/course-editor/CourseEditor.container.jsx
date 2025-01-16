import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckSquareOutlined, DeleteOutlined, FolderAddOutlined, FolderOutlined, LoadingOutlined, SaveOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';
import CoursesEdit from 'components/dashboard/courses/course-editor/CourseEditor.component';
import * as coursesActions from 'redux/actions/Courses.action';
import { Utils } from 'utils/Utils';
import { validateField } from './CourseEditor.helper';

function CourseEditorContainer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { courses, courseModules, courseDifficulties, selectedCourse, courseUpdateLoading } = useSelector((state) => state.courses);

  const [defaultCourse, setDefaultCourse] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isValidCourse, setIsValidCourse] = useState(null);
  const [canSave, setCanSave] = useState(false);

  const [courseModulesGroupData, setCourseModulesGroupData] = useState([]);

  const [courseDifficultiesMenuItems, setCourseDifficultiesMenuItems] = useState([]);

  useEffect(() => {
    dispatch(coursesActions.requestAllCourseDifficulties(accessToken));

    if (!Utils.isNull(selectedCourse)) {
      dispatch(coursesActions.requestAllCourseModules(accessToken, selectedCourse));
    }
  }, [dispatch, accessToken, selectedCourse]);

  useEffect(() => {
    const formatAddCourseModule = {
      title: 'Add Module',
      description: 'Add modules to the course to organize pages.',
      icon: <FolderAddOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.lighter,
      onClick: () => {}
    };

    const formatCourseModules = courseModules.map((courseModule) => ({
      title: courseModule.moduleTitle,
      description: courseModule.moduleDescription,
      icon: <FolderOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.lighter,
      onClick: () => {}
    }));

    setCourseModulesGroupData([formatAddCourseModule, ...formatCourseModules]);
  }, [courseModules, theme]);

  useEffect(() => {
    setCourseDifficultiesMenuItems(
      courseDifficulties.map((courseDifficulty) => ({
        value: courseDifficulty.courseDifficultyNo,
        label: courseDifficulty.courseDifficulty
      }))
    );
  }, [courseDifficulties]);

  useEffect(() => {
    console.log('courses', courses);
    console.log('selectedCourse', selectedCourse);

    if (!Utils.isNull(selectedCourse)) {
      const filteredCourse = courses.find((course) => course.courseNo === selectedCourse);

      console.log('filteredCourse', filteredCourse);

      if (!Utils.isNull(filteredCourse) || !Utils.isUndefined(filteredCourse)) {
        setDefaultCourse(filteredCourse);
        setCurrentCourse(filteredCourse);

        setIsValidCourse({
          courseTitle: 1,
          courseDescription: 1,
          courseDuration: 1,
          courseDifficultyNo: 1
        });
      }
    } else {
      setDefaultCourse([]);
      setCurrentCourse([]);

      setIsValidCourse({
        courseTitle: 0,
        courseDescription: 0,
        courseDuration: 0,
        courseDifficultyNo: 0
      });
    }
  }, [courses, selectedCourse]);

  useEffect(() => {
    setCanSave(Utils.checkIsValidStatus(isValidCourse));
  }, [isValidCourse]);

  const coursesActionListData = () => {
    const courseActionList = [];

    if (!Utils.isNull(selectedCourse)) {
      courseActionList.push({
        title: `Update Course${canSave ? '' : ' - No Valid Changes Made'}`,
        description: canSave ? 'Save changes made to Course' : 'Modify the Course to enable this button',
        icon: courseUpdateLoading ? <LoadingOutlined style={{ fontSize: '20px' }} /> : <SaveOutlined style={{ fontSize: '20px' }} />,
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.lighter,
        disabled: !canSave || courseUpdateLoading,
        onClick: handleOnUpdateCourseClick
      });
    } else {
      courseActionList.push({
        title: `Add Course${canSave ? '' : ' - No Valid Changes Made'}`,
        description: canSave ? 'Insert changes made to Course' : 'Complete the Course to enable this button',
        icon: courseUpdateLoading ? <LoadingOutlined style={{ fontSize: '20px' }} /> : <SaveOutlined style={{ fontSize: '20px' }} />,
        color: theme.palette.success.main,
        backgroundColor: theme.palette.success.lighter,
        disabled: !canSave || courseUpdateLoading,
        onClick: handleOnInserCourseClick
      });
    }

    courseActionList.push({
      title: 'Coming Soon - User Allocations',
      description: 'Allocate/DeAllocate Users from current Course ',
      icon: <CheckSquareOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.warning.main,
      backgroundColor: theme.palette.warning.lighter,
      disabled: true,
      onClick: () => {}
    });

    courseActionList.push({
      title: 'Delete Course',
      description: 'Delete current Course',
      icon: <DeleteOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.error.main,
      backgroundColor: theme.palette.error.lighter,
      disabled: true,
      onClick: () => {}
    });

    return courseActionList;
  };

  const handleOnCurrentCourseChange = (value, type) => {
    const formattedValue = type === 'courseDuration' ? Number(value) : value;

    setCurrentCourse({
      ...currentCourse,
      [type]: formattedValue
    });

    const hasChanged = defaultCourse?.[type] !== formattedValue;

    let isValid = 1;

    if (validateField(type, formattedValue)) {
      if (hasChanged) {
        isValid = 2;
      } else {
        isValid = 1;
      }
    } else {
      isValid = 0;
    }

    setIsValidCourse({
      ...isValidCourse,
      [type]: isValid
    });
  };

  const handleOnUpdateCourseClick = () => {
    dispatch(coursesActions.requestCourseUpdate(accessToken, currentCourse, currentCourse.courseNo));
  };

  const handleOnInserCourseClick = () => {
    dispatch(coursesActions.requestCourseInsert(accessToken, currentCourse));
  };

  return (
    <CoursesEdit
      theme={theme}
      coursesActionListData={coursesActionListData()}
      courseModulesGroupData={courseModulesGroupData}
      currentCourse={currentCourse}
      isValidCourse={isValidCourse}
      courseDifficultiesMenuItems={courseDifficultiesMenuItems}
      onCurrentCourseChange={handleOnCurrentCourseChange}
      onCoursesEditSumbit
    />
  );
}

CourseEditorContainer.propTypes = {};

export default CourseEditorContainer;
