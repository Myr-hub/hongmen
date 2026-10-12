// 独立教学示例，文案键与语言集合均由应用定义。
const messages = {
  zh: {createRoom: '创建房间', joinRoom: '加入房间', rules: '玩法'},
  en: {createRoom: 'Create room', joinRoom: 'Join room'}
};
export function translate(locale, key) {
  if (typeof key !== 'string' || !key) throw new TypeError('需要文案键');
  const language = typeof locale === 'string' && Object.hasOwn(messages, locale)
    ? locale : 'zh';
  const selected = messages[language];
  if (Object.hasOwn(selected, key)) return selected[key];
  if (Object.hasOwn(messages.zh, key)) return messages.zh[key];
  return `[${key}]`;
}
