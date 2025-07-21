
const saveSubjects = (subjects) => {
  localStorage.setItem("subjects", JSON.stringify(subjects));
};

const getSubjects = () => {
  const data = localStorage.getItem("subjects");
  return data ? JSON.parse(data) : [];
};

export { saveSubjects, getSubjects };
