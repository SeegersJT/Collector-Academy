export const formatConstantCourses = (course) => ({
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
