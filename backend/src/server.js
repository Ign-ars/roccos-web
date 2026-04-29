const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://roccos-web.vercel.app",
    "https://roccosltda.cl",
    "https://www.roccosltda.cl",
  ],
  methods: ["GET", "POST"],
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend Rocco's Mantención Industrial funcionando correctamente",
  });
});

app.post("/api/cotizacion", async (req, res) => {
  try {
    const {
      nombre,
      empresa,
      telefono,
      correo,
      tipoSolicitud,
      urgencia,
      productoServicio,
      ubicacion,
      detalle,
      observaciones,
    } = req.body;

    if (!nombre || !telefono || !correo || !tipoSolicitud || !detalle) {
      return res.status(400).json({
        ok: false,
        message: "Faltan campos obligatorios.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #111827;">
        <h2 style="color: #dc2626;">Nueva solicitud de cotización</h2>

        <h3>Datos del solicitante</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || "No informado"}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Correo:</strong> ${correo}</p>

        <h3>Tipo de requerimiento</h3>
        <p><strong>Tipo:</strong> ${tipoSolicitud}</p>
        <p><strong>Urgencia:</strong> ${urgencia || "No informado"}</p>
        <p><strong>Producto o servicio:</strong> ${productoServicio || "No informado"}</p>
        <p><strong>Ubicación:</strong> ${ubicacion || "No informado"}</p>

        <h3>Detalle técnico</h3>
        <p>${detalle}</p>

        <h3>Observaciones</h3>
        <p>${observaciones || "Sin observaciones"}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Rocco's Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: correo,
      subject: `Nueva cotización web - ${tipoSolicitud}`,
      html,
    });

    return res.status(200).json({
      ok: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Error al enviar cotización:", error);

    return res.status(500).json({
      ok: false,
      message: "Error al enviar la solicitud.",
    });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor backend funcionando en http://localhost:${PORT}`);
});