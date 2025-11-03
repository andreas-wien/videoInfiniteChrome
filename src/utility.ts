/**
 * Waits for a DOM element matching the given selector to appear.
 * @param selector CSS selector for the target element.
 * @returns Promise that resolves to the matching Element.
 */
export function waitForElement<T extends Element = Element>(
  selector: string
): Promise<T> {
  return new Promise<T>((resolve) => {
    const el = document.querySelector<T>(selector);
    if (el) {
      resolve(el);
      return;
    }
    const observer = new MutationObserver(() => {
      const el = document.querySelector<T>(selector);
      if (el) {
        resolve(el);
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
