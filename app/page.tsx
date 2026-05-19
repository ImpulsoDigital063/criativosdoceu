export const dynamic = "force-static";

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "#F5EFE6",
        color: "#2A2520",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#9A8F80",
          marginBottom: "32px",
        }}
      >
        Criativos do Céu
      </p>

      <h1
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(40px, 7vw, 72px)",
          lineHeight: 1.1,
          color: "#1F1B16",
          margin: 0,
          maxWidth: "640px",
        }}
      >
        Em manutenção.
      </h1>

      <p
        style={{
          marginTop: "28px",
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#5C5247",
          maxWidth: "420px",
        }}
      >
        Voltamos em breve.
      </p>
    </main>
  );
}
