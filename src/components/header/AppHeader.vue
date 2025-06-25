<template>
    <header :class="{ 'sticky-header': isSticky, 'header-hidden': !isSticky }">
        <div class="container justify-content-between align-items-center">
            <div class="logo">
              <img src="@/assets/small-logo.svg" alt="PLNL Studio Logo" />
            </div>
            <div class="header-content">
                <nav class="header-menu">
                    <ul class="menu-list">
                        <li v-for="item in menuItems" :key="item.label">
                            <router-link :to="item.to" :aria-label="item.label">
                                <i v-if="item.icon" :class="item.icon" aria-hidden="true"></i>
                                <span>{{ item.label }}</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="action">
                    <slot name="action" />
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Use shallowRef for better performance with large objects
const scrollThreshold: number = 100
const isSticky = ref<boolean>(false)

// Define menu items as a constant to avoid reactivity overhead
const menuItems = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
    },
    {
      label: 'Work',
      icon: 'pi pi-briefcase',
      to: '/projects'
    },
    {
        label: 'About',
        icon: 'pi pi-info',
        to: '/about'
    },
    {
      label: 'Services',
      icon: 'pi pi-briefcase',
      to: '/services'
    },
    {
      label: 'Press',
      icon: 'pi pi-briefcase',
      to: '/press-awards'
    },
    {
        label: 'Contact',
        icon: 'pi pi-phone',
        to: '/contact'
    }
]

// Use throttled scroll handler for better performance
let ticking = false
const handleScroll = (): void => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollPosition = window.scrollY
            isSticky.value = currentScrollPosition > scrollThreshold
            ticking = false
        })
        ticking = true
    }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style lang="scss" scoped>
@use "@/styles/px-to-rem" as func;
header {
    background-color: #F5F3F1;
    padding: 0.5rem 0;
    box-shadow: var(--card-shadow);
    width: 100%;
    will-change: transform;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: func.px-to-rem(16) func.px-to-rem(32);

        &.justify-content-between {
            justify-content: space-between;
        }

        &.align-items-center {
            align-items: center;
        }

        @media (max-width: 768px) {
            padding: func.px-to-rem(8) func.px-to-rem(16);
        }

        .header-content {
            display: flex;
            align-items: center;
            gap: func.px-to-rem(32);

            .action {
                display: flex;
                align-items: center;
            }

            .header-menu {
                .menu-list {
                    display: flex;
                    gap: func.px-to-rem(16);
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li {
                        a {
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            font-size: func.px-to-rem(18);
                            font-weight: 400;
                            line-height: func.px-to-rem(28);
                            letter-spacing: 0.01rem;
                            padding: func.px-to-rem(8);
                            text-transform: uppercase;
                            margin: 0;
                            border: none;
                            transition: background-color 0.2s ease-in-out;
                            i {
                                font-size: 1rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    animation: slideDown 0.3s ease-in-out;
    transform: translateZ(0); /* Hardware acceleration */
    background-color: #F5F3F1;
    box-shadow: var(--card-shadow);
}

.header-hidden {
    position: relative;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

.router-link-exact-active {
  font-weight: bold;
}

.logo {
    width: func.px-to-rem(50);
    margin-right: func.px-to-rem(48);
    img {
        width: 100%;
        height: auto;
    }
}
</style>