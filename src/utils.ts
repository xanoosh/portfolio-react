export const downloadPDF = async (filename: string, filePath: string) => {
  const response = await fetch(filePath);
  const blob = await response.blob();
  const fileURL = window.URL.createObjectURL(blob);
  const pdfLink = document.createElement('a');
  pdfLink.href = fileURL;
  pdfLink.download = filename;
  pdfLink.click();
};
