// ====== 1) CONFIGURA AQUÍ TUS DATOS ======
window.C = {
  SUPABASE_URL: "https://tdooiwdjgfdpmbwbfixh.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkb29pd2RqZ2ZkcG1id2JmaXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMjk2NDksImV4cCI6MjEwNjcwNTY0OX0.X-W1bZB2PMTLueFX87Sk9FmgYN4MCTC62eaJJisrEyY",
  CLOUDINARY_CLOUD_NAME: "dvusdsbv1",
  CLOUDINARY_UPLOAD_PRESET: "manolo",
  WHATSAPP_NUMBER: "5618889768", // código de país + número, sin + ni espacios
  SITE_URL: "https://visionary-alpaca-1527d3.netlify.app/", // enlace real que se comparte
  STORE_NAME: "Mi Catálogo",
  STORE_TAGLINE: "Escríbenos por WhatsApp y te apartamos tu producto.",
  CURRENCY: "MXN"
};
// ====== Utilidades compartidas ======
window.$ = s => document.querySelector(s);
window.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
window.cimg = (u, w = 600) => u.includes("/upload/") ? u.replace("/upload/", `/upload/f_auto,q_auto,w_${w}/`) : u;
window.money = n => new Intl.NumberFormat("es-MX", {style:"currency", currency:C.CURRENCY}).format(n || 0);
window.sb = supabase.createClient(C.SUPABASE_URL, C.SUPABASE_ANON_KEY, { auth: { persistSession: false, autoRefreshToken: false } });