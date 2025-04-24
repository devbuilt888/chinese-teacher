/**
 * Navigation Service - Handles navigation between pages
 */

/**
 * Navigate to a fractal editor page
 * @param fractalId The ID of the fractal to edit
 */
export function navigateToFractalEditor(fractalId: string): void {
  // Special cases to fix URLs
  if (fractalId === 'burning-ship-fractal') {
    fractalId = 'burning-ship';
  }
  
  // Fix for non-repeat square fractal
  if (fractalId === 'non-repeat-square') {
    fractalId = 'nonrepeat-square';
  }
  
  const editorUrl = `pages/${fractalId}.html`;
  window.open(editorUrl, '_blank');
}

/**
 * Get a URL for a fractal editor page
 * @param fractalId The ID of the fractal
 * @returns The URL to the fractal editor page
 */
export function getFractalEditorUrl(fractalId: string): string {
  // Special cases to fix URLs
  if (fractalId === 'burning-ship-fractal') {
    fractalId = 'burning-ship';
  }
  
  // Fix for non-repeat square fractal
  if (fractalId === 'non-repeat-square-fractal') {
    fractalId = 'nonrepeat-square';
  }
  
  return `pages/${fractalId}.html`;
} 