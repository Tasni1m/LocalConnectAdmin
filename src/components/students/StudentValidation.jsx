import React from 'react';
import { Check, X, Eye } from 'lucide-react';

const studentsData = [
  { id: 1, name: "Lucas Bernard", school: "Université Lyon 1", date: "22/03/2024", status: "En attente", image: "https://via.placeholder.com/300x200?text=Carte+Etudiant" },
  { id: 2, name: "Emma Petit", school: "Insa Lyon", date: "21/03/2024", status: "En attente", image: "https://via.placeholder.com/300x200?text=Carte+Etudiant" },
];

const StudentValidation = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b text-gray-500 uppercase text-xs">
          <tr>
            <th className="px-6 py-4">Étudiant</th>
            <th className="px-6 py-4">Université</th>
            <th className="px-6 py-4">Date de demande</th>
            <th className="px-6 py-4">Statut</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {studentsData.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
              <td className="px-6 py-4 text-gray-600">{student.school}</td>
              <td className="px-6 py-4 text-gray-500">{student.date}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                  {student.status}
                </span>
              </td>
              <td className="px-6 py-4 text-right flex justify-end gap-2">
                <button title="Voir la carte" className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Eye size={18} />
                </button>
                <button title="Valider" className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                  <Check size={18} />
                </button>
                <button title="Refuser" className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <X size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentValidation;