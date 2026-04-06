// ==================== 游戏配置 ====================
const CONFIG = {
    GAME: {
        MAX_HEARTS: 3,
        BASE_SCORE: 10,
        COMBO_BONUS: 5,
        COMBO_THRESHOLD: 3,
        HINT_COST: 5,
        SKIP_COST: 5,
        AUTO_SAVE_INTERVAL: 30000,
    },
    DIFFICULTY: {
        EASY: { level: 1, hintLimit: 5, scoreMultiplier: 1 },
        MEDIUM: { level: 2, hintLimit: 3, scoreMultiplier: 1.2 },
        HARD: { level: 3, hintLimit: 2, scoreMultiplier: 1.5 },
        EXPERT: { level: 3, hintLimit: 1, scoreMultiplier: 2 }
    },
    ANIMATION: {
        FEEDBACK_DURATION: 1000,
        COMBO_DURATION: 1000,
        TRANSITION_DELAY: 1200,
        ERROR_DELAY: 1800,
    },
    ACHIEVEMENTS: {
        FIRST_GAME: { id: 'first_game', name: '初次尝试', description: '完成第一次游戏', reward: 50 },
        SCORE_100: { id: 'score_100', name: '初露锋芒', description: '单局得分达到100分', reward: 100 },
        SCORE_500: { id: 'score_500', name: '诗词达人', description: '单局得分达到500分', reward: 200 },
        SCORE_1000: { id: 'score_1000', name: '诗词大师', description: '单局得分达到1000分', reward: 500 },
        STREAK_5: { id: 'streak_5', name: '连续答对', description: '连续答对5题', reward: 50 },
        STREAK_10: { id: 'streak_10', name: '诗词高手', description: '连续答对10题', reward: 100 },
        STREAK_20: { id: 'streak_20', name: '诗词圣手', description: '连续答对20题', reward: 200 },
        COLLECT_10: { id: 'collect_10', name: '诗词收集者', description: '收集10首诗词', reward: 100 },
        COLLECT_50: { id: 'collect_50', name: '诗词收藏家', description: '收集50首诗词', reward: 300 },
        COLLECT_100: { id: 'collect_100', name: '诗词博物馆', description: '收集100首诗词', reward: 500 },
        DAILY_7: { id: 'daily_7', name: '连续打卡', description: '连续7天完成每日任务', reward: 300 },
        DAILY_30: { id: 'daily_30', name: '诗词爱好者', description: '连续30天完成每日任务', reward: 1000 },
        ALL_MODES: { id: 'all_modes', name: '全能玩家', description: '体验所有游戏模式', reward: 200 }
    },
    DAILY_TASKS: [
        { id: 'fill_5', name: '填充练习', description: '完成5次填充模式', reward: 50, progress: 0, target: 5 },
        { id: 'match_3', name: '配对挑战', description: '完成3次配对模式', reward: 30, progress: 0, target: 3 },
        { id: 'feihua_1', name: '飞花令', description: '完成1次飞花令', reward: 20, progress: 0, target: 1 },
        { id: 'chain_2', name: '接句挑战', description: '完成2次接句模式', reward: 40, progress: 0, target: 2 },
        { id: 'score_50', name: '得分挑战', description: '单局得分达到50分', reward: 30, progress: 0, target: 50 }
    ],
    STORAGE_KEY: 'poemGameV3',
    SETTINGS_KEY: 'poemGameSettings',
    STATS_KEY: 'poemGameStats',
    ACHIEVEMENTS_KEY: 'poemGameAchievements',
    DAILY_TASKS_KEY: 'poemGameDailyTasks',
    LAST_DAILY_RESET_KEY: 'poemGameLastDailyReset'
};