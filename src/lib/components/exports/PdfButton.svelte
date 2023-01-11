<Button color="danger" on:click={exportPdf}>
  <Icon name="filetype-pdf"/>
  PDF
</Button>

<script>
  import { Button, Icon } from 'sveltestrap';
  import { jsPDF } from 'jspdf'
  import * as html2canvas from 'html2canvas'

  async function exportPdf() {
    const source = document.getElementById('capture')
    html2canvas.default(source).then(capture => {
      const imgData = capture.toDataURL('image/png')
      const doc = new jsPDF()
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 10, 10, width * 0.9, height * 0.9);
      window.open(doc.output('bloburl'))
    })
  }
</script>