// Type definitions for Nightmare 2.10.0
// Project: https://github.com/segmentio/nightmare
// Definitions by: JarvisPrestidge <https://github.com/JarvisPrestidge>

export = Nightmare;

declare class Nightmare {
    constructor(options?: Nightmare.ConstructorOptions);

    // Info
    static namespaces: string[];
    static version: string;
    engineVersions(): Nightmare.EngineVersions;

    // Settings
    authentication(user: string, password: string): Nightmare;
    useragent(useragent: string): Nightmare;
    viewport(width: number, height: number): Nightmare;
    zoom(zoomFactor: number): Nightmare;

    // -- Interact --
    // Also returns a metadata object?
    goto(url: string, headers?: Nightmare.Headers): Nightmare;
    back(): Nightmare;
    forward(): Nightmare;
    refresh(): Nightmare;
    click(selector: string): Nightmare;
    mousedown(selector: string): Nightmare;
    mouseover(selector: string): Nightmare;
    mouseup(selector: string): Nightmare;
    // Empty values for text will clear the input box
    type(selector: string, text?: string): Nightmare;
    // Faster than type() but doesn't emit keyboard events
    insert(selector: string, text?: string): Nightmare;
    check(selector: string): Nightmare;
    uncheck(selector: string): Nightmare;
    select(selector: string, option: string): Nightmare;
    scrollTo(top: number, left: number): Nightmare;
    inject(type: string, file: string): Nightmare;

    // Evaluate overloads
    evaluate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare;
    evaluate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare;
    evaluate<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare;
    evaluate<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare;
    evaluate<R>(fn: () => R, cb: (result: R) => void): Nightmare;
    evaluate(fn: () => void): Nightmare;

    wait(): Nightmare;
    wait(ms: number): Nightmare;
    wait(selector: string): Nightmare;
    wait(fn: () => any, value: any, delay?: number): Nightmare;
    header(headers: Nightmare.Headers): Nightmare;

    // -- Extract --
    exists(selector: string, cb: (result: boolean) => void): Nightmare;
    visible(selector: string, cb: (result: boolean) => void): Nightmare;

    // On different web content events
    on(event: string, cb: () => void): Nightmare;
    on(event: 'did-finish-load', cb: () => void): Nightmare;
    on(event: 'did-fail-load', cb: (event: Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean) => void): Nightmare;
    on(event: 'did-frame-finish-load', cb: (event: Event, isMainFrame: boolean) => void): Nightmare;
    on(event: 'did-start-loading', cb: () => void): Nightmare;
    on(event: 'did-stop-loading', cb: () => void): Nightmare;
    on(event: 'did-get-response-details', cb: (event: Event, status: boolean, newURL: string, originalURL: string, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers, resourceType: string) => void): Nightmare;
    on(event: 'did-get-redirect-request', cb: (event: Event, oldURL: string, newURL: string, isMainFrame: boolean, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers) => void): Nightmare;
    on(event: 'dom-ready', cb: (event: Event) => void): Nightmare;
    on(event: 'page-favicon-updated', cb: (event: Event, favicons: string[]) => void): Nightmare;
    on(event: 'new-window', cb: (event: Event, url: string, frameName: string, disposition: Nightmare.NewWindowDisposition, options: Nightmare.BrowserWindowOptions) => void): Nightmare;
    on(event: 'will-navigate', cb: (event: Event, url: string) => void): Nightmare;
    on(event: 'did-navigate', cb: (event: Event, url: string) => void): Nightmare;
    on(event: 'did-navigate-in-page', cb: (event: Event, url: string, isMainFrame: boolean) => void): Nightmare;
    on(event: 'crashed', cb: (event: Event, killed: boolean) => void): Nightmare;
    on(event: 'plugin-crashed', cb: (event: Event, name: string, version: string) => void): Nightmare;
    on(event: 'destroyed', cb: () => void): Nightmare;
    on(event: 'devtools-opened', cb: () => void): Nightmare;
    on(event: 'devtools-closed', cb: () => void): Nightmare;
    on(event: 'devtools-focused', cb: () => void): Nightmare;
    on(event: 'certificate-error', cb: (event: Event, url: string, error: string, cert: Nightmare.Certificate, cb: (trust: boolean) => void) => void): Nightmare;
    on(event: 'select-client-certificate', cb: (event: Event, url: string, certList: Nightmare.Certificate[], cb: (certificate: Nightmare.Certificate) => void) => void): Nightmare;
    on(event: 'login', cb: (event: Event, request: Nightmare.LoginRequest, authInfo: Nightmare.LoginAuthInfo, cb: (username: string, password: string) => void) => void): Nightmare;
    on(event: 'found-in-page', cb: (event: Event, result: Nightmare.FoundInPageResult) => void): Nightmare;
    on(event: 'media-started-playing', cb: () => void): Nightmare;
    on(event: 'media-paused', cb: () => void): Nightmare;
    on(event: 'did-change-theme-color', cb: () => void): Nightmare;
    on(event: 'update-target-url', cb: (event: Event, url: string) => void): Nightmare;
    on(event: 'cursor-changed', cb: (event: Event, type: Nightmare.CursorType, image?: any, scale?: number, size?: Nightmare.Size, hotspot?: Nightmare.Point) => void): Nightmare;
    on(event: 'context-menu', cb: (event: Event, params: Nightmare.ContextMenuParams) => void): Nightmare;
    on(event: 'select-bluetooth-device', cb: (event: Event, deviceList: Nightmare.BluetoothDevice[], cb: (deviceId: string) => void) => void): Nightmare;
    on(event: 'paint', cb: (event: Event, dirtyRect: Nightmare.Rectangle, image: any) => void): Nightmare;

    // Page events
    on(event: 'page', cb: (type: 'error', message, stack) => void)
    on(event: 'page', cb: (type: 'alert', message) => void)
    on(event: 'page', cb: (type: 'prompt', message, response) => void)
    on(event: 'page', cb: (type: 'confirm', message, response) => void)
    on(event: 'console', cb: (type: string, args?: any) => void)

    // Once - web content events
    once(event: string, cb: () => void): Nightmare;
    once(event: 'did-finish-load', cb: () => void): Nightmare;
    once(event: 'did-fail-load', cb: (event: Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean) => void): Nightmare;
    once(event: 'did-frame-finish-load', cb: (event: Event, isMainFrame: boolean) => void): Nightmare;
    once(event: 'did-start-loading', cb: () => void): Nightmare;
    once(event: 'did-stop-loading', cb: () => void): Nightmare;
    once(event: 'did-get-response-details', cb: (event: Event, status: boolean, newURL: string, originalURL: string, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers, resourceType: string) => void): Nightmare;
    once(event: 'did-get-redirect-request', cb: (event: Event, oldURL: string, newURL: string, isMainFrame: boolean, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers) => void): Nightmare;
    once(event: 'dom-ready', cb: (event: Event) => void): Nightmare;
    once(event: 'page-favicon-updated', cb: (event: Event, favicons: string[]) => void): Nightmare;
    once(event: 'new-window', cb: (event: Event, url: string, frameName: string, disposition: Nightmare.NewWindowDisposition, options: Nightmare.BrowserWindowOptions) => void): Nightmare;
    once(event: 'will-navigate', cb: (event: Event, url: string) => void): Nightmare;
    once(event: 'did-navigate', cb: (event: Event, url: string) => void): Nightmare;
    once(event: 'did-navigate-in-page', cb: (event: Event, url: string, isMainFrame: boolean) => void): Nightmare;
    once(event: 'crashed', cb: (event: Event, killed: boolean) => void): Nightmare;
    once(event: 'plugin-crashed', cb: (event: Event, name: string, version: string) => void): Nightmare;
    once(event: 'destroyed', cb: () => void): Nightmare;
    once(event: 'devtools-opened', cb: () => void): Nightmare;
    once(event: 'devtools-closed', cb: () => void): Nightmare;
    once(event: 'devtools-focused', cb: () => void): Nightmare;
    once(event: 'certificate-error', cb: (event: Event, url: string, error: string, cert: Nightmare.Certificate, cb: (trust: boolean) => void) => void): Nightmare;
    once(event: 'select-client-certificate', cb: (event: Event, url: string, certList: Nightmare.Certificate[], cb: (certificate: Nightmare.Certificate) => void) => void): Nightmare;
    once(event: 'login', cb: (event: Event, request: Nightmare.LoginRequest, authInfo: Nightmare.LoginAuthInfo, cb: (username: string, password: string) => void) => void): Nightmare;
    once(event: 'found-in-page', cb: (event: Event, result: Nightmare.FoundInPageResult) => void): Nightmare;
    once(event: 'media-started-playing', cb: () => void): Nightmare;
    once(event: 'media-paused', cb: () => void): Nightmare;
    once(event: 'did-change-theme-color', cb: () => void): Nightmare;
    once(event: 'update-target-url', cb: (event: Event, url: string) => void): Nightmare;
    once(event: 'cursor-changed', cb: (event: Event, type: Nightmare.CursorType, image?: any, scale?: number, size?: Nightmare.Size, hotspot?: Nightmare.Point) => void): Nightmare;
    once(event: 'context-menu', cb: (event: Event, params: Nightmare.ContextMenuParams) => void): Nightmare;
    once(event: 'select-bluetooth-device', cb: (event: Event, deviceList: Nightmare.BluetoothDevice[], cb: (deviceId: string) => void) => void): Nightmare;
    once(event: 'paint', cb: (event: Event, dirtyRect: Nightmare.Rectangle, image: any) => void): Nightmare;

    // Page events
    once(event: 'page', cb: (type: 'error', message, stack) => void)
    once(event: 'page', cb: (type: 'alert', message) => void)
    once(event: 'page', cb: (type: 'prompt', message, response) => void)
    once(event: 'page', cb: (type: 'confirm', message, response) => void)
    once(event: 'console', cb: (type: string, args?: any) => void)

    removeListener(event: string, cb: () => void): Nightmare;
    screenshot(path?: string, clip?: Nightmare.Rectangle): Nightmare;
    html(path: string, saveType: Nightmare.SaveType)
    pdf(path: string, options: Nightmare.PDFOptions): Nightmare;
    title(cb: (title: string) => void): Nightmare;
    url(cb: (url: string) => void): Nightmare;
    path(cb: (url: string) => void): Nightmare;

    // -- Cookies --
    // Needs work
    cookies(): Nightmare;

    use(fn: any): Nightmare;
    halt(error?: {} | string, done?: any): Nightmare;
    end(): Nightmare;

    // Evaluate_now overloads
    evaluate_now<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare;
    evaluate_now<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare;
    evaluate_now<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare;
    evaluate_now<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare;
    evaluate_now<R>(fn: () => R, cb: (result: R) => void): Nightmare;
    evaluate_now(fn: () => void): Nightmare;

    static action(...args: any[]): Nightmare;
}

declare namespace Nightmare {

    export interface ConstructorOptions extends BrowserWindowOptions {
        // Nightmare specifc options documented here:
        // https://github.com/segmentio/nightmare/blob/2f5c4b9d97f4cfc29300b9a33c0caf9b048a2997/Readme.md#nightmareoptions
        waitTimeout?: number;
        goTimeout?: number;
        loadTimeout?: number;
        executionTimeout?: number;
        paths?: object;
        swithes?: object;
        electronPath?: string;
        dock?: boolean;
        openDevTools?: boolean;
        typeInterval?: number;
        pollInterval?: number;
        maxAuthRetries?: number;
        promise?: any;

    }

    export interface BrowserWindowOptions {

        // Electron specific options documented here:
        // https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions
        width?: number;
        height?: number;
        x?: number;
        y?: number;
        useContentSize?: boolean;
        switches?: object;
        center?: boolean;
        minWidth?: number;
        minHeight?: number;
        maxWidth?: number;
        maxHeight?: number;
        resizable?: boolean;
        movable?: boolean;
        minimizable?: boolean;
        maximizable?: boolean;
        closable?: boolean;
        focusable?: boolean;
        alwaysOnTop?: boolean;
        fullscreen?: boolean;
        fullscreenable?: boolean;
        skipTaskbar?: boolean;
        kiosk?: boolean;
        title?: string;
        icon?: string;
        show?: boolean;
        frame?: boolean;
        parent?: any;
        modal?: boolean;
        acceptFirstMouse?: boolean;
        disableAutoHideCursor?: boolean;
        autoHideMenuBar?: boolean;
        enableLargerThanScreen?: boolean;
        backgroundColor?: string;
        hasShadow?: boolean;
        darkTheme?: boolean;
        transparent?: boolean;
        type?: BrowserWindowType;
        titleBarStyle?: 'default' | 'hidden' | 'hidden-inset';
        thickFrame?: boolean;
        vibrancy?: VibrancyType;
        webPreferences?: WebPreferences;
    }

    interface WebPreferences {
        devTools?: boolean;
        nodeIntegration?: boolean;
        preload?: string;
        session?: Object;
        partition?: string;
        zoomFactor?: number;
        javascript?: boolean;
        webSecurity?: boolean;
        allowDisplayingInsecureContent?: boolean;
        allowRunningInsecureContent?: boolean;
        images?: boolean;
        textAreasAreResizable?: boolean;
        webgl?: boolean;
        webaudio?: boolean;
        plugins?: boolean;
        experimentalFeatures?: boolean;
        experimentalCanvasFeatures?: boolean;
        directWrite?: boolean;
        scrollBounce?: boolean;
        blinkFeatures?: string;
        disableBlinkFeatures?: string;
        defaultFontFamily?: {
            standard?: string;
            serif?: string;
            sansSerif?: string;
            monospace?: string;
        };
        defaultFontSize?: number;
        defaultMonospaceFontSize?: number;
        minimumFontSize?: number;
        defaultEncoding?: string;
        backgroundThrottling?: boolean;
        offscreen?: boolean;
        sandbox?: boolean;
    }

    interface Certificate {
        /**
        * PEM encoded data.
        */
        data: string;
        /**
        * Issuer principal
        */
        issuer: CertificatePrincipal;
        /**
        * Issuer's Common Name.
        */
        issuerName: string;
        /**
        * Issuer certificate (if not self-signed)
        */
        issuerCert: Certificate;
        /**
        * Subject principal
        */
        subject: CertificatePrincipal;
        /**
        * Subject's Common Name.
        */
        subjectName: string;
        /**
        * Hex value represented string.
        */
        serialNumber: string;
        /**
        * Start date of the certificate being valid in seconds.
        */
        validStart: number;
        /**
        * End date of the certificate being valid in seconds.
        */
        validExpiry: number;
        /**
        * Fingerprint of the certificate.
        */
        fingerprint: string;
    }

    interface CertificatePrincipal {
        /**
        * Common Name
        */
        commonName: string;
        /**
        * Organization names
        */
        organizations: string[];
        /**
        * Organization Unit names
        */
        organizationUnits: string[];
        /**
        * Locality
        */
        locality: string;
        /**
        * State or province
        */
        state: string;
        /**
        * Country or region
        */
        country: string;
    }

    interface LoginRequest {
        method: string;
        url: string;
        referrer: string;
    }

    interface LoginAuthInfo {
        isProxy: boolean;
        scheme: string;
        host: string;
        port: number;
        realm: string;
    }

    interface FindInPageOptions {
        /**
        * Whether to search forward or backward, defaults to true
        */
        forward?: boolean;
        /**
        * Whether the operation is first request or a follow up, defaults to false.
        */
        findNext?: boolean;
        /**
        * Whether search should be case-sensitive, defaults to false.
        */
        matchCase?: boolean;
        /**
        * Whether to look only at the start of words. defaults to false.
        */
        wordStart?: boolean;
        /**
        * When combined with wordStart, accepts a match in the middle of a word
        * if the match begins with an uppercase letter followed by a lowercase
        * or non-letter. Accepts several other intra-word matches, defaults to false.
        */
        medialCapitalAsWordStart?: boolean;
    }

    interface FoundInPageResult {
        requestId: number;
        /**
        * Indicates if more responses are to follow.
        */
        finalUpdate: boolean;
        /**
        * Position of the active match.
        */
        activeMatchOrdinal?: number;
        /**
        * Number of Matches.
        */
        matches?: number;
        /**
        * Coordinates of first match region.
        */
        selectionArea?: Rectangle;
    }

    interface ContextMenuParams {
        /**
        * x coordinate
        */
        x: number;
        /**
        * y coordinate
        */
        y: number;
        /**
        * URL of the link that encloses the node the context menu was invoked on.
        */
        linkURL: string;
        /**
        * Text associated with the link. May be an empty string if the contents of the link are an image.
        */
        linkText: string;
        /**
        * URL of the top level page that the context menu was invoked on.
        */
        pageURL: string;
        /**
        * URL of the subframe that the context menu was invoked on.
        */
        frameURL: string;
        /**
        * Source URL for the element that the context menu was invoked on.
        * Elements with source URLs are images, audio and video.
        */
        srcURL: string;
        /**
        * Type of the node the context menu was invoked on.
        */
        mediaType: 'none' | 'image' | 'audio' | 'video' | 'canvas' | 'file' | 'plugin';
        /**
        * Parameters for the media element the context menu was invoked on.
        */
        mediaFlags: {
            /**
            * Whether the media element has crashed.
            */
            inError: boolean;
            /**
            * Whether the media element is paused.
            */
            isPaused: boolean;
            /**
            * Whether the media element is muted.
            */
            isMuted: boolean;
            /**
            * Whether the media element has audio.
            */
            hasAudio: boolean;
            /**
            * Whether the media element is looping.
            */
            isLooping: boolean;
            /**
            * Whether the media element's controls are visible.
            */
            isControlsVisible: boolean;
            /**
            * Whether the media element's controls are toggleable.
            */
            canToggleControls: boolean;
            /**
            * Whether the media element can be rotated.
            */
            canRotate: boolean;
        }
        /**
        * Whether the context menu was invoked on an image which has non-empty contents.
        */
        hasImageContents: boolean;
        /**
        * Whether the context is editable.
        */
        isEditable: boolean;
        /**
        * These flags indicate whether the renderer believes it is able to perform the corresponding action.
        */
        editFlags: {
            /**
            * Whether the renderer believes it can undo.
            */
            canUndo: boolean;
            /**
            * Whether the renderer believes it can redo.
            */
            canRedo: boolean;
            /**
            * Whether the renderer believes it can cut.
            */
            canCut: boolean;
            /**
            * Whether the renderer believes it can copy
            */
            canCopy: boolean;
            /**
            * Whether the renderer believes it can paste.
            */
            canPaste: boolean;
            /**
            * Whether the renderer believes it can delete.
            */
            canDelete: boolean;
            /**
            * Whether the renderer believes it can select all.
            */
            canSelectAll: boolean;
        }
        /**
        * Text of the selection that the context menu was invoked on.
        */
        selectionText: string;
        /**
        * Title or alt text of the selection that the context was invoked on.
        */
        titleText: string;
        /**
        * The misspelled word under the cursor, if any.
        */
        misspelledWord: string;
        /**
        * The character encoding of the frame on which the menu was invoked.
        */
        frameCharset: string;
        /**
        * If the context menu was invoked on an input field, the type of that field.
        */
        inputFieldType: 'none' | 'plainText' | 'password' | 'other';
        /**
        * Input source that invoked the context menu.
        */
        menuSourceType: 'none' | 'mouse' | 'keyboard' | 'touch' | 'touchMenu';
    }

    interface PDFOptions {
        /**
         * Specify the type of margins to use.
         *   0 - default
         *   1 - none
         *   2 - minimum
         * Default: 0
         */
        marginsType?: number;
        /**
         * Specify page size of the generated PDF.
         * Default: A4.
         */
        pageSize?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid' | Size;
        /**
         * Whether to print CSS backgrounds.
         * Default: false.
         */
        printBackground?: boolean;
        /**
         * Whether to print selection only.
         * Default: false.
         */
        printSelectionOnly?: boolean;
        /**
         * true for landscape, false for portrait.
         * Default: false.
         */
        landscape?: boolean;
    }

    export interface EngineVersions {
        electron: string;
        chrome: string;
    }

    export interface Headers {
        [key: string]: string;
    }

    interface BluetoothDevice {
        deviceName: string;
        deviceId: string;
    }

    class Promise {
        constructor(p0: any);
        // Native method; no parameter or return type inference available
        catch(p0: any): any;
        // Native method; no parameter or return type inference available
        then(p0: any, p1: any): any;
        static all(p0: any): any;
        static race(p0: any): any;
        static reject(p0: any): any;
        static resolve(p0: any): any;
    }

    // -- Supporting types --

    type Rectangle = {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    type Size = {
        width: number;
        height: number;
    }

    type Point = {
        x: number;
        y: number;
    }

    type SaveType = {
        HTMLOnly: string;
        HTMLComplete: string;
        MHTML: string;
    }

    type BrowserWindowType = BrowserWindowTypeLinux | BrowserWindowTypeMac | BrowserWindowTypeWindows;
    type BrowserWindowTypeLinux = 'desktop' | 'dock' | 'toolbar' | 'splash' | 'notification';
    type BrowserWindowTypeMac = 'desktop' | 'textured';
    type BrowserWindowTypeWindows = 'toolbar';

    type NewWindowDisposition = 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'save-to-disk' | 'other';

    type VibrancyType = 'appearance-based' | 'light' | 'dark' | 'titlebar' | 'selection' | 'menu' | 'popover' | 'sidebar' | 'medium-light' | 'ultra-dark';

    type CursorType = 'default' | 'crosshair' | 'pointer' | 'text' | 'wait' | 'help' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ns-resize' | 'ew-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'm-panning' | 'e-panning' | 'n-panning' | 'ne-panning' | 'nw-panning' | 's-panning' | 'se-panning' | 'sw-panning' | 'w-panning' | 'move' | 'vertical-text' | 'cell' | 'context-menu' | 'alias' | 'progress' | 'nodrop' | 'copy' | 'none' | 'not-allowed' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'custom';
}

