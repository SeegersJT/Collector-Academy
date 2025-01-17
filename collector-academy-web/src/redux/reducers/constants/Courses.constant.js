export const formatConstantCourse = (course) => ({
  courseNo: course.courseNo || null,
  courseTitle: course.courseTitle || null,
  courseDescription: course.courseDescription || null,
  courseDuration: course.courseDuration || null,
  courseDifficultyNo: course.courseDifficultyNo || null,
  courseDifficulty: course.courseDifficulty || null,
  courseDate: course.courseDate || null,
  active: course.active || null
});

export const formatConstantCourseDifficulties = (courseDifficulty) => ({
  courseDifficultyNo: courseDifficulty.courseDifficultyNo || null,
  courseDifficulty: courseDifficulty.courseDifficulty || null
});

export const formatConstantCourseModule = (courseModule) => ({
  courseModuleNo: courseModule.courseModuleNo || null,
  courseNo: courseModule.courseNo || null,
  moduleTitle: courseModule.moduleTitle || null,
  moduleDescription: courseModule.moduleDescription || null,
  moduleIndex: courseModule.moduleIndex,
  active: courseModule.active || null
});

export const formatConstantCoursePage = (coursePage) => ({
  coursePageNo: coursePage.coursePageNo || null,
  courseModuleNo: coursePage.courseModuleNo || null,
  pageTitle: coursePage.pageTitle || null,
  pageDescription: coursePage.pageDescription || null,
  pageIndex: coursePage.pageIndex,
  active: coursePage.active || null
});
