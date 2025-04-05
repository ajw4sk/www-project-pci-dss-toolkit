export const exportToCSV = async () => {
    try {
      const response = await fetch("/api/telemetry"); // Adjust your backend API route if needed
      const data = await response.json();
  
      if (!data || data.length === 0) {
        alert("No data to export.");
        return;
      }
  
      const headers = Object.keys(data[0]).join(",");
      const rows = data.map((entry: any) =>
        Object.values(entry).map((v: any) => `"${v}"`).join(",")
      );
      const csvContent = [headers, ...rows].join("\n");
  
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "pci-dss-compliance-report.csv";
      link.click();
    } catch (error) {
      console.error("Export error:", error);
      alert("Failed to export report.");
    }
  };
  