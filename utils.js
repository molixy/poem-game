// ==================== 工具函数 ====================
const Utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 随机打乱数组
    shuffle(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },

    // 生成唯一ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // 清理文本（去除标点）
    cleanText(text) {
        return text.replace(/[，。？！、；：""''（）【】]/g, '');
    },

    // 计算相似度
    calculateSimilarity(str1, str2) {
        const len1 = str1.length;
        const len2 = str2.length;
        const matrix = [];

        for (let i = 0; i <= len2; i++) matrix[i] = [i];
        for (let j = 0; j <= len1; j++) matrix[0][j] = j;

        for (let i = 1; i <= len2; i++) {
            for (let j = 1; j <= len1; j++) {
                matrix[i][j] = str2[i - 1] === str1[j - 1]
                    ? matrix[i - 1][j - 1]
                    : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }

        const distance = matrix[len2][len1];
        const maxLen = Math.max(len1, len2);
        return 1 - distance / maxLen;
    },

    // 显示浮动反馈
    showFloatingFeedback(text, x, y, type = 'success') {
        const feedback = document.createElement('div');
        feedback.className = 'floating-feedback';
        feedback.textContent = text;
        feedback.style.left = `${x}px`;
        feedback.style.top = `${y}px`;
        feedback.style.color = type === 'success' ? 'var(--success)' : 'var(--error)';
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 1000);
    },

    // 创建文档片段（性能优化）
    createFragment(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content;
    },

    // 批量添加DOM元素
    batchAppend(parent, elements) {
        const fragment = document.createDocumentFragment();
        elements.forEach(element => {
            fragment.appendChild(element);
        });
        parent.appendChild(fragment);
    },

    // 批量替换DOM元素
    batchReplace(parent, elements) {
        const fragment = document.createDocumentFragment();
        elements.forEach(element => {
            fragment.appendChild(element);
        });
        parent.innerHTML = '';
        parent.appendChild(fragment);
    }
};