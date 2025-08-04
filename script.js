const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Welcome to My Portfolio',
            subtitle: 'Showcasing innovative projects and creative solutions',
            isScrolled: false,
            mobileMenuOpen: false,
            selectedProject: null,
            projects: [
                {
                    id: 1,
                    title: 'Grass',
                    description: 'Grass 是 Wynd Network 的旗舰产品，它允许用户通过出售未使用的网络资源来通过互联网连接获利',
                    fullDescription: 'Grass 是 Wynd Network 的旗舰产品，它允许用户通过出售未使用的网络资源来通过互联网连接获利。对于个人来说，它将显示为一个网络扩展，被下载、保留并被遗忘。它将在幕后完成工作，帮助其他人获取公共网络数据，以换取协议原生代币的付款。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f7200167ec.png',
                    status: 'in-progress',
                    technologies: ['python', 'html', 'web3'],
                    github: 'https://github.com/claire-cycle/grass_bot',
                    demo: null
                },
                {
                    id: 2,
                    title: 'MegaETH',
                    description: 'MegaETH 正在构建超高吞吐量和低延迟 EVM 兼容的 L2s，加速以太坊的可扩展性终局。',
                    fullDescription: 'MegaETH 是一个 Layer 2 解决方案，它利用侧链和状态通道技术来提高以太坊的可扩展性。MegaETH 允许用户在低延迟和高吞吐量的环境中进行交易，同时保持与主网的兼容性。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f71ff4b83c.png',
                    status: 'in-progress',
                    technologies: ['python', 'web3'],
                    github: 'https://github.com/claire-cycle/megaeth_bot',
                    demo: null
                },
                {
                    id: 3,
                    title: 'Warden Protocol',
                    description: 'Warden 协议是专为开发者构建智能应用而设计的全栈 L1 区块链。',
                    fullDescription: 'Warden 协议是专为开发者构建智能应用而设计的全栈 L1 区块链。Warden 打造了一条可验证的 AI 原生区块链，其模型可供任何人在任何地方访问，其输出直接驱动智能应用。该平台旨在构建无限制应用：智能应用可以在链上无缝运行，也可以在链下运行，反之亦然。Cosmos、以太坊或 Solana 上的开发者都可以使用 Warden 进行构建。Warden 与任何区块链无关。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f71ff4e2c7.png',
                    status: 'in-progress',
                    technologies: ['python', 'web3'],
                    github: 'https://github.com/claire-cycle/warden_bot',
                    demo: null
                },
                {
                    id: 4,
                    title: 'Bless',
                    description: 'Bless 是一个由日常设备驱动的共享计算协议，会自动将未使用的设备与需要执行的计算任务连接起来。',
                    fullDescription: 'Bless 是一个由日常设备驱动的共享计算协议，会自动将未使用的设备与需要执行的计算任务连接起来。用户现在可以自动运行他们使用的应用程序和网站，并因此获得奖励。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f751d3e9b9.png',
                    status: 'planning',
                    technologies: ['python', 'web3'],
                    github: null,
                    demo: null
                },
                {
                    id: 5,
                    title: 'DAWN',
                    description: 'DAWN 是一个用于提供互联网服务的去中心化无线网络，由 Andrena 团队开发，业主或居民有机会购买和出售其周围地区的互联网容量——使用户能够作为自己的互联网提供商进行运营。',
                    fullDescription: 'DAWN 是一个用于提供互联网服务的去中心化无线网络，由 Andrena 团队开发，业主或居民有机会购买和出售其周围地区的互联网容量——使用户能够作为自己的互联网提供商进行运营。 DAWN 促进了一个无需信任的交换系统，该系统采用回程、位置和频率证明。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f74a5eee30.png',
                    status: 'planning',
                    technologies: ['python', 'web3'],
                    github: 'https://github.com/yourusername/lms-platform',
                    demo: null
                },
                {
                    id: 6,
                    title: 'XOS',
                    description: 'XOS 是 Solana 的高性能第 2 层解决方案，旨在重新定义生态系统内的可扩展性、速度和成本效益。',
                    fullDescription: 'XOS 是 Solana 的高性能第 2 层解决方案，旨在重新定义生态系统内的可扩展性、速度和成本效益。通过满足去中心化应用程序 (dApp) 的动态需求，XOS 提升了 Solana 在 GameFi、DeFi 和 Web3 创新方面的潜力。',
                    image: 'https://free.picui.cn/free/2025/08/03/688f74ba85075.png',
                    status: 'planning',
                    technologies: ['python', 'web3'],
                    github: null,
                    demo: null
                }
            ],
            contactInfo: [
                {
                    type: 'email',
                    label: 'ruichencai@gmai.com',
                    link: 'mailto:ruichencai@gmai.com',
                    icon: 'fas fa-envelope'
                },
                {
                    type: 'github',
                    label: 'GitHub',
                    link: 'https://github.com/claire-cycle?tab=repositories',
                    icon: 'fab fa-github'
                },
                {
                    type: 'twitter',
                    label: 'Twitter',
                    link: 'https://x.com/cycle4221461',
                    icon: 'fab fa-twitter'
                }
            ]
        }
    },
    mounted() {
        // Handle scroll events for navbar
        window.addEventListener('scroll', this.handleScroll);
        
        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add intersection observer for animations
        this.setupIntersectionObserver();
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 100;
        },
        
        scrollToProjects() {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },
        
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        
        closeMobileMenu() {
            this.mobileMenuOpen = false;
        },
        
        getStatusClass(status) {
            const statusMap = {
                'planning': 'planning',
                'in-progress': 'in-progress',
                'completed': 'completed'
            };
            return statusMap[status] || 'planning';
        },
        
        getStatusText(status) {
            const statusMap = {
                'planning': '筹备中',
                'in-progress': '进行中',
                'completed': '已完成'
            };
            return statusMap[status] || '筹备中';
        },
        
        viewProject(project) {
            this.selectedProject = project;
            document.body.style.overflow = 'hidden';
        },
        
        closeModal() {
            this.selectedProject = null;
            document.body.style.overflow = 'auto';
        },
        
        openLink(url) {
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        },
        
        setupIntersectionObserver() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);
            
            // Observe project cards
            this.$nextTick(() => {
                const projectCards = document.querySelectorAll('.project-card');
                projectCards.forEach(card => {
                    observer.observe(card);
                });
            });
        },
        
        // Utility method to handle keyboard navigation
        handleKeydown(event) {
            if (event.key === 'Escape' && this.selectedProject) {
                this.closeModal();
            }
        }
    },
    
    // Add keyboard event listener
    created() {
        document.addEventListener('keydown', this.handleKeydown);
    },
    
    destroyed() {
        document.removeEventListener('keydown', this.handleKeydown);
    }
}).mount('#app');

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    
    // Add loader styles
    const loaderStyles = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease-out;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = loaderStyles;
    document.head.appendChild(styleSheet);
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }, 1000);
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add smooth reveal animations for elements
    const revealElements = document.querySelectorAll('.project-card, .contact-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(el);
    });
});