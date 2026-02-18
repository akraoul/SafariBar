import React, { useState, useEffect } from 'react';

const QRCode = () => {
  const [qrGenerated, setQrGenerated] = useState(false);
  const [qrImage, setQrImage] = useState('');

  useEffect(() => {
    // Générer le QR code avec l'API QR Server
    const generateQR = async () => {
      try {
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://safari-bar.vercel.app/&format=png&color=121212&bgcolor=FFFFFF`;
        setQrImage(qrUrl);
        setQrGenerated(true);
      } catch (error) {
        console.error('Erreur génération QR:', error);
      }
    };

    generateQR();
  }, []);

  const downloadQR = () => {
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'safari-lounge-bar-qrcode.png';
    link.target = '_blank';
    link.click();
  };

  const copyLink = () => {
    navigator.clipboard.writeText('https://safari-bar.vercel.app/');
    alert('Lien copié dans le presse-papiers !');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-gray-900 rounded-lg p-4 shadow-2xl border border-neon-pink max-w-xs">
      <div className="text-center">
        <h4 className="text-neon-cyan font-bebas text-lg mb-3 neon-text">QR Code</h4>
        
        {qrGenerated ? (
          <div className="space-y-3">
            <img 
              src={qrImage} 
              alt="QR Code Safari Lounge Bar" 
              className="w-48 h-48 mx-auto bg-white rounded-lg p-2 shadow-lg"
            />
            
            <div className="space-y-2">
              <button
                onClick={downloadQR}
                className="w-full bg-gradient-to-r from-neon-pink to-neon-cyan text-white px-4 py-2 rounded-lg font-rajdhani text-sm hover:shadow-neon-pink transition-all duration-300"
              >
                📥 Télécharger
              </button>
              
              <button
                onClick={copyLink}
                className="w-full bg-gray-800 text-gray-300 px-4 py-2 rounded-lg font-rajdhani text-sm hover:bg-gray-700 transition-all duration-300"
              >
                📋 Copier le lien
              </button>
            </div>
          </div>
        ) : (
          <div className="text-gray-400 font-rajdhani text-sm">
            Génération du QR code...
          </div>
        )}
        
        <div className="mt-3 pt-3 border-t border-gray-700">
          <p className="text-xs text-gray-500 font-rajdhani">
            Scannez pour accéder au menu
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
