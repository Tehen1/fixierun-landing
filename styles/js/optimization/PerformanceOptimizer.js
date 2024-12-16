class PerformanceOptimizer {
    constructor(game) {
        this.game = game;
        this.fps = 60;
        this.frameTime = 1000 / this.fps;
        this.lastTime = 0;
        this.frames = 0;
        this.lastFpsUpdate = 0;
        this.frameSkip = false;
        
        // Statistiques de performance
        this.stats = {
            fps: 0,
            activeObjects: 0,
            particleCount: 0,
            renderTime: 0,
            updateTime: 0,
            memoryUsage: 0
        };

        this.setupPerformanceMonitoring();
        this.optimizeRendering();
    }

    setupPerformanceMonitoring() {
        this.statsDisplay = document.createElement('div');
        this.statsDisplay.className = 'performance-stats';
        document.body.appendChild(this.statsDisplay);
        this.monitorPerformance();
    }

    monitorPerformance() {
        setInterval(() => {
            this.updateStats();
        }, 1000);
    }

    updateStats() {
        this.stats.activeObjects = this.game.gameState.units.length;
        this.stats.particleCount = this.countParticles();
        this.stats.memoryUsage = this.getMemoryUsage();

        this.statsDisplay.innerHTML = `
            FPS: ${this.stats.fps}<br>
            Active Objects: ${this.stats.activeObjects}<br>
            Particles: ${this.stats.particleCount}<br>
            Render Time: ${this.stats.renderTime.toFixed(2)}ms<br>
            Update Time: ${this.stats.updateTime.toFixed(2)}ms<br>
            Memory: ${(this.stats.memoryUsage / 1024 / 1024).toFixed(2)}MB
        `;
    }

    update(currentTime) {
        const startTime = performance.now();
        
        // Calcul FPS
        this.frames++;
        if (currentTime > this.lastFpsUpdate + 1000) {
            this.stats.fps = Math.round((this.frames * 1000) / (currentTime - this.lastFpsUpdate));
            this.lastFpsUpdate = currentTime;
            this.frames = 0;
        }

        // Frame skipping
        const deltaTime = currentTime - this.lastTime;
        this.frameSkip = deltaTime > this.frameTime * 1.5;

        this.lastTime = currentTime;
        this.stats.updateTime = performance.now() - startTime;

        return !this.frameSkip;
    }

    countParticles() {
        let count = 0;
        if (this.game.effectsScene) {
            this.game.effectsScene.children.forEach(child => {
                if (child instanceof PIXI.ParticleContainer) {
                    count += child.children.length;
                }
            });
        }
        return count;
    }

    getMemoryUsage() {
        if (window.performance && window.performance.memory) {
            return window.performance.memory.usedJSHeapSize;
        }
        return 0;
    }

    optimizeRendering() {
        PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.MEDIUM;
        PIXI.settings.SPRITE_MAX_TEXTURES = Math.min(PIXI.settings.SPRITE_MAX_TEXTURES, 16);
        PIXI.settings.ROUND_PIXELS = true;

        if (this.game && this.game.app) {
            this.game.app.renderer.plugins.interaction.autoPreventDefault = false;
            this.game.app.renderer.plugins.interaction.useSystemTicker = false;
        }
    }

    startBatchRendering() {
        if (this.game && this.game.app) {
            this.game.app.renderer.plugins.prepare.upload(this.game.app.stage);
        }
    }

    enableWebGLOptimizations() {
        if (this.game && this.game.app && this.game.app.renderer.type === PIXI.RENDERER_TYPE.WEBGL) {
            const renderer = this.game.app.renderer;
            renderer.backgroundColor = 0x16213E;
            renderer.clearBeforeRender = true;
            renderer.preserveDrawingBuffer = false;
        }
    }
}