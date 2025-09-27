let puerto;
let writer;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnConectar").addEventListener("click", conectarArduino);

    // Movimiento
    document.getElementById("btnUp").addEventListener("click", () => enviar("MOVE_UP"));
    document.getElementById("btnDown").addEventListener("click", () => enviar("MOVE_DOWN"));
    document.getElementById("btnLeft").addEventListener("click", () => enviar("MOVE_LEFT"));
    document.getElementById("btnRight").addEventListener("click", () => enviar("MOVE_RIGHT"));

    // Disparo
    document.getElementById("btnFire").addEventListener("click", () => enviar("FIRE"));
});

async function conectarArduino() {
    try {
        puerto = await navigator.serial.requestPort();
        await puerto.open({ baudRate: 9600 });

        const encoder = new TextEncoderStream();
        encoder.readable.pipeTo(puerto.writable);
        writer = encoder.writable.getWriter();

        alert("✅ Conectado al Arduino");
    } catch (err) {
        alert("❌ Error al conectar: " + err);
    }
}

async function enviar(comando) {
    if (!writer) {
        alert("Primero conectate al Arduino.");
        return;
    }

    await writer.write(comando + "\n");
    console.log("Enviado:", comando);
}
