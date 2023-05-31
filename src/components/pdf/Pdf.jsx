import React from 'react'
import './pdf.scss'
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const Row  = ({data}) => {
    
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ color: "#3388af", fontSize: "42px" }}>
            {"Reporte de "+data.name}
          </Text>
          <Image
            src="https://picsum.photos/600/400"
            alt="random image"
            style={{ maxWidth: "600px", maxHeight: "400" }}
          />
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
            }}
          >
            {"foto de"+data.name}
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "22px", fontSize: "14px"}}>
            {data.sec}
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "22px", fontSize: "18px" }}>
            {data.type}
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "22px", fontSize: "18px" }}>
            {"Riesgo: "+data.risk}
          </Text>
          <Text style={{ textAlign: "justify", marginTop: "18px", fontSize: "14px" }}>
            {data.description}
          </Text>
        </View>
      </Page>
    </Document>
  );
   
}

export default Row
