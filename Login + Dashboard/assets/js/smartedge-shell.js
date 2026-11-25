(function () {
  const NAV_GROUPS = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'home',
      href: 'dashboard.html',
    },
    {
      id: 'fund-request',
      label: 'Fund Request',
      icon: 'account_balance_wallet',
      items: [
        { label: 'Add New Request', href: 'fund-request.html' },
        { label: 'Fund Request Reports', href: 'fund-request-reports.html' },
        { label: 'Pending UPI Collect', href: 'pending-upi-collect.html' },
      ],
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: 'receipt_long',
      items: [
        { label: 'Recharge', href: 'recharge-transactions.html' },
        { label: 'Bill Payment', href: 'bill-payment-transactions.html' },
        { label: 'AEPS', href: 'aeps-transactions.html' },
        { label: 'UPI Collect', href: 'upi-collect-transactions.html' },
        { label: 'Refund List', href: 'refund-transactions.html' },
      ],
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: 'summarize',
      items: [
        { label: 'Ledger', href: 'ledger-report.html' },
        { label: 'AEPS Ledger', href: 'aeps-ledger-report.html' },
        { label: 'Commission Ledger', href: 'commission-ledger.html' },
        { label: 'Commission Details', href: 'commission-details.html' },
        { label: 'Debit/Credit Balance', href: 'debit-credit-balance.html' },
      ],
    },
    {
      id: 'settlement',
      label: 'Settlement',
      icon: 'account_balance',
      href: 'add-bank.html',
    },
    {
      id: 'setting',
      label: 'Setting',
      icon: 'settings',
      items: [
        { label: 'Add Bank', href: 'add-bank.html' },
        { label: 'Change Password', href: 'change-password.html' },
        { label: 'Change M-Pin', href: 'change-mpin.html' },
      ],
    },
  ];

  const BOTTOM_NAV = [
    { group: 'dashboard', label: 'Home', icon: 'home', href: 'dashboard.html' },
    { group: 'fund-request', label: 'Funds', icon: 'account_balance_wallet', href: 'fund-request.html' },
    { group: 'transactions', label: 'History', icon: 'receipt_long', href: 'recharge-transactions.html' },
    { group: 'reports', label: 'Reports', icon: 'summarize', href: 'ledger-report.html' },
    { group: 'setting', label: 'Setting', icon: 'settings', href: 'change-password.html' },
  ];

  function getCurrentFile() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'dashboard.html';
    return file;
  }

  function detectActiveGroup(currentFile) {
    for (const group of NAV_GROUPS) {
      if (group.href === currentFile) return group.id;
      if (group.items && group.items.some((item) => item.href === currentFile)) {
        return group.id;
      }
    }
    return 'dashboard';
  }

  function renderSidebarHTML(currentFile, activeGroup) {
    const navItemsHTML = NAV_GROUPS.map((group) => {
      const isGroupActive = group.id === activeGroup;

      if (!group.items) {
        if (isGroupActive) {
          return `
            <a href="${group.href}" aria-current="page" class="active-nav-gradient flex items-center gap-gutter-sm px-gutter-md py-2.5 rounded-md text-light-on-primary transition-all">
              <span class="material-symbols-outlined text-light-on-primary" style="font-size: 20px; font-variation-settings: 'FILL' 1;" aria-hidden="true">${group.icon}</span>
              <span class="font-label text-label-lg">${group.label}</span>
            </a>
          `;
        }
        return `
          <a href="${group.href}" class="flex items-center justify-between px-gutter-md py-2.5 rounded-md text-light-on-surface hover:bg-light-surface-container-low transition-colors duration-state-change group">
            <span class="flex items-center gap-gutter-sm">
              <span class="material-symbols-outlined text-light-primary" style="font-size: 20px;" aria-hidden="true">${group.icon}</span>
              <span class="font-label text-label-lg">${group.label}</span>
            </span>
            <span class="material-symbols-outlined text-light-on-surface-variant" style="font-size: 18px;" aria-hidden="true">chevron_right</span>
          </a>
        `;
      }

      const subItemsHTML = group.items
        .map((item) => {
          const isItemActive = item.href === currentFile;
          if (isItemActive) {
            return `
              <a href="${item.href}" aria-current="page" class="px-gutter-md py-1.5 rounded-md bg-brand-mint-soft text-light-primary">
                <span class="font-label text-label-md">${item.label}</span>
              </a>
            `;
          }
          return `
            <a href="${item.href}" class="px-gutter-md py-1.5 rounded-md text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary transition-colors">
              <span class="font-body text-body-sm">${item.label}</span>
            </a>
          `;
        })
        .join('');

      return `
        <div class="flex flex-col gap-gutter-xs" data-nav-group="${group.id}">
          <button type="button" data-accordion-toggle="${group.id}" aria-expanded="${isGroupActive ? 'true' : 'false'}"
            class="${isGroupActive ? 'active-nav-gradient text-light-on-primary' : 'text-light-on-surface hover:bg-light-surface-container-low'} w-full flex items-center justify-between px-gutter-md py-2.5 rounded-md transition-colors duration-state-change">
            <span class="flex items-center gap-gutter-sm">
              <span class="material-symbols-outlined ${isGroupActive ? 'text-light-on-primary' : 'text-light-primary'}" style="font-size: 20px; ${isGroupActive ? "font-variation-settings: 'FILL' 1;" : ''}" aria-hidden="true">${group.icon}</span>
              <span class="font-label text-label-lg">${group.label}</span>
            </span>
            <span class="material-symbols-outlined ${isGroupActive ? 'text-light-on-primary' : 'text-light-on-surface-variant'} transition-transform duration-150 ${isGroupActive ? 'rotate-180' : ''}" data-accordion-chevron="${group.id}" style="font-size: 18px;" aria-hidden="true">keyboard_arrow_down</span>
          </button>
          <div class="pl-6 flex flex-col gap-gutter-xs ${isGroupActive ? '' : 'hidden'}" data-accordion-panel="${group.id}">
            ${subItemsHTML}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="p-gutter-md flex flex-col gap-gutter-lg relative z-10 overflow-y-auto">
        <div class="flex items-center justify-between px-1">
          <a href="dashboard.html" class="flex items-center group">
            <img src="assets/images/smartedge-logo.png" alt="SmartEdge - Fast • Secure • Smart Payments" class="h-[68px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" />
          </a>
          <button type="button" id="close-sidebar-btn" class="lg:hidden p-1.5 rounded-md text-light-on-surface-variant hover:bg-light-surface-container-low" aria-label="Close Menu">
            <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
          </button>
        </div>

        <nav aria-label="Main navigation" class="flex flex-col gap-gutter-xs">
          ${navItemsHTML}
        </nav>
      </div>

      <div class="relative pt-gutter-lg pb-gutter-xl px-gutter-md z-10 mt-auto">
        <a href="index.html" class="w-full inline-flex items-center justify-center gap-gutter-sm px-gutter-md py-2.5 rounded-md bg-light-surface-container-lowest/90 border border-light-outline-variant text-light-on-surface hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors duration-state-change relative z-20 font-label text-label-lg">
          <span class="material-symbols-outlined" style="font-size: 18px;" aria-hidden="true">logout</span>
          <span>Logout</span>
        </a>
      </div>

      <svg class="absolute bottom-0 left-0 w-full h-32 pointer-events-none select-none z-0" viewBox="0 0 256 144" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 92C44 68 88 108 134 94C182 80 218 32 256 44V144H0V92Z" fill="#C4FFCB" fill-opacity="0.55"></path>
        <path d="M0 112C56 78 108 122 162 104C205 90 232 68 256 76V144H0V112Z" fill="#48C16E" fill-opacity="0.45"></path>
        <path d="M0 126C62 102 122 136 184 118C218 108 238 98 256 104V144H0V126Z" fill="#109B4D" fill-opacity="0.7"></path>
      </svg>
    `;
  }

  function renderMobileHeaderHTML() {
    return `
      <header class="lg:hidden sticky top-0 z-30 bg-light-surface-container-lowest/95 backdrop-blur-md border-b border-light-outline-variant/40 px-gutter-md py-2.5 flex items-center justify-between gap-gutter-sm">
        <div class="flex items-center gap-gutter-sm min-w-0">
          <button type="button" id="mobile-sidebar-toggle" class="p-2 rounded-md text-light-on-surface bg-light-surface-container-low hover:bg-light-surface-container shrink-0" aria-label="Open Menu">
            <span class="material-symbols-outlined" style="font-size: 20px;">menu</span>
          </button>
          <a href="dashboard.html" class="flex items-center shrink-0">
            <img src="assets/images/smartedge-logo.png" alt="SmartEdge" class="h-9 w-auto object-contain" />
          </a>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-mint-soft text-light-primary">
            <span class="font-label text-label-sm tabular-nums">₹ 0.00</span>
          </div>
          <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-green text-white font-label text-label-sm">
            <span class="material-symbols-outlined" style="font-size: 14px;" aria-hidden="true">storefront</span>
            <span>BIZR109</span>
          </div>
        </div>
      </header>
    `;
  }

  function renderMobileBottomNavHTML(activeGroup) {
    const links = BOTTOM_NAV.map((item) => {
      const isActive = item.group === activeGroup || (activeGroup === 'settlement' && item.group === 'setting');
      return `
        <a href="${item.href}" ${isActive ? 'aria-current="page"' : ''} class="flex flex-col items-center justify-center gap-0.5 py-1 rounded-md ${isActive ? 'bg-brand-mint-soft text-light-primary' : 'text-light-on-surface-variant hover:text-light-primary'} transition-colors">
          <span class="material-symbols-outlined" style="font-size: 20px; ${isActive ? "font-variation-settings: 'FILL' 1;" : ''}" aria-hidden="true">${item.icon}</span>
          <span class="font-label text-label-sm">${item.label}</span>
        </a>
      `;
    }).join('');

    return `
      <nav aria-label="Mobile navigation" class="lg:hidden sticky bottom-0 z-40 bg-light-surface-container-lowest/95 backdrop-blur-md border-t border-light-outline-variant/50 px-2 py-1.5 grid grid-cols-5 items-center">
        ${links}
      </nav>
    `;
  }

  function renderFooterHTML() {
    return `
      <footer class="px-gutter-md lg:px-gutter-lg py-gutter-md border-t border-light-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-gutter-sm max-w-7xl w-full mx-auto">
        <p class="font-body text-body-sm text-light-on-surface-variant text-center sm:text-left">
          Copyright &copy; 2024 Smart Edge &amp; Utility Solutions Private Limited. All rights reserved.
        </p>
        <div class="flex items-center gap-1.5 font-body text-body-sm text-light-on-surface-variant">
          <span>Powered by</span>
          <span class="inline-flex items-center gap-1 font-label text-label-md text-brand-green-deep">
            <span class="w-4 h-4 rounded bg-brand-green text-white inline-flex items-center justify-center text-[10px] font-bold">S</span>
            <span>SmartEdge</span>
          </span>
        </div>
      </footer>
    `;
  }

  function showToast(message, type = 'success') {
    let container = document.getElementById('smartedge-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'smartedge-toast-container';
      container.className = 'fixed bottom-20 lg:bottom-6 right-4 z-50 flex flex-col gap-2 max-w-sm';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    const isError = type === 'error';
    toast.className = `px-4 py-3 rounded-lg shadow-lg border flex items-center gap-2.5 text-sm font-label transition-all duration-200 ${
      isError
        ? 'bg-refund-red-soft text-refund-red border-refund-red/30'
        : 'bg-brand-green-deep text-white border-brand-green/40'
    }`;
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 18px;">${isError ? 'error' : 'check_circle'}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      setTimeout(() => toast.remove(), 200);
    }, 3000);
  }

  function initShell() {
    const currentFile = getCurrentFile();
    const activeGroup = document.body.getAttribute('data-nav-group') || detectActiveGroup(currentFile);

    const sidebarMount = document.getElementById('smartedge-sidebar');
    if (sidebarMount) {
      sidebarMount.innerHTML = renderSidebarHTML(currentFile, activeGroup);
    }

    const mobileHeaderMount = document.getElementById('smartedge-mobile-header');
    if (mobileHeaderMount) {
      mobileHeaderMount.innerHTML = renderMobileHeaderHTML();
    }

    const mobileBottomMount = document.getElementById('smartedge-mobile-bottom-nav');
    if (mobileBottomMount) {
      mobileBottomMount.innerHTML = renderMobileBottomNavHTML(activeGroup);
    }

    const footerMount = document.getElementById('smartedge-footer');
    if (footerMount) {
      footerMount.innerHTML = renderFooterHTML();
    }

    // Mobile drawer toggle
    const toggleBtn = document.getElementById('mobile-sidebar-toggle');
    const closeBtn = document.getElementById('close-sidebar-btn');
    const sidebar = document.getElementById('smartedge-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    function openSidebar() {
      if (!sidebar || !backdrop) return;
      sidebar.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      if (!sidebar || !backdrop) return;
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
    if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
    if (backdrop) backdrop.addEventListener('click', closeSidebar);

    // Sidebar accordion toggles
    document.querySelectorAll('[data-accordion-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const groupId = btn.getAttribute('data-accordion-toggle');
        const panel = document.querySelector(`[data-accordion-panel="${groupId}"]`);
        const chevron = document.querySelector(`[data-accordion-chevron="${groupId}"]`);
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !isHidden);
        btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        if (chevron) chevron.classList.toggle('rotate-180', isHidden);
      });
    });

    // Interactive form feedback for demo/static pages
    document.querySelectorAll('form[data-smartedge-form]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = form.getAttribute('data-success-msg') || 'Action completed successfully.';
        showToast(msg, 'success');
      });
    });

    // Export / Action buttons feedback
    document.querySelectorAll('[data-toast-msg]').forEach((btn) => {
      btn.addEventListener('click', () => {
        showToast(btn.getAttribute('data-toast-msg'), 'success');
      });
    });
  }

  window.SmartEdgeShell = { showToast };
  document.addEventListener('DOMContentLoaded', initShell);
})();
