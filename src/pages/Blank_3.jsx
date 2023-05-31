import React from 'react'
import PDF from '../components/pdf/Pdf'
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const Blank_3 = ({companyDetails}) => {
    return (
        <div>
            <div className="table__container container text-center">
            <PDFViewer style={{ width: "100%", height: "90vh" }}>   
                <PDF data = {companyDetails}/>
            </PDFViewer>

            <PDFDownloadLink
        document={ <PDF data = {companyDetails}/>}
        fileName="empresa.pdf"
      > 
      <button type="button" class="btn btn-primary">Descargar en PDF</button>
        
      </PDFDownloadLink>
            </div>
        </div>
    )
}

export default Blank_3
