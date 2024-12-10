const { SerialPort } = require('serialport');

const puerto = new SerialPort({
  path: 'COM7', 
  baudRate: 9600,
});

puerto.on('open', () => {
  console.log('Puerto serial abierto. Enviando comandos...');
  
  let encender = true;
  setInterval(() => {
    const comando = encender ? '1' : '0'; 
    puerto.write(comando, (err) => {
      if (err) {
        return console.error('Error al enviar comando:', err.message);
      }
      console.log(`Comando enviado: ${comando}`);
    });
    encender = !encender;  
  }, 3000);
});

puerto.on('data', (data) => {
  console.log('Respuesta del Arduino:', data.toString());
});

puerto.on('error', (err) => {
  console.error('Error del puerto serial:', err.message);
});