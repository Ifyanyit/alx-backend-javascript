export default function getListStudentIds(lOfobjects) {
  if (Array.isArray(lOfobjects)) {
    return lOfobjects.map((obj) => obj.id);
  }

  return [];
}
