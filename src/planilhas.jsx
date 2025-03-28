import React, { useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "./planilhas.css/"

const PlanilhaNotas = () => {
  const [disciplinas, setDisciplinas] = useState({
    artes: "",
    biologia: "",
    edFisicaI: "",
    filosofia: "",
    fisica: "",
    geografia: "",
    historia: "",
    ingles: "",
    portugues: "",
    literaturaBrasileiraI: "",
    matematica: "",
    quimica: "",
    sociologia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisciplinas({
      ...disciplinas,
      [name]: value,
    });
  };

  const exportarParaExcel = () => {
    const dados = [
      ["Disciplina", "Nota"], // Cabeçalho da planilha
      ["Artes", disciplinas.artes],
      ["Biologia", disciplinas.biologia],
      ["Educação Física I", disciplinas.edFisicaI],
      ["Filosofia", disciplinas.filosofia],
      ["Física", disciplinas.fisica],
      ["Geografia", disciplinas.geografia],
      ["História", disciplinas.historia],
      ["Língua Estrangeira Moderna - Inglês", disciplinas.ingles],
      ["Língua Portuguesa", disciplinas.portugues],
      ["Literatura Brasileira I", disciplinas.literaturaBrasileiraI],
      ["Matemática", disciplinas.matematica],
      ["Química", disciplinas.quimica],
      ["Sociologia", disciplinas.sociologia],
    ];

    const ws = XLSX.utils.aoa_to_sheet(dados);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Notas");
    XLSX.writeFile(wb, "Notas_Disciplinas.xlsx");
  };

  const exportarParaPDF = () => {
    const doc = new jsPDF();
    doc.text("Notas das Disciplinas", 10, 10);

    const dados = [
      ["Disciplina", "Nota"],
      ["Artes", disciplinas.artes],
      ["Biologia", disciplinas.biologia],
      ["Educação Física I", disciplinas.edFisicaI],
      ["Filosofia", disciplinas.filosofia],
      ["Física", disciplinas.fisica],
      ["Geografia", disciplinas.geografia],
      ["História", disciplinas.historia],
      ["Língua Estrangeira Moderna - Inglês", disciplinas.ingles],
      ["Língua Portuguesa", disciplinas.portugues],
      ["Literatura Brasileira I", disciplinas.literaturaBrasileiraI],
      ["Matemática", disciplinas.matematica],
      ["Química", disciplinas.quimica],
      ["Sociologia", disciplinas.sociologia],
    ];

    let linhaInicial = 20;
    dados.forEach(([disciplina, nota]) => {
      doc.text(`${disciplina}: ${nota}`, 10, linhaInicial);
      linhaInicial += 10;
    });

    doc.save("Notas_Disciplinas.pdf");
  };

  return (
    <div className="App">
      <h1>Notas das Disciplinas</h1>
      {Object.keys(disciplinas).map((disciplina) => (
        <div key={disciplina}>
          <label>{disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}:</label>
          <input
            type="number"
            name={disciplina}
            value={disciplinas[disciplina]}
            onChange={handleChange}
            placeholder={`Nota de ${disciplina}`}
          />
        </div>
      ))}

      <button onClick={exportarParaExcel} style={{ marginTop: "20px" }}>
        Exportar para Excel
      </button>
      <button onClick={exportarParaPDF} style={{ marginTop: "20px" }}>
        Exportar para PDF
      </button>
    </div>
  );
};

export default PlanilhaNotas;
