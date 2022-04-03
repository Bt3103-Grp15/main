<template>
  <div class="layout">
    <header>
      <div class="logo">
        <h2>WExplorer</h2>
      </div>
      <nav>
        <h2>
          <ul class="nav-list">
            <li
              v-for="(item, index) in menuList"
              :key="index"
              :class="{ active: wordKey === item.level }"
              @click="jumpPage(item.name, item.level)"
            >
              <span>{{ item.label }}</span>
              <ul class="son-list">
                <li
                  v-for="(menu, key) in item.child"
                  :key="key"
                  :class="{ active: wordKey === menu.level }"
                  @click.stop="jumpPage(menu.name, menu.level)"
                >
                  {{ menu.label }}
                </li>
              </ul>
            </li>
          </ul>
        </h2>
      </nav>
      <div class="empty-box"></div>
      <div class="user-control">
        <div
          v-if="$store.state.user !== null"
          @click="navProfile()"
          class="profile"
          ref="profile"
        >
          <span class="profile-name">{{ $store.state.username[0] }}</span>
          <div class="empty-box"></div>
          <button class="btn-logout" @click="this.$store.dispatch('logout')">Log Out</button>
        </div>
        <div v-else>
          <router-link class="link" :to="{ name: 'Login' }">
            Login/Register
          </router-link>
        </div>
        <!-- <div>
        <span></span>
        <span class="Sign" @click='this.$store.dispatch("logout")'>
          <svg-icon class="svg-icon" iconClass="touxiang"></svg-icon>
          <span v-if="$store.state.user!==null">Logout</span>
          <span v-else>Login</span>
        </span>
      </div> -->
      </div>
    </header>

    <section class="content">
      <router-view></router-view>
    </section>

    <footer>
      <h2>
        <div>
          <div class="item">About World Explorer</div>
          <div class="item">Do Business With Us</div>
          <div class="item">Explore</div>
        </div>
        <div class="second">
          <div class="item">About Us</div>
          <div class="item">Owners</div>
          <div class="item">Write a Review</div>
        </div>
        <div class="second">
          <div class="item">Trust&Safety</div>
          <div class="item">Business Advantage</div>
          <div class="item">Join</div>
        </div>
        <div class="second">
          <div class="item">Resources&Policies</div>
          <div class="item">Sponsored Placements</div>
          <div class="item">Help Centre</div>
        </div>
      </h2>
      <div class="bot-logo">
        <div class="left-log">
          <img src="../assets/image/chongwutubiao04.png" mode="" />
        </div>
        <div>
          <h2>WExplorer</h2>
        </div>
        <div class="logo-list">
          <img
            src="../assets/image/01ab6619093f45388d66736ec22e5885.png"
            alt=""
          />
          <img
            src="../assets/image/23fd2a2be53141ed810f4d3dcdcd01fa.png"
            alt=""
          />
          <img
            src="../assets/image/81af6121f84c41a5b4391d7d37fce12a.png"
            alt=""
          />
          <img
            src="../assets/image/9c486556465843c5850fabfd68dfae49.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  </div>
</template>


<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const menuList = [
  {
    name: "index",
    label: "Destination",
    level: "1",
    child: [
      {
        name: "indivAttractionPager",
        label: "Indiv Attraction Pager",
        level: "1-1",
      },
      {
        name: "attractionListPage",
        label: "attractionListPage",
        level: "1-2",
      },
    ],
  },
  {
    name: "blog-main",
    label: "Blog",
    level: "2",
    child: [
      {
        name: "blogListPage",
        label: "Blog List Page",
        level: "2-1",
      },
      {
        name: "indivAttractionPager",
        label: "Search Results",
        level: "2-2",
      },
      {
        name: "indivBlogPage",
        label: "Indiv Blog Page",
        level: "2-3",
      },
    ],
  },
  {
    name: "blog",
    label: "Routes",
    level: "3",
    child: [
      {
        name: "cityPage",
        label: "City Page",
        level: "3-1",
      },
      {
        name: "indivAttractionPager",
        label: "Design Routes",
        level: "3-2",
      },
      {
        name: "indivBlogPage",
        label: "Indiv Route Page",
        level: "3-3",
      },
    ],
  },
];

const wordKey = ref("1");
const jumpPage = (name, index) => {
  router.push({
    name,
  });
  wordKey.value = index;
};

const navProfile = () => {
  router.push({ name: "Profile" });
};
</script>




<style lang="less" scoped>
.userControl {
  position: absolute;
  right: 0;
  top: 10px;
}
.empty-box {
  width: 50px;
}
.profile {
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  background-color: #303030;
  padding: 30px;
}

button {
  padding: 10px;
  color: #000;
}

.layout {
  background: #ccc;
  height: 100%;
  padding-top: 105px;
  width: 100%;
  header {
    height: auto;
    width: 100%;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 99999999;
    .logo {
      width: 376px;
      font-weight: bold;
      font-size: 28px;
      height: 105px;
      display: flex;
      align-items: center;
      padding-left: 30px;
    }
    .nav-list {
      display: flex;
      li {
        width: 238px;
        height: 50px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        line-height: 50px;
        color: rgb(133, 133, 133);
        border-top: 4px solid #f2f2f2;
        position: relative;
        &.active {
          color: #000;
          border-top: 4px solid #000 !important;
        }
        &:hover {
          border-top: 4px solid #000;
          .son-list {
            display: block;
          }
        }
      }
      .son-list {
        position: absolute;
        left: 50%;
        background: #fff;
        display: none;
        transform: translateX(-50%);
        &:hover {
          display: block;
        }
        li {
          border-top: 4px solid #fff;
          padding: 10px !important;
          min-width: 238px;
          width: auto;
          height: auto;
          // word-break: keep-all;
          white-space: nowrap;
          &:hover {
            border-top: 4px solid #000 !important;
          }
        }
      }
    }
  }
  .content {
    min-height: 100%;
  }
  footer {
    position: relative;
    z-index: 999999;
    padding: 56px calc((100% - 980px) * 0.5);
    padding-bottom: 0;
    background: #5581b0;
    height: 279px;
    color: #fff;
    font-family: avenir-lt-w01_85-heavy1475544, avenir-lt-w05_85-heavy,
      sans-serif;
    // font-weight: 700;
    letter-spacing: 0.2em;
    h2 {
      > div {
        display: flex;
        padding-bottom: 5px;
        &.second {
          > div.item {
            font-size: 15px !important;
          }
        }
        > div.item {
          flex-shrink: 0;
          margin-right: 100px;
          width: 287px;
          font-size: 20px;
        }
      }
    }
    .bot-logo {
      display: flex;
      align-items: center;
      .left-log {
        img {
          height: 61px;
          width: 61px;
          margin-right: 10px;
        }
      }
      h2 {
        font-size: 25px;
        letter-spacing: 0.2em;
      }
      .logo-list {
        margin-left: 40px;
        img {
          height: 21px;
          width: 21px;
          margin-right: 3px;
        }
      }
    }
  }
}
.Sign {
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  background: #5581b0;
  color: #fff;
  svg {
    height: 20px;
    width: 30px;
  }
}

.user-control {
  .profile-name {
    margin: auto 20px auto auto
  }
  .btn-logout {
    margin: auto auto 20px 100px
  }
}
</style>
