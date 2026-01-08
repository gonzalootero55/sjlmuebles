import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [form, setForm] = useState({
    ancho: "",
    alto: "",
    profundidad: "",
    color: "",
    comentario: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const telefono = "5493446573955"; // SIN +, SIN ESPACIOS

    const mensaje = `
🪑 *Pedido de Mueble Personalizado*
-----------------------------------
*Producto:* ${product.name}

*Medidas solicitadas:*
• Ancho: ${form.ancho || "No especificado"} cm
• Alto: ${form.alto || "No especificado"} cm
• Profundidad: ${form.profundidad || "No especificado"} cm

*Color / Terminación:* ${form.color || "No especificado"}

*Comentario adicional:*
${form.comentario || "Sin comentarios"}

📌 *Link del producto:*
${window.location.href}

-----------------------------------
¿Podrías confirmarme disponibilidad y tiempo de entrega?
`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail-container">
      <div className="image-section">
        <img src={product.imageUrl} alt={product.name} />
      </div>

      <div className="info-section">
        <h2>{product.name}</h2>

        <p className="price">Precio a consultar</p>

        <h3>Personaliza tu pedido</h3>

        <div className="form-grid">
          <label>
            Ancho (cm)
            <input name="ancho" value={form.ancho} onChange={handleChange} />
          </label>

          <label>
            Alto (cm)
            <input name="alto" value={form.alto} onChange={handleChange} />
          </label>

          <label>
            Profundidad (cm)
            <input
              name="profundidad"
              value={form.profundidad}
              onChange={handleChange}
            />
          </label>

          <label>
            Color / Terminación
            <input name="color" value={form.color} onChange={handleChange} />
          </label>

          <label className="textarea-label">
            Comentario adicional
            <textarea
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>

        <button className="whatsapp-btn" onClick={sendWhatsApp}>
          Enviar pedido por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
