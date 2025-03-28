import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const PlanilhaNotas = () => {
  const [disciplinas, setDisciplinas] = useState({
    artes: '',
    biologia: '',
    edFisicaI: '',
    filosofia: '',
    fisica: '',
    geografia: '',
    historia: '',
    ingles: '',
    portugues: '',
    literaturaBrasileiraI: '',
    matematica: '',
    quimica: '',
    sociologia: '',
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
      ['Disciplina', 'Nota'], // Cabeçalho da planilha
      ['Artes', disciplinas.artes],
      ['Biologia', disciplinas.biologia],
      ['Educação Física I', disciplinas.edFisicaI],
      ['Filosofia', disciplinas.filosofia],
      ['Física', disciplinas.fisica],
      ['Geografia', disciplinas.geografia],
      ['História', disciplinas.historia],
      ['Língua Estrangeira Moderna - Inglês', disciplinas.ingles],
      ['Língua Portuguesa', disciplinas.portugues],
      ['Literatura Brasileira I', disciplinas.literaturaBrasileiraI],
      ['Matemática', disciplinas.matematica],
      ['Química', disciplinas.quimica],
      ['Sociologia', disciplinas.sociologia],
    ];

    const ws = XLSX.utils.aoa_to_sheet(dados); // Criação da planilha
    const wb = XLSX.utils.book_new(); // Criação do livro Excel
    XLSX.utils.book_append_sheet(wb, ws, 'Notas'); // Adicionando a planilha ao livro
    XLSX.writeFile(wb, 'Notas_Disciplinas.xlsx'); // Gerando o arquivo Excel
  };

  return (
    <div className="App">
      <h1>Notas das Disciplinas</h1>

      <div>
        <label>Artes:</label>
        <input
          type="number"
          name="artes"
          value={disciplinas.artes}
          onChange={handleChange}
          placeholder="Nota de Artes"
        />
      </div>

      <div>
        <label>Biologia:</label>
        <input
          type="number"
          name="biologia"
          value={disciplinas.biologia}
          onChange={handleChange}
          placeholder="Nota de Biologia"
        />
      </div>

      <div>
        <label>Educação Física I:</label>
        <input
          type="number"
          name="edFisicaI"
          value={disciplinas.edFisicaI}
          onChange={handleChange}
          placeholder="Nota de Ed. Física I"
        />
      </div>

      <div>
        <label>Filosofia:</label>
        <input
          type="number"
          name="filosofia"
          value={disciplinas.filosofia}
          onChange={handleChange}
          placeholder="Nota de Filosofia"
        />
      </div>

      <div>
        <label>Física:</label>
        <input
          type="number"
          name="fisica"
          value={disciplinas.fisica}
          onChange={handleChange}
          placeholder="Nota de Física"
        />
      </div>

      <div>
        <label>Geografia:</label>
        <input
          type="number"
          name="geografia"
          value={disciplinas.geografia}
          onChange={handleChange}
          placeholder="Nota de Geografia"
        />
      </div>

      <div>
        <label>História:</label>
        <input
          type="number"
          name="historia"
          value={disciplinas.historia}
          onChange={handleChange}
          placeholder="Nota de História"
        />
      </div>

      <div>
        <label>Língua Estrangeira Moderna - Inglês:</label>
        <input
          type="number"
          name="ingles"
          value={disciplinas.ingles}
          onChange={handleChange}
          placeholder="Nota de Inglês"
        />
      </div>

      <div>
        <label>Língua Portuguesa:</label>
        <input
          type="number"
          name="portugues"
          value={disciplinas.portugues}
          onChange={handleChange}
          placeholder="Nota de Língua Portuguesa"
        />
      </div>

      <div>
        <label>Literatura Brasileira I:</label>
        <input
          type="number"
          name="literaturaBrasileiraI"
          value={disciplinas.literaturaBrasileiraI}
          onChange={handleChange}
          placeholder="Nota de Literatura Brasileira I"
        />
      </div>

      <div>
        <label>Matemática:</label>
        <input
          type="number"
          name="matematica"
          value={disciplinas.matematica}
          onChange={handleChange}
          placeholder="Nota de Matemática"
        />
      </div>

      <div>
        <label>Química:</label>
        <input
          type="number"
          name="quimica"
          value={disciplinas.quimica}
          onChange={handleChange}
          placeholder="Nota de Química"
        />
      </div>

      <div>
        <label>Sociologia:</label>
        <input
          type="number"
          name="sociologia"
          value={disciplinas.sociologia}
          onChange={handleChange}
          placeholder="Nota de Sociologia"
        />
      </div>

      <button onClick={exportarParaExcel} style={{ marginTop: '20px' }}>
        Exportar para Excel
      </button>
    </div>
  );
};

export default PlanilhaNotas;
