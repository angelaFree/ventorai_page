let ReactPixel: any;

const isBrowser: boolean = typeof window !== "undefined";

// Inicializa ReactPixel solo en el entorno del cliente
if (isBrowser) {
  import("react-facebook-pixel").then((reactPixelModule) => {
    ReactPixel = reactPixelModule.default;
  });
}

/**
 * Función para cargar ReactPixel y asegurar que esté inicializado.
 */
const loadReactPixel = async (): Promise<void> => {
  if (!ReactPixel && isBrowser) {
    const reactPixelModule = await import("react-facebook-pixel");
    ReactPixel = reactPixelModule.default;
  }
};

/**
 * Inicializa el Pixel de Facebook solo en el entorno del cliente.
 */
export const initializePixel = async (pixelId: string): Promise<void> => {
  if (isBrowser) {
    await loadReactPixel(); // Esperar hasta que ReactPixel esté listo
    if (ReactPixel) {
      ReactPixel.init(pixelId);
      ReactPixel.pageView();
    }
  }
};

/**
 * Registra un evento estándar o personalizado solo en el entorno del cliente.
 * @param eventName Nombre del evento (por ejemplo, "Purchase" o "ButtonClick").
 * @param params Parámetros opcionales asociados con el evento.
 */
export const trackEvent = async (eventName: string, params?: Record<string, any>): Promise<void> => {
  if (isBrowser) {
    await loadReactPixel(); // Esperar hasta que ReactPixel esté listo
    if (ReactPixel) {
      ReactPixel.track(eventName, params);
    }
  }
};
