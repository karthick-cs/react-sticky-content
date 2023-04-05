const styles = {
   rootContainer: {
      textAlign: "justify",
      padding: 2,
      overflow: "hidden"
   },
   header: {
      marginTop: "16px",
      padding: "20px",
      height: 100,
      border: "1px solid #ddd",
      borderRadius: "10px"
   },
   sidebar: (width: any) => ({
      padding: 5,
      width: width,
      height: "100%",
      border: "1px solid #ddd",
      background: "white",
      borderRadius: 2,
      "&.sticky": {
         position: "fixed",
         top: "16px"
      }
   }),
   footer: {
      marginBottom: "16px",
      padding: "20px",
      height: 300,
      border: "1px solid #ddd",
      borderRadius: "10px"
   }
}


export default styles;