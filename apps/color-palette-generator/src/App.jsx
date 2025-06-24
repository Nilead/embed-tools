import React, { useState, useRef, useEffect } from 'react';
import ColorThief from 'colorthief';
import { Card, CardContent } from '@embed-tools/components';
import { Button } from '@embed-tools/components';
import ColorSwatch from './components/ColorSwatch';
import PaletteSection from './components/PaletteSection';
import ContrastChecker from './components/ContrastChecker';
import UIPreview from './components/UIPreview';
import ExportModal from './components/ExportModal';
import Toast from './components/Toast';
import { 
  generateMonochromaticSet, 
  generateAnalogousSet, 
  generateComplementarySet 
} from './utils/colorUtils';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [imageSrc, setImageSrc] = useState(null);
  const [colorCount, setColorCount] = useState(5);
  const [palettes, setPalettes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [error, setError] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [toast, setToast] = useState({ message: '', isVisible: false, isError: false });
  
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    setIsEmbedded(window.self !== window.top);
  }, []);

  const showToast = (message, isError = false) => {
    setToast({ message, isVisible: true, isError });
    setTimeout(() => setToast({ message: '', isVisible: false, isError: false }), 3000);
  };

  const generateAllPalettes = () => {
    if (!imageRef.current) {
      console.error('Image ref not available');
      return;
    }

    const img = imageRef.current;
    
    // Check if image is properly loaded
    if (!img.complete || !img.naturalWidth || img.naturalWidth === 0) {
      console.log('Image not fully loaded yet, waiting...');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const colorThief = new ColorThief();
      const mainPalette = colorThief.getPalette(img, colorCount);
      
      if (!mainPalette || mainPalette.length === 0) {
        throw new Error('No colors could be extracted from the image');
      }
      
      const newPalettes = {
        dominant: mainPalette,
        monochromatic: mainPalette.slice(0, 3).map(baseRgb => generateMonochromaticSet(baseRgb)),
        analogous: generateAnalogousSet(mainPalette[0]),
        complementary: generateComplementarySet(mainPalette[0])
      };
      
      setPalettes(newPalettes);
      setLoading(false);
    } catch (e) {
      console.error('Error generating palettes:', e);
      setError('Could not extract palettes. The image might be corrupted, too complex, or from a different domain.');
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setSelectedFile(file);
    setFileName(file.name);
    setError(null);
    setPalettes(null);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageLoad = () => {
    // Add a small delay to ensure the image is fully processed
    setTimeout(() => {
      generateAllPalettes();
    }, 100);
  };

  const handleColorCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10);
    setColorCount(newCount);
    if (imageSrc && palettes) {
      generateAllPalettes();
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${type}!`);
    }).catch(() => {
      showToast('Failed to copy!', true);
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <header className="text-center mb-8">
          {!isEmbedded && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Advanced Color Palette Generator</h1>
              <p className="text-muted-foreground mt-2">
                Generate, test, and preview theme-based palettes from any image.
              </p>
            </>
          )}
        </header>

        <Card className="overflow-hidden">
          <CardContent className="p-8">
            {/* Controls Section */}
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="cursor-pointer w-full sm:w-auto"
              >
                Upload Image
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="items-center justify-center gap-2 text-muted-foreground hidden sm:flex">
                <label htmlFor="color-count" className="font-medium">Dominant Colors:</label>
                <input
                  type="range"
                  id="color-count"
                  min="2"
                  max="10"
                  value={colorCount}
                  onChange={handleColorCountChange}
                  className="align-middle"
                />
                <span className="ml-1 font-semibold text-primary w-6 text-center">
                  {colorCount}
                </span>
              </div>
              {palettes && (
                <Button
                  variant="outline"
                  onClick={() => setShowExportModal(true)}
                  className="cursor-pointer w-full sm:w-auto"
                >
                  Export Palettes
                </Button>
              )}
            </div>
            <p className="text-center text-sm text-muted-foreground mb-8 -mt-4">{fileName}</p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-center">{error}</p>
              </div>
            )}

            {/* Main Content Area */}
            {loading && (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-lg">Generating Palettes...</p>
              </div>
            )}

            {!loading && !imageSrc && (
              <div className="text-center py-16 px-6 border-2 border-dashed border-muted rounded-xl">
                <svg className="mx-auto h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 14m6-6l2-2m0 0l2 2m-2-2v6" />
                </svg>
                <h3 className="mt-2 text-lg font-medium">Your palettes will appear here</h3>
                <p className="mt-1 text-sm text-muted-foreground">Upload an image to get started.</p>
              </div>
            )}

            {!loading && imageSrc && palettes && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column: Image & Main Palette */}
                  <div className="space-y-6">
                    <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        ref={imageRef}
                        src={imageSrc}
                        alt="Image Preview"
                        className="max-w-full max-h-full object-contain"
                        crossOrigin="Anonymous"
                        onLoad={handleImageLoad}
                      />
                    </div>
                    <div>
                      <PaletteSection title="Dominant Colors" isGrid>
                        {palettes.dominant.map((rgb, index) => (
                          <ColorSwatch
                            key={index}
                            rgb={rgb}
                            onClick={(hex) => copyToClipboard(hex, 'HEX')}
                          />
                        ))}
                      </PaletteSection>
                    </div>
                  </div>

                  {/* Right Column: Generated Palettes */}
                  <div className="space-y-6">
                    <PaletteSection title="Gradient">
                      <div
                        className="h-24 w-full rounded-lg"
                        style={{
                          background: `linear-gradient(90deg, ${palettes.dominant.map(rgb => `rgb(${rgb.join(',')})`).join(', ')})`
                        }}
                      />
                    </PaletteSection>
                    
                    <PaletteSection title="Monochromatic Sets">
                      {palettes.monochromatic.map((set, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          {set.map((rgb, rgbIndex) => (
                            <ColorSwatch
                              key={rgbIndex}
                              rgb={rgb}
                              onClick={(hex) => copyToClipboard(hex, 'HEX')}
                            />
                          ))}
                        </div>
                      ))}
                    </PaletteSection>
                    
                    <PaletteSection title="Analogous">
                      <div className="flex gap-2">
                        {palettes.analogous.map((rgb, index) => (
                          <ColorSwatch
                            key={index}
                            rgb={rgb}
                            onClick={(hex) => copyToClipboard(hex, 'HEX')}
                          />
                        ))}
                      </div>
                    </PaletteSection>
                    
                    <PaletteSection title="Complementary">
                      <div className="flex gap-2">
                        {palettes.complementary.map((rgb, index) => (
                          <ColorSwatch
                            key={index}
                            rgb={rgb}
                            onClick={(hex) => copyToClipboard(hex, 'HEX')}
                          />
                        ))}
                      </div>
                    </PaletteSection>
                  </div>
                </div>
                
                {/* Analysis Sections */}
                <div className="space-y-8">
                  <ContrastChecker palette={palettes.dominant} />
                  <UIPreview palette={palettes.dominant} />
                </div>
              </div>
            )}

            {!loading && imageSrc && !palettes && !error && (
              <div className="w-full h-80 bg-muted rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  ref={imageRef}
                  src={imageSrc}
                  alt="Image Preview"
                  className="max-w-full max-h-full object-contain"
                  crossOrigin="Anonymous"
                  onLoad={handleImageLoad}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {!isEmbedded && (
          <footer className="text-center mt-12 text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Color Palette Generator</p>
            <p className="mt-1">Fully managed One-Stop Digital Marketing Platform</p>
            <p className="mt-2">
              Powered by{' '}
              <a
                href="https://nilead.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                Nilead
              </a>
            </p>
          </footer>
        )}

        {/* Export Modal */}
        <ExportModal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          palettes={palettes}
        />

        {/* Toast Notification */}
        <Toast
          message={toast.message}
          isVisible={toast.isVisible}
          isError={toast.isError}
        />
      </div>
    </div>
  );
};

export default App;