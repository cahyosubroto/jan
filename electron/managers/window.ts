import { BrowserWindow } from 'electron'

/**
 * Manages the current window instance.
 */
export class WindowManager {
  public static instance: WindowManager = new WindowManager()
  public currentWindow?: BrowserWindow

  constructor() {
    if (WindowManager.instance) {
      return WindowManager.instance
    }
  }

  /**
   * Creates a new window instance.
   * @param {Electron.BrowserWindowConstructorOptions} options - The options to create the window with.
   * @returns The created window instance.
   */
  createWindow(options?: Electron.BrowserWindowConstructorOptions | undefined) {
    this.currentWindow = new BrowserWindow({
      width: 1200,
      minWidth: 1200,
      height: 800,
      trafficLightPosition: {
        x: 10,
        y: 14,
      },
      titleBarStyle: 'hidden',
      ...options,
    })
    return this.currentWindow
  }
}
