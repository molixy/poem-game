// ==================== 数据加载与缓存 ====================
const DataLoader = {
    // 缓存对象
    cache: {
        poems: null,
        keywords: null,
        quizzes: null
    },
    
    // 加载状态
    loading: {
        poems: false,
        keywords: false,
        quizzes: false
    },
    
    // 加载诗词数据
    async loadPoems() {
        if (this.cache.poems) return this.cache.poems;
        if (this.loading.poems) {
            // 等待正在进行的加载完成
            while (this.loading.poems) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.cache.poems || PoemDatabase.poems || [];
        }
        
        this.loading.poems = true;
        try {
            const response = await fetch('data/poems.json');
            if (!response.ok) throw new Error('Failed to load poems');
            this.cache.poems = await response.json();
            return this.cache.poems;
        } catch (error) {
            console.error('Error loading poems:', error);
            // 回退到内置数据
            return PoemDatabase.poems || [];
        } finally {
            this.loading.poems = false;
        }
    },
    
    // 加载关键字数据
    async loadKeywords() {
        if (this.cache.keywords) return this.cache.keywords;
        if (this.loading.keywords) {
            // 等待正在进行的加载完成
            while (this.loading.keywords) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.cache.keywords || [];
        }
        
        this.loading.keywords = true;
        try {
            const response = await fetch('data/keywords.json');
            if (!response.ok) throw new Error('Failed to load keywords');
            this.cache.keywords = await response.json();
            return this.cache.keywords;
        } catch (error) {
            console.error('Error loading keywords:', error);
            return [];
        } finally {
            this.loading.keywords = false;
        }
    },
    
    // 加载 quiz 数据
    async loadQuizzes() {
        if (this.cache.quizzes) return this.cache.quizzes;
        if (this.loading.quizzes) {
            // 等待正在进行的加载完成
            while (this.loading.quizzes) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            return this.cache.quizzes || [];
        }
        
        this.loading.quizzes = true;
        try {
            const response = await fetch('data/quizzes.json');
            if (!response.ok) throw new Error('Failed to load quizzes');
            this.cache.quizzes = await response.json();
            return this.cache.quizzes;
        } catch (error) {
            console.error('Error loading quizzes:', error);
            return [];
        } finally {
            this.loading.quizzes = false;
        }
    },
    
    // 预加载所有数据
    async preloadAll() {
        try {
            await Promise.all([
                this.loadPoems(),
                this.loadKeywords(),
                this.loadQuizzes()
            ]);
            console.log('All data loaded successfully');
        } catch (error) {
            console.error('Error preloading data:', error);
        }
    },
    
    // 清除缓存
    clearCache() {
        this.cache = {
            poems: null,
            keywords: null,
            quizzes: null
        };
    }
};