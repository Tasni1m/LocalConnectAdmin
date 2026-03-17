import { useParams } from "react-router-dom";

function StudentDetailPage(props) {
  const { id } = useParams(); // récupère le "1" de /students/1

  const student = props.students.find(function (s) {
    return s.id === Number(id); // Number() car l'URL retourne une string
  });

  if (!student) return <p>Étudiant introuvable</p>;

  return (
    <div>
      <h1>{student.name}</h1>
      <p>{student.email}</p>
    </div>
  );
}

export default StudentDetailPage;