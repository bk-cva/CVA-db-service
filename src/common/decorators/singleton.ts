const INSTANCE = Symbol('singleton-decorator:instance');

/**
 * Returns an instance of the Class
 */
function getInstance(Class: any, args = []) {
    return Class[INSTANCE] = Class[INSTANCE] instanceof Class ? Class[INSTANCE] : new Class(...args);
}

function Singleton(Class: any) {
    const partiallyGetInstance = getInstance.bind(null, Class);
    // define the getInstance() method on the target
    Object.defineProperty(Class, 'getInstance', {
        value: partiallyGetInstance,
    });
    return partiallyGetInstance;
}

export default Singleton;
