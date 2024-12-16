class ObjectPool {
    constructor() {
        this.pools = new Map();
    }

    getPool(type, createFn, maxSize = 100) {
        if (!this.pools.has(type)) {
            this.pools.set(type, {
                active: new Set(),
                inactive: [],
                createFn,
                maxSize
            });
        }
        return this.pools.get(type);
    }

    acquire(type, ...args) {
        const pool = this.getPool(type);
        let object;

        if (pool.inactive.length > 0) {
            object = pool.inactive.pop();
            this.resetObject(object, ...args);
        } else if (pool.active.size < pool.maxSize) {
            object = pool.createFn(...args);
        } else {
            return null;
        }

        pool.active.add(object);
        return object;
    }

    release(type, object) {
        const pool = this.pools.get(type);
        if (pool && pool.active.has(object)) {
            pool.active.delete(object);
            pool.inactive.push(object);
            this.resetObject(object);
        }
    }

    resetObject(object, ...args) {
        if (object.reset) {
            object.reset(...args);
        }
    }

    clear(type) {
        if (type) {
            const pool = this.pools.get(type);
            if (pool) {
                pool.active.clear();
                pool.inactive.length = 0;
            }
        } else {
            this.pools.clear();
        }
    }
}