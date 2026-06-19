// public/site-helper.js
(function() {
  'use strict';

  const CONFIG = {
    siteUrl: 'https://official-site-leyu.com.cn',
    keyword: '乐鱼体育',
    version: '1.1.0'
  };

  const TIP_CARDS = [
    {
      id: 'welcome-card',
      icon: 'ℹ️',
      title: '欢迎访问',
      content: '您正在浏览 ' + CONFIG.siteUrl + '，本平台提供稳定服务。'
    },
    {
      id: 'keyword-card',
      icon: '🏷️',
      title: '核心关键词',
      content: '当前站点与“' + CONFIG.keyword + '”紧密相关，了解更多请查看导航。'
    },
    {
      id: 'access-card',
      icon: '🔒',
      title: '访问说明',
      content: '建议使用最新版浏览器访问，确保体验流畅。如遇问题，可刷新页面重试。'
    }
  ];

  const BADGE_DATA = [
    { label: CONFIG.keyword, color: '#e67e22' },
    { label: '官方入口', color: '#2ecc71' },
    { label: '安全认证', color: '#3498db' },
    { label: '全天在线', color: '#9b59b6' }
  ];

  function createStyleSheet() {
    const style = document.createElement('style');
    style.textContent = `
      .sh-widget-container {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        max-width: 720px;
        margin: 20px auto;
        padding: 0 12px;
      }
      .sh-card {
        background: #f9fafb;
        border-radius: 12px;
        padding: 16px 18px;
        margin-bottom: 14px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        border-left: 4px solid #3b82f6;
        transition: box-shadow 0.2s;
      }
      .sh-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .sh-card-icon {
        font-size: 1.3rem;
        margin-right: 8px;
        vertical-align: middle;
      }
      .sh-card-title {
        font-weight: 600;
        font-size: 1.1rem;
        display: inline-block;
        vertical-align: middle;
        color: #1e293b;
      }
      .sh-card-content {
        margin-top: 8px;
        color: #334155;
        line-height: 1.5;
        font-size: 0.95rem;
      }
      .sh-badge-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0 8px;
      }
      .sh-badge {
        display: inline-block;
        padding: 4px 14px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 500;
        color: #fff;
        background: #3b82f6;
      }
      .sh-footer-note {
        font-size: 0.8rem;
        color: #64748b;
        text-align: center;
        margin-top: 12px;
        border-top: 1px solid #e2e8f0;
        padding-top: 10px;
      }
    `;
    document.head.appendChild(style);
  }

  function buildWidget() {
    const container = document.createElement('div');
    container.className = 'sh-widget-container';

    // 提示卡片
    TIP_CARDS.forEach(function(card) {
      const cardDiv = document.createElement('div');
      cardDiv.className = 'sh-card';
      cardDiv.id = card.id;

      const header = document.createElement('div');
      const iconSpan = document.createElement('span');
      iconSpan.className = 'sh-card-icon';
      iconSpan.textContent = card.icon;
      const titleSpan = document.createElement('span');
      titleSpan.className = 'sh-card-title';
      titleSpan.textContent = card.title;
      header.appendChild(iconSpan);
      header.appendChild(titleSpan);

      const contentDiv = document.createElement('div');
      contentDiv.className = 'sh-card-content';
      contentDiv.textContent = card.content;

      cardDiv.appendChild(header);
      cardDiv.appendChild(contentDiv);
      container.appendChild(cardDiv);
    });

    // 关键词徽章
    const badgeRow = document.createElement('div');
    badgeRow.className = 'sh-badge-row';
    BADGE_DATA.forEach(function(item) {
      const badge = document.createElement('span');
      badge.className = 'sh-badge';
      badge.textContent = item.label;
      badge.style.backgroundColor = item.color;
      badgeRow.appendChild(badge);
    });
    container.appendChild(badgeRow);

    // 访问说明脚注
    const footer = document.createElement('div');
    footer.className = 'sh-footer-note';
    footer.textContent = '🔹 如您来自 ' + CONFIG.siteUrl + '，请放心浏览。本页面辅助功能 v' + CONFIG.version;
    container.appendChild(footer);

    // 插入到页面主体
    const target = document.querySelector('main') || document.querySelector('.content') || document.body;
    if (target && target.parentNode) {
      target.parentNode.insertBefore(container, target.nextSibling);
    } else {
      document.body.appendChild(container);
    }
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        createStyleSheet();
        buildWidget();
      });
    } else {
      createStyleSheet();
      buildWidget();
    }
  }

  init();
})();