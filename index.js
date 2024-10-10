npm install pdfjs-dist

// Importa a biblioteca pdfjs-dist
const pdfjsLib = require('pdfjs-dist');

// Função para carregar o PDF e sortear uma página
async function sortearPagina(pdfUrl) {
  // Carrega o documento PDF
  const loadingTask = pdfjsLib.getDocument(pdfUrl);
  const pdf = await loadingTask.promise;

  // Gera um número aleatório entre 1 e o número total de páginas
  const totalPaginas = pdf.numPages;
  const paginaAleatoria = Math.floor(Math.random() * totalPaginas) + 1;

  // Carrega a página sorteada
  const pagina = await pdf.getPage(paginaAleatoria);

  console.log(`Página sorteada: ${paginaAleatoria}`);
  return pagina;
}

// URL do arquivo PDF
const pdfUrl = 'caminho/para/seu/arquivo.pdf';

// Chama a função para sortear uma página
sortearPagina(pdfUrl).then(pagina => {
  // Aqui você pode fazer algo com a página sorteada
  console.log(pagina);
}).catch(error => {
  console.error('Erro ao carregar o PDF:', error);
});
