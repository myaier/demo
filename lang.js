const i18n = {
  zh: {
    title: "TalkTo.Me - AI接待",
    hero_title: "让 <span class=\"highlight\">AI</span> 替您<br />接待每一位来访者",
    hero_desc: "创建个人专属链接，智能体按您设定的规则和访客沟通、索取信息，消除无效交流",
    email_label: "邮箱地址",
    btn_register: "注册 / 登录",
    demo_link: "点此体验演示 <span style=\"font-size: 18px; margin-left: 4px\">›</span>",
    step1_title: "创建链接",
    step1_desc: "注册后即得 yourname.talkto.me",
    step2_title: "配置规则",
    step2_desc: "告诉智能体如何代表你接待访客",
    step3_title: "绑定推送",
    step3_desc: "重要对话实时推送到你的聊天工具"
  },
  en: {
    title: "TalkTo.Me - AI Receptionist",
    hero_title: "Let <span class=\"highlight\">AI</span> receive<br />every visitor for you",
    hero_desc: "Create your personal link. The agent communicates with visitors and gathers information based on your rules, eliminating ineffective chats.",
    email_label: "Email Address",
    btn_register: "Register / Login",
    demo_link: "Try Demo <span style=\"font-size: 18px; margin-left: 4px\">›</span>",
    step1_title: "Create Link",
    step1_desc: "Get yourname.talkto.me after registration",
    step2_title: "Configure Rules",
    step2_desc: "Tell the agent how to receive visitors on your behalf",
    step3_title: "Bind Notifications",
    step3_desc: "Real-time push of important conversations to your chat tools"
  }
};

let currentLang = 'zh';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  if (i18n[lang].title) {
    document.title = i18n[lang].title;
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      setLanguage(newLang);
    });
  }
});
