import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckSquareOutlined, DeleteOutlined, LoadingOutlined, RollbackOutlined, SaveOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';
import CoursesEdit from 'components/dashboard/courses/edit/CoursesEdit.component';
import * as coursesActions from 'redux/actions/Courses.action';
import { Utils } from 'utils/Utils';
import { validateField } from './CoursesEdit.helper';

function CoursesEditContainer() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const { courses, courseDifficulties, selectedCourse, courseUpdateLoading } = useSelector((state) => state.courses);

  const [defaultCourse, setDefaultCourse] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isValidCourse, setIsValidCourse] = useState(null);
  const [canSave, setCanSave] = useState(false);

  const [courseDifficultiesMenuItems, setCourseDifficultiesMenuItems] = useState([]);

  useEffect(() => {
    dispatch(coursesActions.requestAllCourseDifficulties(accessToken));
  }, [dispatch, accessToken]);

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

    const filteredCourse = courses.find((course) => course.courseNo === selectedCourse);

    console.log('filteredCourse', filteredCourse);

    if (!Utils.isNull(filteredCourse) || !Utils.isUndefined(filteredCourse)) {
      setDefaultCourse(filteredCourse);
      setCurrentCourse(filteredCourse);

      setIsValidCourse({
        courseNo: 1,
        courseTitle: 1,
        courseDescription: 1,
        courseDuration: 1,
        courseDifficultyNo: 1,
        courseDifficulty: 1,
        courseDate: 1,
        active: 1
      });
    }
  }, [courses, selectedCourse]);

  useEffect(() => {
    setCanSave(Utils.checkIsValidStatus(isValidCourse));
  }, [isValidCourse]);

  const coursesActionListData = () => {
    const courseActionList = [];

    courseActionList.push({
      title: `Update Course${canSave ? '' : ' - No Valid Changes Made'}`,
      description: canSave ? 'Save changes made to Course' : 'Modify the Course to enable this button',
      icon: courseUpdateLoading ? <LoadingOutlined style={{ fontSize: '20px' }} /> : <SaveOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.lighter,
      disabled: !canSave || courseUpdateLoading,
      onClick: handleOnUpdateCourseClick
    });

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

  const coursesModulesData = () => {
    const courseActionList = [];

    courseActionList.push({
      title: `Update Course${canSave ? '' : ' - No Valid Changes Made'}`,
      description: canSave ? 'Save changes made to Course' : 'Modify the Course to enable this button',
      icon: courseUpdateLoading ? <LoadingOutlined style={{ fontSize: '20px' }} /> : <SaveOutlined style={{ fontSize: '20px' }} />,
      color: theme.palette.success.main,
      backgroundColor: theme.palette.success.lighter,
      disabled: !canSave || courseUpdateLoading,
      onClick: handleOnUpdateCourseClick
    });

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

  return (
    <CoursesEdit
      theme={theme}
      coursesActionListData={coursesActionListData()}
      coursesModulesData={coursesModulesData()}
      currentCourse={currentCourse}
      isValidCourse={isValidCourse}
      courseDifficultiesMenuItems={courseDifficultiesMenuItems}
      onCurrentCourseChange={handleOnCurrentCourseChange}
      onCoursesEditSumbit
    />
  );
}

CoursesEditContainer.propTypes = {};

export default CoursesEditContainer;
