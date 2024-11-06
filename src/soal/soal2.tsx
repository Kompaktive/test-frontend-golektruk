export default function Soal2() {
  /**
   * ? Buat Real-Time Markdown Editor dengan Live Preview dengan mode gelap dan terang
   * ! hasilnya harus sesuai dengan video
   *
   */
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <p
        style={{
          position: "relative",
          top: "20vh",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Hari ini saya bahagia sekali
      </p>
      <iframe
        src="/soal2.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white",
        }}
      ></iframe>
    </div>
  );
}
