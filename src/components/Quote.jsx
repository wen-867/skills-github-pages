import { useState, useEffect, useCallback, useMemo } from "react"; // 导入 React 的相关钩子函数

function Quote() {
    // 使用 useMemo 缓存名言数组，避免每次渲染时重新创建
    const quoteData = useMemo(() => [
        "成功并非永久，失败也并非致命；最重要的是勇气。——温斯顿·丘吉尔",
        "生活就像骑自行车，要保持平衡就得往前走。——阿尔伯特·爱因斯坦",
        "教育是点燃火焰，而非灌满瓶子。——威廉·巴特勒·叶芝",
        "人生最大的冒险，就是过自己想要的生活。——奥普拉·温弗瑞",
        "时间是治疗一切伤痛的良药，但有时，它也是毒药。",
        "机会永远留给有准备的人。",
        "知识就是力量。",
        "天才是百分之一的灵感加上百分之九十九的汗水。",
        "人生没有彩排，每天都是现场直播。",
        "勇气不是不感到恐惧，而是即便害怕也依然前行。",
        "爱是恒久忍耐，又有恩慈。",
        "人生最大的敌人不是别人，而是不敢挑战自我的恐惧。",
        "真正的智慧在于知道自己无知。",
        "梦想还是要有的，万一实现了呢？",
        "幸福不是拥有得多，而是计较得少。",
        "人生如戏，全靠演技，但真诚才是永远的杀手锏。",
        "书籍是人类进步的阶梯。",
        "失败是成功之母，每一次跌倒都是向前的准备。",
        "信任是建立在细小行动上的，而不是华丽的言辞。",
        "生命不在于长度，而在于深度和广度。"
    ], []); // 空依赖数组表示只在组件首次渲染时初始化

    const [quote, setQuote] = useState(quoteData[0]); // 定义状态变量 quote，初始值为名言数组的第一个元素

    // 使用 useCallback 定义更新名言的函数，避免不必要的重新创建
    const updateQuote = useCallback(() => {
        let randomIndex; // 定义随机索引
        do {
            randomIndex = Math.floor(Math.random() * quoteData.length); // 生成随机索引
        } while (quote === quoteData[randomIndex]); // 确保新索引对应的名言不同于当前名言
        setQuote(quoteData[randomIndex]); // 更新名言状态
    }, [quote, quoteData]); // 依赖项为 quote 和 quoteData

    useEffect(() => {
        const intervalId = setInterval(updateQuote, 15000); // 设置定时器，每隔 15 秒调用一次 updateQuote
        return () => clearInterval(intervalId); // 清除定时器，避免内存泄漏
    }, [updateQuote]); // 依赖项为 updateQuote，确保每次更新后重新设置定时器

    return (
        <div className="quote"> {/* 定义一个包含名言的 div 容器 */}
            <p>{quote}</p> {/* 显示当前名言 */}
        </div>
    );
}
export default Quote; // 导出组件