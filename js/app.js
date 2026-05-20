function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));
  
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  const navItem = document.querySelector(`.nav-item[onclick="showPage('${pageId}')"]`);
  if (navItem) {
    navItem.classList.add('active');
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function login() {
  showPage('page-home');
}

function logout() {
  if (confirm('确定要退出当前账号吗？')) {
    showPage('page-login');
  }
}

function socialLogin(type) {
  const platforms = {
    wechat: '微信',
    alipay: '支付宝',
    phone: '一键登录'
  };
  alert(`正在使用${platforms[type]}登录...`);
  setTimeout(() => {
    showPage('page-home');
  }, 1000);
}

function showPasswordLogin() {
  alert('密码登录功能开发中，暂时请使用验证码登录');
}

function showSearch() {
  alert('搜索功能开发中');
}

function filterCategory(category) {
  const categories = {
    quick: '快餐便当',
    dessert: '甜品饮品',
    pizza: '披萨汉堡',
    coffee: '咖啡下午茶',
    local: '地方菜系'
  };
  alert(`已筛选: ${categories[category]}`);
}

function goToRestaurant(restaurantId) {
  const restaurants = {
    'old-cd': '老成都川味馆',
    'mcdonalds': '麦当劳',
    'mixue': '蜜雪冰城',
    'shuxiang': '蜀香坊川菜馆',
    'light': '轻食主义·健康',
    'huoju': '炭火居精品烤'
  };
  alert(`正在进入 ${restaurants[restaurantId]}...`);
}

function chatWithRider() {
  alert('正在打开与骑手的聊天窗口...');
}

function callRider() {
  alert('正在拨打骑手电话...');
}

function showCoupons() {
  alert('优惠券页面开发中');
}

function showWallet() {
  alert('钱包页面开发中');
}

function showAddresses() {
  alert('地址管理页面开发中');
}

function showFavorites() {
  alert('我的收藏页面开发中');
}

function showService() {
  alert('正在连接在线客服...');
}

function showJoin() {
  alert('入驻加盟页面开发中');
}

function showAbout() {
  alert('关于我们页面开发中');
}

function showSettings() {
  alert('通用设置页面开发中');
}

document.addEventListener('DOMContentLoaded', function() {
  const getCodeBtn = document.querySelector('.btn-get-code');
  if (getCodeBtn) {
    getCodeBtn.addEventListener('click', function() {
      const phoneInput = document.querySelector('.form-input[placeholder="请输入手机号码"]');
      if (!phoneInput.value) {
        alert('请先输入手机号码');
        return;
      }
      if (phoneInput.value.length !== 11) {
        alert('请输入正确的手机号码');
        return;
      }
      alert('验证码已发送');
      let count = 60;
      getCodeBtn.disabled = true;
      getCodeBtn.style.opacity = '0.6';
      const timer = setInterval(() => {
        count--;
        getCodeBtn.textContent = `${count}秒后重发`;
        if (count <= 0) {
          clearInterval(timer);
          getCodeBtn.disabled = false;
          getCodeBtn.style.opacity = '1';
          getCodeBtn.textContent = '获取验证码';
        }
      }, 1000);
    });
  }

  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchInput = document.querySelector('.search-input');
      if (searchInput.value.trim()) {
        alert(`正在搜索: ${searchInput.value}`);
      }
    });
  }

  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        if (searchInput.value.trim()) {
          alert(`正在搜索: ${searchInput.value}`);
        }
      }
    });
  }
});