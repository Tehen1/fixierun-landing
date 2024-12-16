class MemoryManager {
    constructor(game) {
        this.game = game;
        this.textureCache = new Map();
        this.garbageCollectionInterval = 30000;
        this.setupGarbageCollection();
    }

    setupGarbageCollection() {
        setInterval(() => this.collectGarbage(), this.garbageCollectionInterval);
    }

    collectGarbage() {
        this.cleanupTextures();
        if (window.gc) {
            window.gc();
        }
    }

    cleanupTextures() {
        this.textureCache.forEach((value, key) => {
            if (!value.isUsed) {
                value.texture.destroy(true);
                this.textureCache.delete(key);
            } else {
                value.isUsed = false;
            }
        });
    }

    getTexture(key, createFn) {
        if (!this.textureCache.has(key)) {
            this.textureCache.set(key, {
                texture: createFn(),
                isUsed: true
            });
        } else {
            this.textureCache.get(key).isUsed = true;
        }
        return this.textureCache.get(key).texture;
    }

    releaseTexture(key) {
        if (this.textureCache.has(key)) {
            const entry = this.textureCache.get(key);
            entry.texture.destroy(true);
            this.textureCache.delete(key);
        }
    }
}